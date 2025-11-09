const attrazioni = [
    // =ZIONE: Coordinate Obelisco e Cattedrale sono ora corrette (lat: 40.73xx, lng: 17.57xx)
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
                immagine: 'sant-oronzo.jpg',
                audio: 'sant-oronzo.mp3',
                lat: 40.73010, lng: 17.57635 // PIAZZA LIBERTÀ (CORRETTA)
            },
            {
                id: 'chiesa-spirito-santo',
                numero: 2,
                titolo: 'Chiesa dello Spirito Santo',
                dettaglio: 'Esempio di Rinascimento pugliese con un notevole portale.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73009, lng: 17.57620 
            },
            {
                id: 'palazzo-municipale',
                numero: 3,
                titolo: 'Palazzo Municipale (Ex Convento)',
                dettaglio: 'L\'ex Convento Francescano, oggi sede del Comune.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73024, lng: 17.57608 
            },
            {
                id: 'chiesa-san-francesco',
                numero: 4,
                titolo: 'Chiesa San F. d\'Assisi',
                dettaglio: 'Parte integrante del complesso del Palazzo Municipale.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73024, lng: 17.57599 
            },
            {
                id: 'cattedrale',
                numero: 5,
                titolo: 'Concattedrale di Ostuni',
                dettaglio: 'Il magnifico rosone di 24 raggi e il Gotico-Barocco.',
                immagine: 'cattedrale.jpg',
                audio: 'cattedrale.mp3',
                lat: 40.73099, lng: 17.57544 // CIMA DEL COLLE (CORRETTA)
            },
            {
                id: 'chiesa-stella',
                numero: 6,
                titolo: 'Chiesa Santa M. della Stella',
                dettaglio: 'Importante chiesa con un affresco storico.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73062, lng: 17.57580 
            },
            {
                id: 'chiesa-san-pietro',
                numero: 7,
                titolo: 'Chiesa San Pietro',
                dettaglio: 'Antica chiesa, essenziale per la storia religiosa del borgo.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73059, lng: 17.57680 
            },
             {
                id: 'chiesa-carmine',
                numero: 8,
                titolo: 'Chiesa Madonna del Carmine',
                dettaglio: 'Chiesa e convento dei Carmelitani, importante per la vita sociale.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73007, lng: 17.57690 
            }
        ]
    },
    
    // 2. TOUR: OSTUNI SEGRETA E I PALAZZI (Coordinate Corrette)
    {
        id: 'palazzi-segreti',
        nome: '2. Ostuni Segreta e i Palazzi',
        descrizione: "Un itinerario dedicato ai dettagli architettonici, i portali e le storie nascoste delle famiglie nobiliari.",
        elementi: [
            { id: 'palazzo-ayroldi', numero: 1, titolo: 'Palazzo Ayroldi', dettaglio: 'Esempio di residenza nobiliare settecentesca.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73062, lng: 17.57565 },
            { id: 'palazzo-siccodà', numero: 2, titolo: 'Palazzo Siccodà', dettaglio: 'Importante palazzo con influenze rinascimentali.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73070, lng: 17.57555 },
            { id: 'portale-bizantizzi', numero: 3, titolo: 'Portale palazzo Bizantizzi', dettaglio: 'Uno dei più bei portali nobiliari del centro storico.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73081, lng: 17.57540 },
            { id: 'portale-ghionda', numero: 4, titolo: 'Portale palazzo Ghionda', dettaglio: 'Portale rinascimentale con raffinati elementi decorativi.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73079, lng: 17.57500 },
            { id: 'portale-falghieri', numero: 5, titolo: 'Portale palazzo Falghieri', dettaglio: 'Caratteristico per i suoi simboli araldici scolpiti.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73075, lng: 17.57515 },
            { id: 'portale-musica', numero: 6, titolo: 'Portale palazzo della Musica', dettaglio: 'Suggestivo portale che si apre su un antico cortile.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73082, lng: 17.57521 },
            { id: 'portale-palmieri', numero: 7, titolo: 'Portale palazzo Palmieri', dettaglio: 'Uno dei palazzi più ricchi e meglio conservati.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73075, lng: 17.57511 },
            { id: 'portale-jurleo', numero: 8, titolo: 'Portale palazzo Jurleo', dettaglio: 'Portale caratterizzato da elementi tardo-gotici.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73061, lng: 17.57508 },
            { id: 'portale-calamo', numero: 9, titolo: 'Portale palazzo Calamo', dettaglio: 'Distinto per la sua eleganza e sobrietà rinascimentale.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73045, lng: 17.57520 },
            { id: 'portale-mileti', numero: 10, titolo: 'Portale palazzo Mileti', dettaglio: 'Noto per le sue sculture e l\'uso della pietra locale.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73030, lng: 17.57530 }
        ]
    },
    
    // 3. TOUR: OSTUNI INSOLITA E PANORAMICA (Coordinate Corrette)
    {
        id: 'insolita-panoramica',
        nome: '3. Ostuni Insolita e Panoramica',
        descrizione: "Scopri angoli suggestivi, dettagli artistici/culturali, le antiche porte e i punti panoramici.",
        elementi: [
            { id: 'stemma-zevallos', numero: 1, titolo: 'Stemma degli Zevallos', dettaglio: 'Uno stemma nobiliare che decora l\'angolo di un antico palazzo.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73045, lng: 17.57605 },
            { id: 'capitello-corinzio', numero: 2, titolo: 'Capitello Corinzio (Palazzo)', dettaglio: 'Elemento architettonico classico incastonato in un palazzo.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73059, lng: 17.57570 },
            { id: 'convento-monacelle', numero: 3, titolo: 'Convento delle Monacelle', dettaglio: 'Complesso religioso che segna l\'inizio della salita verso la Cattedrale.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73070, lng: 17.57560 },
            { id: 'chiesa-museo', numero: 4, titolo: 'Chiesa Monacelle/Museo', dettaglio: 'Area espositiva che include la storia e i reperti della civiltà preclassica.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73078, lng: 17.57550 },
            { id: 'volta-federico', numero: 5, titolo: 'Volta di Federico II', dettaglio: 'Suggestivo passaggio coperto nel cuore del centro storico.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73085, lng: 17.57565 },
            { id: 'loggia-palazzo', numero: 6, titolo: 'La Loggia e Palazzo Vescovile', dettaglio: 'La loggia che unisce il Seminario al Palazzo del Vescovo (Arco Scoppa).', immagine: 'arco-scoppa.jpg', audio: 'palazzo-episcopio.mp3', lat: 40.73091, lng: 17.57554 },
            { id: 'largo-pappadà', numero: 7, titolo: 'Largo Pappadà', dettaglio: 'Affaccio panoramico sul mare e sulla piana degli ulivi.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73080, lng: 17.57500 },
            { id: 'chiesa-compostela', numero: 8, titolo: 'Chiesa San G. in Compostela', dettaglio: 'Piccola chiesa ricca di storia, legata ai pellegrini.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73065, lng: 17.57488 },
            { id: 'porta-san-demetrio', numero: 9, titolo: 'Porta San Demetrio', dettaglio: 'Antica porta d\'accesso alle mura medievali.', immagine: 'default-c.jpg', audio: 'default-a.mp3', lat: 40.73035, lng: 17.57500 },
            { id: 'porta-nova', numero: 10, titolo: 'Porta Nova e Mura Aragonesi', dettaglio: 'L\'ingresso principale della città vecchia e i resti della fortificazione.', immagine: 'mura-aragonesi.jpg', audio: 'mura.mp3', lat: 40.72979, lng: 17.57723 }
        ]
    },
    
    // 4. TOUR: ESTENSIONE COSTIERA (Coordinate Corrette)
    {
        id: 'costiero',
        nome: '4. Estensione Costiera e Natura',
        descrizione: "Itinerario esterno: le torri di avvistamento sul litorale e l'area protetta delle dune costiere (richiede mezzi).",
        elementi: [
            { id: 'torre-pozella', numero: 1, titolo: 'Torre Pozzella', dettaglio: 'Una delle torri costiere di avvistamento meglio conservate.', immagine: 'torre-pozzella.jpg', audio: 'torre-pozzella.mp3', lat: 40.79308, lng: 17.65969 },
            { id: 'parco-dune', numero: 2, titolo: 'Parco delle Dune Costiere', dettaglio: "Un'area protetta con sentieri naturali e biodiversità unica.", immagine: 'parco-dune.jpg', audio: 'parco-dune.mp3', lat: 40.80665, lng: 17.61665 }
        ]
    }
];
