export const site = {
  title: 'Nettoyage industriel à Loudeac',
  description: 'CHIOCHI Prestige service - Adrian CIOCHAN- 0604048787',
  societe : "CHIOCHI Prestige",
  contact : "Adrian CIOCHAN",
  telephone: "0604048787",
  adresse: "4 rue de pontivy",
  codePostal : "22600",
  ville : "LOUDEAC",
  email : "ciocana628@gmail.com",
  SIRET: "98051414500013",
  logo: { url: "images/logo-barre-du-haut.png", alt: "logo CHIOCHI" },
  Logo: { url: "images/logo-banniere.png", alt: "logo logo CHIOCHI" },

};

export const menuItems = [
    { label: "Accueil", route: "/" },
    { label: "Poulaillers", route: "/poulaillers" },
    { label: "Porcherie", route: "/porcheries" },
    { label: "Autres réalisations", route: "/autres-realisations" },
    { label: "Matériel", route: "/materiel" },
    { label: "Contact", route: "/contact" },
  ];



export const listesActions =[
    {
      title : "POULAILLERS",
      subTitle : "",
      photo : { url: "", alt: "" },
      actions : ["","","",""
        ]
    },{
      title : "PORCHERIES",
      subTitle : "",
      photo : { url: "", alt: "" },
      actions : ["","","",""
        ]
    }
    ,
    {
      title : "AUTRES REALISATIONS",
      subTitle : "",
      photo : { url: "", alt: "" },
      actions : ["","","",""
        ]
    }
    
    ,{
      title : "MATERIEL",
      subTitle : "",
      photo : { url: "", alt: "" },
      actions : ["","","",""
        ]
    },
    ]
    


    export const cards = [
      {
        title: "RAVALEMENT",
        text: "",
        button: "Détail",
        buttonColor: "bg-gold-500",
        link: "/peinture-exterieure",
        url: "peinture-mur-exterieur.png",
        alt: "",
      },
    
      {
        title: "PEINTURE & DECORATION",
        text: "",
        button: "Détail",
        buttonColor: "bg-gold-500",
        link: "/peinture-interieure",
        url: "peinture-mur-interieur.png",
        alt: "",
      },
      {
        title: "PEINTURES ET NUANCIERS",
        text: "",
        button: "",
        buttonColor: "bg-gold-500",
        link: "/peinture-nuancier",
        url: "peinture-nuancier-4.png",
        alt: "",
      },
    
      {
        title: "NOS REALISATIONS",
        text: "",
        button: "",
        buttonColor: "bg-gold-500",
        link: "/realisations",
        url: "menu-peinture-exterieure.png",
        alt: "",
      },
    ];
    
    export const cards2 = [
      
      {
        title: "NETTOYAGE",
        text: "",
        button: "",
        buttonColor: "bg-gold-500",
        link: "/nettoyage",
        url: "realisations-13.jpeg",
        alt: "",
      },
    
    ];
    
    export const sections = [
      {
        title: "Qui sommes-nous?",
        body: "KER PROTEC est spécialisé dans les travaux de peinture extérieure, le ravalement et la rénovation des façades. Pour tous types de bâtiment, votre peintre vous propose des solutions pratiques pour mettre en valeur votre extérieur. Veillant à la qualité de ses réalisations, votre peintre d’extérieur, utilise des produits de qualité et respectueux à l’environnement. il vous garantit des prestations de qualité irréprochable dans le respect de l’environnement et des normes en vigueur. Doté d’un sens esthétique créatif, votre expert en peinture extérieure saura vous conseiller la couleur la plus harmonieuse avec votre décoration. Confiez vos travaux de peinture extérieure à ker protec et profitez d’un extérieur bien entretenu et protégé contre les changements climatiques.",
      },
      {
        title: " NOS SAVOIRS FAIRE",
        body: (
          <ul className="list-disc pl-4">
            <li>Peinture extérieure / ravalement</li>
            <li>Peinture intérieure / décoration</li>
            <li>Nettoyage et peinture de toiture</li>
          </ul>
        ),
      },
    ];
    
    export const Pages = {
      poulaillers: {
        title: "NETTOYAGE DE POULAILLERS",
        description: "",
        photos: [
          { url: "entretien-1.png", alt: "gallery" },
          { url: "entretien-2.png", alt: "gallery" },
          { url: "entretien-3.png", alt: "gallery" },
          { url: "entretien-4.png", alt: "gallery" },
        ],
        sections: [
          {
            title: "NOS SAVOIR FAIRE :",
            body: (
              <ul className="list-disc text-gold-400 pl-4">
                <li></li>
              </ul>
            ),
          },
        ],
        cards: [],
      },
      "porcheries": {
        title: "NETTOYAGE DE PORCHERIES",
        description: "",
        photos: [
          { url: "reparation-1.png", alt: "gallery" },
          { url: "reparation-2.png", alt: "gallery" },
          { url: "reparation-3.png", alt: "gallery" },
          { url: "reparation-4.png", alt: "gallery" },
        ],
        sections: [
          {
            title: "NOS SAVOIR FAIRE :",
            body: (
              <ul className="list-disc pl-4">
                <li> Peinture extérieur</li>
                <li> Peinture sur boiseries</li>
                <li>
                  {" "}
                  Création et rénovation peinture sur dessous de toit (cache
                  moineau){" "}
                </li>
                <li> Peinture sur volet</li>
                <li> Peinture ferronneries et métaux</li>
                <li> Ravalement extérieur</li>
                <li> Peinture d&apos;étanchéité pour toiture</li>
              </ul>
            ),
          },
        ],
        cards: [],
      },

      "materiel": {
        title: "NOTRE MATERIEL",
        description: "",
        photos: [
          
        ],
        sections: [
          {
            title: "TITRE 1:",
            body: (
              <ul className="list-disc pl-4">
                <li>
             
                </li>
              </ul>
            ),
          },
    
          {
            title: "TITRE 2",
            body: (
              <ul className="list-disc pl-4">
                <li>
                 
                </li>
              </ul>
            ),
          },
        ],
        cards: [],
      },
      "autres-realisations": {
        title: "Autres réalisations",
        description: "",
        photos: [
          { url: "chantier-01-1.jpeg", alt: "" },
          { url: "chantier-01-2.jpeg", alt: "" },
          { url: "chantier-01-3.jpeg", alt: "" },
          { url: "chantier-01-4.jpeg", alt: "" },
          { url: "chantier-01-5.jpeg", alt: "" },
          { url: "chantier-01-6.jpeg", alt: "" },
          { url: "chantier-01-7.jpeg", alt: "" },
          { url: "chantier-01-8.jpeg", alt: "" },
          { url: "chantier-01-9.jpeg", alt: "" },
          { url: "chantier-01-10.jpeg", alt: "" },
          { url: "chantier-01-11.jpeg", alt: "" },
          { url: "chantier-01-12.jpeg", alt: "" },
          { url: "realisations-1.jpeg", alt: "" },
          { url: "realisations-2.jpeg", alt: "" },
          { url: "realisations-3.jpeg", alt: "" },
          { url: "realisations-4.jpeg", alt: "" },
          { url: "realisations-5.jpeg", alt: "" },
          { url: "realisations-6.jpeg", alt: "" },
          { url: "realisations-7.jpeg", alt: "" },
          { url: "realisations-8.jpeg", alt: "" },
          { url: "realisations-9.jpeg", alt: "" },
          { url: "realisations-10.jpeg", alt: "" },
          { url: "realisations-11.jpeg", alt: "" },
          { url: "realisations-12.jpeg", alt: "" },
          { url: "realisations-13.jpeg", alt: "" },
          { url: "realisations-14.jpeg", alt: "" },
          { url: "realisations-15.jpeg", alt: "" },
          { url: "realisations-16.jpeg", alt: "" },
        ],
        sections: [
          {
            title: "NOS SAVOIR FAIRE :",
            body: (
              <ul className="list-disc pl-4">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            ),
          },
        ],
        cards: [],
      },

    };
    