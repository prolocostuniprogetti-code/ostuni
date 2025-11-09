const attrazioni = [
    // ====================================================================
    // 1. TOUR: OSTUNI MONUMENTALE (Edifici Principali e Chiese)
    // ====================================================================
    {
        id: 'monumentale',
        nome: '1. Ostuni Monumentale',
        descrizione: "Scopri i principali edifici storici e religiosi: l'Obelisco, la Cattedrale e le chiese maggiori.",
        elementi: [
            {
                id: 'obelisco-sant-oronzo',
                numero: 1,
                titolo: 'Obelisco di Sant\'Oronzo',
                dettaglio: 'La maestosa guglia barocca che domina Piazza della Libertà.',
                descrizione_completa: 'Eretta nel Settecento per ringraziare il Santo per aver protetto Ostuni dalla peste, questa colonna alta 20 metri è un capolavoro del barocco locale e un punto d’incontro fondamentale.',
                immagine: 'sant-oronzo.jpg',
                audio: 'sant-oronzo.mp3',
                lat: 40.73024, lng: 17.57650 // Coordinate precise
            },
            {
                id: 'chiesa-spirito-santo',
                numero: 2,
                titolo: 'Chiesa dello Spirito Santo',
                dettaglio: 'Esempio di Rinascimento pugliese con un notevole portale.',
                descrizione_completa: 'Una delle chiese più antiche, con un portale finemente scolpito che preannuncia lo stile elaborato dell\'arte ostunese.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73031, lng: 17.57630 // Coordinate precise
            },
            {
                id: 'palazzo-municipale',
                numero: 3,
                titolo: 'Palazzo Municipale (Ex Convento)',
                dettaglio: 'L\'ex Convento Francescano, oggi sede del Comune.',
                descrizione_completa: 'L\'edificio testimonia la storia civica e religiosa di Ostuni, situato strategicamente sulla piazza principale.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73037, lng: 17.57610 // Coordinate precise
            },
            {
                id: 'chiesa-san-francesco',
                numero: 4,
                titolo: 'Chiesa San F. d\'Assisi',
                dettaglio: 'Parte integrante del complesso del Palazzo Municipale.',
                descrizione_completa: 'Ricca di arte sacra, la chiesa presenta una facciata sobria ma interni di grande valore storico-artistico.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73055, lng: 17.57585 // Coordinate precise
            },
            {
                id: 'cattedrale',
                numero: 5,
                titolo: 'Concattedrale di Ostuni',
                dettaglio: 'Il magnifico rosone di 24 raggi e il Gotico-Barocco.',
                descrizione_completa: 'Il punto più alto e panoramico della città, un capolavoro di architettura che fonde stili diversi.',
                immagine: 'cattedrale.jpg',
                audio: 'cattedrale.mp3',
                lat: 40.73087, lng: 17.57530 // Coordinate precise
            },
            {
                id: 'chiesa-stella',
                numero: 6,
                titolo: 'Chiesa Santa M. della Stella',
                dettaglio: 'Importante chiesa con un affresco storico.',
                descrizione_completa: 'Situata nella parte sud della città, è nota per la sua storia devozionale e le opere d\'arte conservate al suo interno.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73050, lng: 17.57675 // Coordinate precise
            },
            {
                id: 'chiesa-san-pietro',
                numero: 7,
                titolo: 'Chiesa San Pietro',
                dettaglio: 'Antica chiesa, essenziale per la storia religiosa del borgo.',
                descrizione_completa: 'Un altro luogo di culto che segna l\'antico confine del centro abitato.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73040, lng: 17.57688 // Coordinate precise
            },
             {
                id: 'chiesa-carmine',
                numero: 8,
                titolo: 'Chiesa Madonna del Carmine',
                dettaglio: 'Chiesa e convento dei Carmelitani, importante per la vita sociale.',
                descrizione_completa: 'Complesso religioso che conclude la visita al nucleo urbano di Ostuni.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73010, lng: 17.57695 // Coordinate precise
            }
        ]
    },
    
    
    // ====================================================================
    // 2. TOUR: OSTUNI SEGRETA E I PALAZZI (Dettagli Architettonici e Nobiliare)
    // ====================================================================
    {
        id: 'palazzi-segreti',
        nome: '2. Ostuni Segreta e i Palazzi',
        descrizione: "Un itinerario dedicato ai dettagli architettonici, i portali e le storie nascoste delle famiglie nobiliari.",
        elementi: [
            {
                id: 'palazzo-ayroldi',
                numero: 1,
                titolo: 'Palazzo Ayroldi',
                dettaglio: 'Esempio di residenza nobiliare settecentesca.',
                descrizione_completa: 'Con la sua imponente facciata, il Palazzo Ayroldi è uno dei palazzi più eleganti lungo il percorso principale.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73062, lng: 17.57565 // Coordinate precise
            },
            {
                id: 'palazzo-siccodà',
                numero: 2,
                titolo: 'Palazzo Siccodà',
                dettaglio: 'Importante palazzo con influenze rinascimentali.',
                descrizione_completa: 'La sua architettura riflette i cambiamenti stilistici avvenuti nel centro storico di Ostuni nei secoli.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73070, lng: 17.57560 // Coordinate precise
            },
            {
                id: 'portale-bizantizzi',
                numero: 3,
                titolo: 'Portale palazzo Bizantizzi',
                dettaglio: 'Uno dei più bei portali nobiliari del centro storico.',
                descrizione_completa: 'Questo portale testimonia la ricchezza e l\'eleganza delle famiglie aristocratiche che vivevano vicino alla Cattedrale.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73080, lng: 17.57550 // Coordinate precise
            },
            {
                id: 'portale-ghionda',
                numero: 4,
                titolo: 'Portale palazzo Ghionda',
                dettaglio: 'Portale rinascimentale con raffinati elementi decorativi.',
                descrizione_completa: 'Un altro esempio dell\'arte nobiliare che si concentra sulla cima della città.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73090, lng: 17.57545 // Coordinate precise
            },
            {
                id: 'portale-falghieri',
                numero: 5,
                titolo: 'Portale palazzo Falghieri',
                dettaglio: 'Caratteristico per i suoi simboli araldici scolpiti.',
                descrizione_completa: 'Il portale offre un\'immersione nella storia delle grandi famiglie di Ostuni e nelle loro allegorie.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73095, lng: 17.57535 // Coordinate precise
            },
            {
                id: 'portale-musica',
                numero: 6,
                titolo: 'Portale palazzo della Musica',
                dettaglio: 'Suggestivo portale che si apre su un antico cortile.',
                descrizione_completa: 'Probabile sede di un’antica scuola o circolo, si distingue per i suoi dettagli scultorei.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73090, lng: 17.57525 // Coordinate precise
            },
            {
                id: 'portale-palmieri',
                numero: 7,
                titolo: 'Portale palazzo Palmieri',
                dettaglio: 'Uno dei palazzi più ricchi e meglio conservati.',
                descrizione_completa: 'Il portale è un simbolo di lusso nobiliare e conduce a interni storici di grande pregio.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73080, lng: 17.57515 // Coordinate precise
            },
            {
                id: 'portale-jurleo',
                numero: 8,
                titolo: 'Portale palazzo Jurleo',
                dettaglio: 'Portale caratterizzato da elementi tardo-gotici.',
                descrizione_completa: 'Un altro magnifico esempio di architettura privata nel labirinto di Ostuni.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73070, lng: 17.57505 // Coordinate precise
            },
            {
                id: 'portale-calamo',
                numero: 9,
                titolo: 'Portale palazzo Calamo',
                dettaglio: 'Distinto per la sua eleganza e sobrietà rinascimentale.',
                descrizione_completa: 'Un palazzo storico che riflette l\'influenza dei grandi centri artistici sulla Puglia.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73060, lng: 17.57495 // Coordinate precise
            },
            {
                id: 'portale-mileti',
                numero: 10,
                titolo: 'Portale palazzo Mileti',
                dettaglio: 'Noto per le sue sculture e l\'uso della pietra locale.',
                descrizione_completa: 'Un punto di interesse che conclude il tour dei palazzi nobiliari della parte occidentale.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73050, lng: 17.57485 // Coordinate precise
            }
        ]
    },
    
    
    // ====================================================================
    // 3. TOUR: OSTUNI INSOLITA E PANORAMICA (Vicoli, Archeologia e Vista)
    // ====================================================================
    {
        id: 'insolita-panoramica',
        nome: '3. Ostuni Insolita e Panoramica',
        descrizione: "Scopri angoli suggestivi, dettagli artistici/culturali, le antiche porte e i punti panoramici.",
        elementi: [
            {
                id: 'stemma-zevallos',
                numero: 1,
                titolo: 'Stemma degli Zevallos',
                dettaglio: 'Uno stemma nobiliare che decora l\'angolo di un antico palazzo.',
                descrizione_completa: 'Testimonianza della potente famiglia Zevallos che ha lasciato il segno nel centro storico di Ostuni.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73050, lng: 17.57600 // Coordinate precise
            },
            {
                id: 'capitello-corinzio',
                numero: 2,
                titolo: 'Capitello Corinzio (Palazzo)',
                dettaglio: 'Elemento architettonico classico incastonato in un palazzo.',
                descrizione_completa: 'Un dettaglio che mostra la stratificazione storica degli edifici di Ostuni, con riutilizzi di elementi antichi.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73060, lng: 17.57590 // Coordinate precise
            },
            {
                id: 'convento-monacelle',
                numero: 3,
                titolo: 'Convento delle Monacelle',
                dettaglio: 'Complesso religioso che segna l\'inizio della salita verso la Cattedrale.',
                descrizione_completa: 'Edificio storico di grande importanza, parte integrante della vita monastica della città nel passato.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73070, lng: 17.57580 // Coordinate precise
            },
            {
                id: 'chiesa-museo',
                numero: 4,
                titolo: 'Chiesa Monacelle/Museo',
                dettaglio: 'Area espositiva che include la storia e i reperti della civiltà preclassica.',
                descrizione_completa: 'Ospita importanti ritrovamenti archeologici come la "Donna di Ostuni", testimoniando l\'antichità del sito.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73075, lng: 17.57570 // Coordinate precise
            },
            {
                id: 'volta-federico',
                numero: 5,
                titolo: 'Volta di Federico II',
                dettaglio: 'Suggestivo passaggio coperto nel cuore del centro storico.',
                descrizione_completa: 'Un elemento architettonico che caratterizza la struttura labirintica di Ostuni e ricorda la dominazione sveva.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73080, lng: 17.57560 // Coordinate precise
            },
            {
                id: 'loggia-palazzo',
                numero: 6,
                titolo: 'La Loggia e Palazzo Vescovile',
                dettaglio: 'La loggia che unisce il Seminario al Palazzo del Vescovo (Arco Scoppa).',
                descrizione_completa: 'Icona di Ostuni, l\'Arco Scoppa incornicia la vista e unisce i due edifici del potere religioso.',
                immagine: 'arco-scoppa.jpg',
                audio: 'palazzo-episcopio.mp3',
                lat: 40.73085, lng: 17.57545 // Coordinate precise
            },
            {
                id: 'largo-pappadà',
                numero: 7,
                titolo: 'Largo Pappadà',
                dettaglio: 'Affaccio panoramico sul mare e sulla piana degli ulivi.',
                descrizione_completa: 'Un punto di sosta essenziale per ammirare il celebre paesaggio ostunese che si estende fino all\'Adriatico.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73070, lng: 17.57500 // Coordinate precise
            },
            {
                id: 'chiesa-compostela',
                numero: 8,
                titolo: 'Chiesa San G. in Compostela',
                dettaglio: 'Piccola chiesa ricca di storia, legata ai pellegrini.',
                descrizione_completa: 'Un gioiello nascosto nei vicoli, testimone delle rotte religiose che attraversavano Ostuni.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73060, lng: 17.57490 // Coordinate precise
            },
            {
                id: 'porta-san-demetrio',
                numero: 9,
                titolo: 'Porta San Demetrio',
                dettaglio: 'Antica porta d\'accesso alle mura medievali.',
                descrizione_completa: 'Una delle uscite originali che permetteva l\'accesso alla campagna circostante, essenziale per la difesa della città.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73045, lng: 17.57610 // Coordinate precise
            },
            {
                id: 'porta-nova',
                numero: 10,
                titolo: 'Porta Nova e Mura Aragonesi',
                dettaglio: 'L\'ingresso principale della città vecchia e i resti della fortificazione.',
                descrizione_completa: "Le mura aragonesi circondavano Ostuni per protezione. Porta Nova è un simbolo dell'architettura difensiva.",
                immagine: 'mura-aragonesi.jpg',
                audio: 'mura.mp3',
                lat: 40.72970, lng: 17.57720 // Coordinate precise
            }
        ]
    },
    
    // ====================================================================
    // 4. TOUR: ESTENSIONE COSTIERA (Mantenuto come opzione esterna)
    // ====================================================================
    {
        id: 'costiero',
        nome: '4. Estensione Costiera e Natura',
        descrizione: "Itinerario esterno: le torri di avvistamento sul litorale e l'area protetta delle dune costiere (richiede mezzi).",
        elementi: [
            {
                id: 'torre-pozella',
                numero: 1,
                titolo: 'Torre Pozzella',
                dettaglio: 'Una delle torri costiere di avvistamento meglio conservate.',
                descrizione_completa: "Costruita nel XVI secolo per difendere la costa, è circondata da calette naturali.",
                immagine: 'torre-pozzella.jpg',
                audio: 'torre-pozzella.mp3',
                lat: 40.79308, lng: 17.65969 // Coordinate precise
            },
            {
                id: 'parco-dune',
                numero: 2,
                titolo: 'Parco delle Dune Costiere',
                dettaglio: "Un'area protetta con sentieri naturali e biodiversità unica.",
                descrizione_completa: "Questo parco offre paesaggi mozzafiato, dalle spiagge sabbiose ai campi di ulivi secolari, perfetto per escursioni.",
                immagine: 'parco-dune.jpg',
                audio: 'parco-dune.mp3',
                lat: 40.80665, lng: 17.61665 // Coordinate precise
            }
        ]
    }
];
