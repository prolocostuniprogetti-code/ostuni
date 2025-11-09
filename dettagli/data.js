const attrazioni = [
    {
        id: 'barocco',
        nome: 'Barocco',
        descrizione: "Esplorazione delle magnifiche chiese e palazzi barocchi nel centro storico.",
        elementi: [
            {
                id: 'cattedrale',
                numero: 1,
                titolo: 'Concattedrale di Ostuni',
                dettaglio: 'Splendido esempio di gotico-barocco pugliese.',
                descrizione_completa: 'La Concattedrale è un gioiello architettonico, con la sua facciata dominata da un imponente rosone di 24 raggi, uno dei più grandi al mondo. Rappresenta il punto più alto della città bianca.',
                immagine: 'cattedrale.jpg',
                audio: 'cattedrale.mp3',
                lat: 40.7307,
                lng: 17.5758
            },
            {
                id: 'palazzo-episcopio',
                numero: 2,
                titolo: 'Arco Scoppa e Palazzo Episcopio',
                dettaglio: "L'elegante ponte che collega il Palazzo Vescovile e il Seminario.",
//           ^ Cambiare gli apici esterni
                descrizione_completa: "L'Arco Scoppa, icona di Ostuni, è un passaggio aereo che incornicia la vista sulla città e unisce due importanti edifici barocchi: il Palazzo del Vescovo e il Palazzo del Seminario. Perfetto per foto panoramiche.",
                immagine: 'arco-scoppa.jpg',
                audio: 'palazzo-episcopio.mp3',
                lat: 40.7306,
                lng: 17.5759
            },
            {
                id: 'chiesa-san-vito',
                numero: 3,
                titolo: 'Chiesa di San Vito Martire',
                dettaglio: 'Conosciuta per la sua sfarzosa facciata e interni ricchi.',
                descrizione_completa: 'Piccola ma ricca di storia, questa chiesa è un esempio perfetto di come il Barocco abbia permeato anche i vicoli più stretti di Ostuni. Da non perdere il suo altare maggiore.',
                immagine: 'san-vito.jpg',
                audio: 'san-vito.mp3',
                lat: 40.7303,
                lng: 17.5755
            }
        ]
    },
    {
        id: 'medioevale',
        nome: 'Medioevale',
        descrizione: "Le mura e i vicoli nascosti, testimoni della storia antica di Ostuni.",
        elementi: [
            {
                id: 'mura',
                numero: 1,
                titolo: 'Mura Aragonesi e Porta Nova',
                dettaglio: 'I resti ben conservati della fortificazione che circondava la città.',
                descrizione_completa: "Le mura circondavano Ostuni per protezione. Passeggiare lungo ciò che resta delle mura aragonesi offre splendide vedute sulla piana degli ulivi e sul mare Adriatico.",
                immagine: 'mura-aragonesi.jpg',
                audio: 'mura.mp3',
                lat: 40.7290,
                lng: 17.5765
            },
            {
                id: 'centro-storico',
                numero: 2,
                titolo: 'Centro Storico (La Terra)',
                dettaglio: 'Labyrinth di case bianche imbiancate a calce.',
                descrizione_completa: "Il vero cuore di Ostuni, un intricato labirinto di vicoli, cortili e scalinate. Qui la tradizione di imbiancare le case con la calce viva ha dato ad Ostuni il nome di 'Città Bianca'.",
                immagine: 'centro-storico.jpg',
                audio: 'centro-storico.mp3',
                lat: 40.7300,
                lng: 17.5750
            }
        ]
    },
    {
        id: 'costiero',
        nome: 'Costiero',
        descrizione: "Le spiagge e le torri di avvistamento sul bellissimo litorale ostunese.",
        elementi: [
            {
                id: 'torre-pozella',
                numero: 1,
                titolo: 'Torre Pozzella',
                dettaglio: 'Una delle torri costiere di avvistamento meglio conservate.',
                descrizione_completa: "Costruita nel XVI secolo per difendere la costa dalle incursioni saracene, Torre Pozzella è un simbolo del litorale. Oggi è circondata da calette naturali e acque cristalline.",
                immagine: 'torre-pozzella.jpg',
                audio: 'torre-pozzella.mp3',
                lat: 40.7710,
                lng: 17.6580
            },
            {
                id: 'parco-dune',
                numero: 2,
                titolo: 'Parco delle Dune Costiere',
                dettaglio: "Un'area protetta con sentieri naturali e biodiversità unica.",
                descrizione_completa: "Questo parco naturale offre paesaggi mozzafiato, dalle spiagge sabbiose ai campi di ulivi secolari, perfetto per escursioni e birdwatching.",
                immagine: 'parco-dune.jpg',
                audio: 'parco-dune.mp3',
                lat: 40.7850,
                lng: 17.6700
            }
        ]
    }
];

