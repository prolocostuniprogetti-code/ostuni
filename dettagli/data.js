// dettagli/data.js
// Questo file contiene la struttura dei dati (attrazioni) e i contenuti dettagliati (contenutiDettaglio).

// 1. Array degli itinerari con Dettagli e Coordinate GPS
const attrazioni = [
    {
        id: 'barocco',
        nome: '1. Barocco & Sacro',
        descrizione: 'Esplora i capolavori barocchi e i luoghi di culto più significativi del centro storico. Durata stimata: 2 ore.',
        elementi: [
            // TUTTI GLI ELEMENTI DEVONO AVERE lat e lng PER LA MAPPA
            { id: 'obelisco', numero: 1, titolo: 'Obelisco di S. Oronzo', dettaglio: 'Monumento votivo barocco, punto di partenza ideale.', lat: 40.7301, lng: 17.5755 },
            { id: 'cattedrale', numero: 2, titolo: 'Cattedrale', dettaglio: 'Il simbolo di Ostuni, famosa per il suo maestoso rosone.', lat: 40.7297, lng: 17.5768 },
            { id: 'spiritosanto', numero: 3, titolo: 'Chiesa dello Spirito Santo', dettaglio: 'Una delle chiese più antiche, con portale rinascimentale.', lat: 40.7313, lng: 17.5760 },
            { id: 'sanfrancesco', numero: 4, titolo: 'Chiesa San F. d\'Assisi', dettaglio: 'Esempio di architettura barocca con elementi medievali.', lat: 40.7310, lng: 17.5745 },
            { id: 'loggiavescovile', numero: 5, titolo: 'La Loggia, Palazzo Vescovile', dettaglio: 'L\'elegante ponte che collega la Cattedrale al Palazzo.', lat: 40.7299, lng: 17.5767 },
            { id: 'madonnastella', numero: 6, titolo: 'Chiesa Santa M. della Stella', dettaglio: 'Chiesa dedicata alla Madonna della Stella.', lat: 40.7288, lng: 17.5772 },
            { id: 'madonnacarmine', numero: 7, titolo: 'Chiesa Madonna del Carmine', dettaglio: 'Una chiesa importante, spesso punto di riferimento nel quartiere.', lat: 40.7305, lng: 17.5750 },
        ]
    },
    {
        id: 'mura',
        nome: '2. Mura & Panorami',
        descrizione: 'Percorso lungo l\'antica cinta muraria aragonese con i migliori punti fotografici sulla Città Bianca e la Piana degli Ulivi. Durata stimata: 1.5 ore.',
        elementi: [
            { id: 'portasandemetrio', numero: 1, titolo: 'Porta San Demetrio', dettaglio: 'Una delle antiche porte di accesso al centro storico.', lat: 40.7288, lng: 17.5749 },
            { id: 'portanova', numero: 2, titolo: 'Porta Nova', dettaglio: 'Porta principale, accesso al borgo antico.', lat: 40.7318, lng: 17.5764 },
            { id: 'voltafederico', numero: 3, titolo: 'Volta di Federico II', dettaglio: 'Arco storico legato alla presenza dell\'Imperatore.', lat: 40.7295, lng: 17.5770 },
            { id: 'belvedere', numero: 4, titolo: 'Vista Panoramica Belvedere (Masseria)', dettaglio: 'La vista più classica sul centro storico, perfetta per foto.', lat: 40.7305, lng: 17.5740 },
            { id: 'largopappada', numero: 5, titolo: 'Largo Pappadà', dettaglio: 'Piazzetta panoramica con vista sulla valle.', lat: 40.7285, lng: 17.5765 },
        ]
    },
    {
        id: 'sapori',
        nome: '3. Sapori & Tradizioni',
        descrizione: 'Scopri i sapori locali: panifici storici, mercati rionali e botteghe artigiane. Durata stimata: 2.5 ore (con pause gusto!).',
        elementi: [
            { id: 'piazzaliberta', numero: 1, titolo: 'Piazza della Libertà (Mercato)', dettaglio: 'Cuore pulsante della città, sede del mercato rionale.', lat: 40.7303, lng: 17.5752 },
            { id: 'palazzomunicipale', numero: 2, titolo: 'Palazzo Municipale', dettaglio: 'Antico convento francescano, sede del Municipio e piazza principale.', lat: 40.7304, lng: 17.5750 },
            { id: 'fornovechio', numero: 3, titolo: 'Forno Storico "Il Vecchio"', dettaglio: 'Assaggia il tipico pane di Altamura o la focaccia ostunese.', lat: 40.7315, lng: 17.5758 },
            { id: 'masseriabrancati', numero: 4, titolo: 'Masseria Brancati (Frantoio Ipogeo)', dettaglio: 'Visita un frantoio ipogeo e assaggia l\'olio EVO millenario.', lat: 40.7250, lng: 17.5500 }, 
            { id: 'osteriamuraglia', numero: 5, titolo: 'Osteria Tipica "La Muraglia"', dettaglio: 'Un luogo per assaporare piatti tradizionali pugliesi.', lat: 40.7290, lng: 17.5763 },
        ]
    },
];


// 2. Mappa dei contenuti HTML (La libreria di tutti i contenuti di dettaglio)
const contenutiDettaglio = {
    // Obelisco - Contenuto ricco
    'obelisco': `
        <div class="relative h-72 w-full overflow-hidden rounded-xl shadow-lg mb-6">
            <img src="immagini/obelisco.jpg" alt="Colonna Sant'Oronzo Ostuni" class="w-full h-full object-cover">
        </div>
        <div class="audio-container flex items-center space-x-3">
            <svg class="w-6 h-6 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v14m-6 3h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2zm0 0H5a2 2 0 01-2-2v-6a2 2 0 012-2h12"></path></svg>
            <span class="font-medium text-gray-700 flex-shrink-0">Ascolta la Guida:</span>
            <audio controls class="flex-grow">
                <source src="immagini/obelisco.mp3" type="audio/mpeg"> 
                Il tuo browser non supporta l'elemento audio.
            </audio>
        </div>
        <div class="prose max-w-none text-lg leading-relaxed text-gray-700">
            <h1 class="text-3xl font-bold mb-3">Obelisco di S. Oronzo</h1>
            <p>L'Obelisco di Sant'Oronzo, eretto tra il 1771 e il 1773 su progetto del maestro artigiano <strong>Giuseppe Greco</strong>, è un maestoso monumento votivo in stile Barocco Pugliese, alto circa 21 metri. Simbolo di gratitudine civica nei confronti del Santo Patrono che, secondo la tradizione, salvò Ostuni dalla peste nel 1743. Un vero capolavoro di scultura e ingegneria barocca che domina Piazza della Libertà.</p>
            <h2 class="text-2xl font-bold mt-6 mb-3 text-blue-700">Significato Storico</h2>
            <p>Le statue poste sul piedistallo raffigurano vari santi che hanno avuto un ruolo nella protezione della città. L'obelisco non è solo un monumento religioso, ma anche un punto focale storico e sociale, da cui partono tutti gli itinerari principali della città bianca.</p>
        </div>
    `,
    // Cattedrale - Contenuto ricco
    'cattedrale': `
        <div class="relative h-72 w-full overflow-hidden rounded-xl shadow-lg mb-6">
            <img src="immagini/cattedrale.jpg" alt="Facciata della Cattedrale di Ostuni" class="w-full h-full object-cover">
        </div>
        <div class="audio-container flex items-center space-x-3">
            <svg class="w-6 h-6 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v14m-6 3h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2zm0 0H5a2 2 0 01-2-2v-6a2 2 0 012-2h12"></path></svg>
            <span class="font-medium text-gray-700 flex-shrink-0">Ascolta la Guida:</span>
            <audio controls class="flex-grow">
                <source src="immagini/cattedrale.mp3" type="audio/mpeg"> 
                Il tuo browser non supporta l'elemento audio.
            </audio>
        </div>
        <div class="prose max-w-none text-lg leading-relaxed text-gray-700">
            <h1 class="text-3xl font-bold mb-3">Cattedrale (Concattedrale di Santa Maria Assunta)</h1>
            <p>La Concattedrale, posta sul punto più alto del colle, è il fulcro religioso e storico di Ostuni. La sua costruzione fu avviata nel 1435 e completata tra il 1470 e il 1495, presentando un affascinante mix di stili, in particolare il tardo Gotico e il Rinascimento.</p>
            <h2 class="text-2xl font-bold mt-6 mb-3 text-blue-700">Il Rosone Maestoso</h2>
            <p>Il punto di maggiore interesse è il suo gigantesco rosone, uno dei più grandi d'Europa, con 24 raggi finemente lavorati che simboleggiano le 24 ore del giorno. La facciata, di forma concava-convessa, conferisce un effetto dinamico e spettacolare, tipico del barocco pur essendo la struttura più antica.</p>
        </div>
    `,
    // Chiesa dello Spirito Santo - Contenuto ricco
    'spiritosanto': `
        <div class="relative h-72 w-full overflow-hidden rounded-xl shadow-lg mb-6">
            <img src="immagini/spiritosanto.jpg" alt="Facciata della Chiesa dello Spirito Santo" class="w-full h-full object-cover">
        </div>
        <div class="audio-container flex items-center space-x-3">
            <svg class="w-6 h-6 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v14m-6 3h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2zm0 0H5a2 2 0 01-2-2v-6a2 2 0 012-2h12"></path></svg>
            <span class="font-medium text-gray-700 flex-shrink-0">Ascolta l'Approfondimento:</span>
            <audio controls class="flex-grow">
                <source src="immagini/spiritosanto.mp3" type="audio/mpeg"> 
                Il tuo browser non supporta l'elemento audio.
            </audio>
        </div>
        <div class="prose max-w-none text-lg leading-relaxed text-gray-700">
            <h1 class="text-3xl font-bold text-gray-800 mb-3">Chiesa dello Spirito Santo</h1>
            
            <p>La Chiesa dello Spirito Santo è uno degli edifici più antichi e significativi di Ostuni, situata lungo l'antica strada che conduceva fuori città. La sua storia affonda le radici nel **Medioevo**, anche se l'aspetto attuale è il risultato di ricostruzioni e restauri successivi.</p>

            <h2 class="text-2xl font-bold mt-6 mb-3 text-blue-700">Il Portale Rinascimentale</h2>
            <p>L'elemento più notevole della chiesa è il suo portale, realizzato in stile **Rinascimentale** nel 1500. Il portale è incorniciato da colonne con capitelli corinzi e presenta un timpano riccamente scolpito. Al centro della lunetta, si trova un bassorilievo raffigurante la **Pentecoste**, ovvero la discesa dello Spirito Santo sugli Apostoli.</p>
        </div>
    `,
    // Contenuti placeholder per le altre attrazioni.
    'sanfrancesco': `<div class="p-6 text-gray-500">Contenuto per San Francesco non ancora inserito.</div>`,
    'loggiavescovile': `<div class="p-6 text-gray-500">Contenuto per la Loggia Vescovile non ancora inserito.</div>`,
    'madonnastella': `<div class="p-6 text-gray-500">Contenuto per Madonna della Stella non ancora inserito.</div>`,
    'madonnacarmine': `<div class="p-6 text-gray-500">Contenuto per Madonna del Carmine non ancora inserito.</div>`,
    'portasandemetrio': `<div class="p-6 text-gray-500">Contenuto per Porta San Demetrio non ancora inserito.</div>`,
    'portanova': `<div class="p-6 text-gray-500">Contenuto per Porta Nova non ancora inserito.</div>`,
    'voltafederico': `<div class="p-6 text-gray-500">Contenuto per Volta di Federico II non ancora inserito.</div>`,
    'belvedere': `<div class="p-6 text-gray-500">Contenuto per il Belvedere non ancora inserito.</div>`,
    'largopappada': `<div class="p-6 text-gray-500">Contenuto per Largo Pappadà non ancora inserito.</div>`,
    'piazzaliberta': `<div class="p-6 text-gray-500">Contenuto per Piazza della Libertà (Mercato) non ancora inserito.</div>`,
    'palazzomunicipale': `<div class="p-6 text-gray-500">Contenuto per Palazzo Municipale non ancora inserito.</div>`,
    'fornovechio': `<div class="p-6 text-gray-500">Contenuto per Forno Storico non ancora inserito.</div>`,
    'masseriabrancati': `<div class="p-6 text-gray-500">Contenuto per Masseria Brancati non ancora inserito.</div>`,
    'osteriamuraglia': `<div class="p-6 text-gray-500">Contenuto per Osteria La Muraglia non ancora inserito.</div>`,
};

// 3. Funzione per recuperare il contenuto (esposta all'esterno per essere usata in index.html)
function getAttractionDetail(id) {
    return contenutiDettaglio[id] || `<div class="p-6 text-red-600">Contenuto per l'attrazione <b>${id}</b> non trovato. Completa il file dettagli/data.js!</div>`;
}