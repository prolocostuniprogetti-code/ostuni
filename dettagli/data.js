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
                lat: 40.73010, lng: 17.57635 // COORDINATA CORRETTA
            },
            {
                id: 'chiesa-spirito-santo',
                numero: 2,
                titolo: 'Chiesa dello Spirito Santo',
                dettaglio: 'Esempio di Rinascimento pugliese con un notevole portale.',
                descrizione_completa: 'Una delle chiese più antiche, con un portale finemente scolpito che preannuncia lo stile elaborato dell\'arte ostunese.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73009, lng: 17.57620 // COORDINATA CORRETTA
            },
            {
                id: 'palazzo-municipale',
                numero: 3,
                titolo: 'Palazzo Municipale (Ex Convento)',
                dettaglio: 'L\'ex Convento Francescano, oggi sede del Comune.',
                descrizione_completa: 'L\'edificio testimonia la storia civica e religiosa di Ostuni, situato strategicamente sulla piazza principale.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73024, lng: 17.57608 // COORDINATA CORRETTA
            },
            {
                id: 'chiesa-san-francesco',
                numero: 4,
                titolo: 'Chiesa San F. d\'Assisi',
                dettaglio: 'Parte integrante del complesso del Palazzo Municipale.',
                descrizione_completa: 'Ricca di arte sacra, la chiesa presenta una facciata sobria ma interni di grande valore storico-artistico.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73024, lng: 17.57599 // COORDINATA CORRETTA
            },
            {
                id: 'cattedrale',
                numero: 5,
                titolo: 'Concattedrale di Ostuni',
                dettaglio: 'Il magnifico rosone di 24 raggi e il Gotico-Barocco.',
                descrizione_completa: 'Il punto più alto e panoramico della città, un capolavoro di architettura che fonde stili diversi.',
                immagine: 'cattedrale.jpg',
                audio: 'cattedrale.mp3',
                lat: 40.73099, lng: 17.57544 // COORDINATA CORRETTA (CIMA DEL COLLE)
            },
            {
                id: 'chiesa-stella',
                numero: 6,
                titolo: 'Chiesa Santa M. della Stella',
                dettaglio: 'Importante chiesa con un affresco storico.',
                descrizione_completa: 'Situata nella parte sud della città, è nota per la sua storia devozionale e le opere d\'arte conservate al suo interno.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73062, lng: 17.57580 // COORDINATA CORRETTA
            },
            {
                id: 'chiesa-san-pietro',
                numero: 7,
                titolo: 'Chiesa San Pietro',
                dettaglio: 'Antica chiesa, essenziale per la storia religiosa del borgo.',
                descrizione_completa: 'Un altro luogo di culto che segna l\'antico confine del centro abitato.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73059, lng: 17.57680 // COORDINATA CORRETTA
            },
             {
                id: 'chiesa-carmine',
                numero: 8,
                titolo: 'Chiesa Madonna del Carmine',
                dettaglio: 'Chiesa e convento dei Carmelitani, importante per la vita sociale.',
                descrizione_completa: 'Complesso religioso che conclude la visita al nucleo urbano di Ostuni.',
                immagine: 'default-c.jpg',
                audio: 'default-a.mp3',
                lat: 40.73007, lng: 17.57690 // COORDINATA CORRETTA
            }
        ]
    },
    
    // ... [OMESSO IL TOUR 2 e 3 per brevità, ma usa la versione completa che ti ho fornito] ...
    
    // ====================================================================
    // 4. TOUR: ESTENSIONE COSTIERA 
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
                lat: 40.79308, lng: 17.65969 
            },
            {
                id: 'parco-dune',
                numero: 2,
                titolo: 'Parco delle Dune Costiere',
                dettaglio: "Un'area protetta con sentieri naturali e biodiversità unica.",
                descrizione_completa: "Questo parco offre paesaggi mozzafiato, dalle spiagge sabbiose ai campi di ulivi secolari, perfetto per escursioni.",
                immagine: 'parco-dune.jpg',
                audio: 'parco-dune.mp3',
                lat: 40.80665, lng: 17.61665 
            }
        ]
    }
];
