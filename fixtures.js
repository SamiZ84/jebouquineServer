var pow = require('pow-mongodb-fixtures');
var fixtures = pow.connect('jebouquine');
var id = pow.createObjectId;

fixtures.clearAndLoad({
    livres: [
        {
            "Id": 1,
            "Nom": "Victoires",
            "Auteur": "Danielle Steel | Pocket",
            "Description": "Lily, championne de ski junior, s’entraîne chaque  jour afin de participer aux Jeux olympiques, sous le regard bienveillant mais  inquiet de son père qui ne s’est jamais vraiment remis de la disparition de sa femme. Mais parfois, hélas, la vigilance ne suffit pas. Victime d’un terrible accident, Lily est condamnée à passer le restant de ses jours en fauteuil roulant. Il lui faudra désormais tout réapprendre et tout reconstruire. Accepter d’abandonner ses anciens rêves pour en construire de nouveaux… plus grands encore.",
            "Langue": "Français",
            "Prix": 18.000,
            "ISBN": "978-2-266-26208-8",
            "MaisonEdition": "Pocket",
            "NombrePages": 352,
            "Poids": "190 g",
            "Disponibilité": "En stock",
            "DateSortie": "21 janv. 2016",
            "UrlImage": "https://placeholdit.imgix.net/~text?txtsize=82&txt=First+slide&w=350&h=350",
            "Categorie": "VoyagesNature",
            "Quantite": 0,
            "DateDerniereCommande": "2016-06-20T15:38:34.728Z"
        }
    ],
    categories: [{ Id: "Jeunesse", Libelle: "Lecture jeunesse" },
    { Id: "SciencesTechniques", Libelle: "Sciences & Techniques" },
    { Id: "DroitEconomieGestion", Libelle: "Droit, Economie & Gestion" },
    { Id: "VoyagesNature", Libelle: "Voyages & Nature" },
    { Id: "ScolairePedagogie", Libelle: "Scolaire & Pédagogie" }
    ]
}, function (err) {
    if (err) {
        console.log('************** ERREUR : clearAndLoad');
        console.log(err);
        console.log('************** ERREUR : clearAndLoad');
    }
}); 