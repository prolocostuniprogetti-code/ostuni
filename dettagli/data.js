<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20n6a9c8z8+p4u7s+j8x2e1uA4gH4m9bA4Xv8gD8v4g="
        crossorigin=""></script>
        
    <script src="dettagli/data.js"></script>
    
    <script>
        const detailPanel = document.getElementById('detail-panel');
        const detailContent = document.getElementById('detail-content');
        const detailTitleHeader = document.getElementById('detail-title-header');
        const welcomeCard = document.getElementById('welcome-card');
        const mapPanel = document.getElementById('map-panel'); 
        const headerTitle = document.getElementById('header-title');
        let userName = localStorage.getItem('userName'); 
        let currentMap = null; 
        
        // Funzione di inizializzazione principale
        function initApp() {
            // CRITICAL CHECK: Verifica che data.js sia caricato correttamente
            if (typeof attrazioni === 'undefined') {
                console.error("ERRORE: Variabile 'attrazioni' non trovata. Controlla il nome del file 'dettagli/data.js'.");
                document.getElementById('main-content').innerHTML = `
                    <div class="p-6 bg-red-100 border-l-4 border-red-500 text-red-700 font-bold rounded-lg">
                        ERRORE CRITICO: File dati non trovato. Assicurati che il file nella cartella 'dettagli/' si chiami ESATTAMENTE 'data.js'.
                    </div>
                `;
                return;
            }

            // Imposta lo stato iniziale
            renderWelcomeCard();
            setActiveScreen('home-screen'); 
            
            // Inizializza la sezione itinerari (se 'barocco' esiste in data.js)
            changeSection('barocco');
        }

        // --- GESTIONE SCHERMATE ---
        function setActiveScreen(screenId) {
            // Nasconde l'overlay della Mappa se attivo
            mapPanel.classList.remove('active');
            document.body.style.overflow = 'auto'; 
        
            document.querySelectorAll('.app-screen').forEach(screen => {
                screen.classList.remove('active');
            });
            document.getElementById(screenId).classList.add('active');

            document.querySelectorAll('.nav-button').forEach(button => {
                button.classList.remove('active');
            });
            document.getElementById(`nav-${screenId.split('-')[0]}`).classList.add('active');
            
            // Aggiorna il titolo nell'header
            const titles = {
                'home-screen': 'Home Dashboard',
                'bookings-screen': 'Le Tue Prenotazioni',
                'profile-screen': 'Gestisci Profilo'
            };
            headerTitle.textContent = titles[screenId] || 'Tour Guide App';
            
            if (screenId === 'profile-screen') {
                document.getElementById('profile-username').textContent = userName || 'Ospite (Non Registrato)';
            }
            
            window.scrollTo(0, 0);
        }
        
        // --- LOGICA DI LOGIN/REGISTRAZIONE ---
        function renderWelcomeCard() {
            userName = localStorage.getItem('userName');
            if (userName) {
                welcomeCard.innerHTML = `
                    <p class="text-lg font-semibold text-gray-800 mb-1">Benvenuto, ${userName}! 👋</p>
                    <p class="text-sm text-gray-500">Esplora gli itinerari o prenota una guida locale.</p>
                `;
            } else {
                welcomeCard.innerHTML = `
                    <p class="text-base font-semibold text-gray-800 mb-3">Registrati/Accedi per un'esperienza completa!</p>
                    <div class="flex space-x-2">
                        <input id="userNameInput" type="text" placeholder="Inserisci Email (Simulato)" class="flex-grow p-2 border border-gray-300 rounded-lg text-sm focus:ring-[#054D8F] focus:border-[#054D8F]">
                        <button onclick="registerUser()" class="bg-[#054D8F] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#03376B] transition duration-150 flex-shrink-0">
                            Accedi/Registrati
                        </button>
                    </div>
                `;
            }
        }

        function registerUser() {
            const inputElement = document.getElementById('userNameInput');
            const email = inputElement.value.trim();
            const name = email.split('@')[0];

            if (email && email.includes('@')) {
                localStorage.setItem('userName', name);
                userName = name;
                renderWelcomeCard(); 
            } else {
                alert('Inserisci una email valida per la simulazione di accesso!');
            }
        }
        
        // --- FUNZIONI MAPPA (CORRETTE e Potenziate) ---

        function showMap() {
             // Nasconde tutte le schermate attive e deseleziona i pulsanti Nav
            document.querySelectorAll('.app-screen').forEach(screen => {
                screen.classList.remove('active');
            });
            document.querySelectorAll('.nav-button').forEach(button => {
                button.classList.remove('active');
            });
             // Attiva il pulsante Mappa
            document.getElementById('nav-map').classList.add('active');
            
            // Rende il pannello Mappa visibile
            mapPanel.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Inizializza la mappa se non è ancora stata creata
            if (!currentMap) {
                initMap();
            } 
            
            // FIX CRITICO: Forza il ricalcolo delle dimensioni.
            // Il check `if (currentMap)` ora è esterno all'inizializzazione.
            if (currentMap) {
                setTimeout(() => {
                    // Questa chiamata risolve l'overlay bianco perché forza Leaflet a misurare
                    // il contenitore DOPO che è stato reso visibile.
                    currentMap.invalidateSize();
                }, 10); 
            }
        }
        
        function hideMap() {
            mapPanel.classList.remove('active');
            document.body.style.overflow = 'auto';
            // Quando nascondiamo la mappa, torniamo alla Home e attiviamo il pulsante corretto
            setActiveScreen('home-screen'); 
        }
        
        function initMap() {
            const ostuniCoords = [40.7303, 17.5752];

            currentMap = L.map('map').setView(ostuniCoords, 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(currentMap);

            // Aggiunge i marker (richiede data.js)
            attrazioni.forEach(section => {
                section.elementi.forEach(item => {
                    if (item.lat && item.lng) {
                        L.marker([item.lat, item.lng])
                            .addTo(currentMap)
                            .bindPopup(`
                                <b>${item.titolo}</b><br>${item.dettaglio}
                                <br><button onclick="showDetail('${item.id}', { preventDefault: () => {} }); hideMap();" 
                                    class="bg-[#054D8F] text-white text-xs px-2 py-1 rounded mt-2 hover:bg-[#03376B] transition">
                                    Vedi Dettaglio
                                </button>
                            `);
                    }
                });
            });
        }
        
        // --- FUNZIONI CONTENUTO (Itinerari) ---
        function changeSection(sectionId) {
            const sectionData = attrazioni.find(s => s.id === sectionId);
            const listContainer = document.getElementById('attraction-list');
            const descriptionContainer = document.getElementById('current-description');
            
            // CRITICAL FIX: Controllo se i dati della sezione sono validi per prevenire il crash all'avvio
            if (!sectionData) {
                 console.error(`Dati per la sezione '${sectionId}' non trovati. Controlla il tuo data.js.`);
                 listContainer.innerHTML = `<li><div class="p-4 bg-red-100 rounded-lg text-red-700 font-medium">Impossibile caricare i dettagli dell'itinerario. (Errore nel data.js)</div></li>`;
                 descriptionContainer.innerHTML = `<strong>Errore Dati:</strong> Sezione non caricata.`;
                 return; 
            }

            listContainer.innerHTML = '';
            descriptionContainer.innerHTML = `<strong>Itinerario ${sectionData.nome}:</strong> ${sectionData.descrizione}`;

            document.querySelectorAll('.tab-button').forEach(button => {
                button.classList.remove('active');
            });
            document.getElementById(`tab-${sectionId}`).classList.add('active');

            sectionData.elementi.forEach(item => {
                const listItem = document.createElement('li');
                
                listItem.innerHTML = `
                    <div class="attraction-card">
                        <a href="#" onclick="showDetail('${item.id}', event)" class="flex justify-between items-center w-full">
                            <div class="flex items-center space-x-4">
                                <div class="w-8 h-8 flex items-center justify-center bg-[#054D8F] text-white font-bold rounded-full flex-shrink-0">
                                    ${item.numero}
                                </div>
                                <div>
                                    <p class="text-base font-semibold text-gray-800 hover:text-[#054D8F] transition duration-150">
                                        ${item.titolo}
                                    </p>
                                    <p class="text-xs text-gray-500 mt-0.5">${item.dettaglio}</p>
                                </div>
                            </div>
                            <svg class="w-5 h-5 text-[#054D8F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </div>
                `;
                listContainer.appendChild(listItem);
            });
        }
        
        // --- FUNZIONI DETTAGLIO (Migliorate per robustezza) ---

        function showDetail(attractionId, event) {
            if (event) {
                event.preventDefault(); 
            }
            
            const detailHTML = getAttractionDetail(attractionId);
            
            detailContent.innerHTML = detailHTML;
            detailTitleHeader.textContent = getAttractionTitle(attractionId);
            detailPanel.classList.add('active');

            document.body.style.overflow = 'hidden'; 
            detailPanel.scrollTop = 0; 
        }

        function hideDetail() {
            detailPanel.classList.remove('active');
            document.body.style.overflow = 'auto'; 
        }

        function getAttractionTitle(id) {
            if (typeof attrazioni === 'undefined') return 'Dettaglio'; 
            const allElements = attrazioni.flatMap(s => s.elementi);
            const item = allElements.find(e => e.id === id);
            return item ? item.titolo : 'Dettaglio';
        }
        
        function getAttractionDetail(id) {
            if (typeof attrazioni === 'undefined') return 'Dati non disponibili.'; 
            const allElements = attrazioni.flatMap(s => s.elementi);
            const item = allElements.find(e => e.id === id);
            
            if (!item) {
                return '<p class="text-red-500">Dettaglio attrazione non trovato.</p>';
            }

            // Simula il contenuto del dettaglio con template
            return `
                <div class="space-y-6">
                    <img src="dettagli/immagini/${item.immagine || 'placeholder.jpg'}" alt="${item.titolo}" class="w-full h-auto object-cover rounded-xl shadow-lg">
                    
                    <div class="audio-container">
                        <p class="font-semibold text-orange-700 flex items-center mb-2">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13.5a2.5 2.5 0 01-2.5 2.5H9z"></path></svg>
                            Audioguida:
                        </p>
                        <audio controls class="w-full">
                            <source src="dettagli/audio/${item.audio || 'placeholder.mp3'}" type="audio/mp3">
                            Il tuo browser non supporta l'elemento audio.
                        </audio>
                    </div>

                    <div>
                        <h3 class="text-xl font-bold mb-2 text-[#054D8F]">Descrizione Completa</h3>
                        <p class="text-gray-700 leading-relaxed">${item.descrizione_completa || item.dettaglio}</p>
                    </div>

                    <div class="flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 pt-4">
                        <p>📍 Coordinate: ${item.lat ? `${item.lat}, ${item.lng}` : 'N/D'}</p>
                        <button onclick="alert('Simulazione Navigazione con Google Maps')" class="bg-green-500 text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-green-600 transition">
                            Naviga
                        </button>
                    </div>
                </div>
            `;
        }
    </script>
