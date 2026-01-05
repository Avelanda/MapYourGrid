<div class="page-headers">
<h1>Questions et réponses</h1>
</div>

Voici une compilation des questions les plus fréquemment posées. 

<div class="starter-kit-buttons">
 <a href="#general-questions" class="btn btn-primary"> Questions générales</a>
 <a href="#contribution-in-openstreetmap" class="btn btn-secondary"> Contribution dans OpenStreetMap</a>
 <a href="#power-grid-mapping" class="btn btn-secondary"> Cartographie du réseau électrique</a>
</div>

Si vous avez d'autres questions ou demandes, vous pouvez contacter directement <a href="mailto:MapYourGrid@openenergytransition.org" target="_blank" rel="noopener">nous par email</a>

---

## <div class="stradegy-header">Questions générales</div></h3>

### <div class="tools-header">Qui êtes-vous ? Qu'est-ce que MapYourGrid ?</div>

MapYourGrid est une initiative ouverte et collaborative qui vise à cartographier les réseaux électriques du monde entier, en se concentrant sur les lignes de transmission à haute tension, les sous-stations, les centrales électriques et les principaux consommateurs d'énergie. L'initiative fournit toutes ses données à [OpenStreetMap](https://www.openstreetmap.org/) pour la rendre accessible et vérifiable au niveau mondial.

### <div class="tools-header">Qu'est-ce qui est inclus dans la portée du projet ?</div>

Nous nous concentrons sur la cartographie des réseaux de transport d'électricité, principalement les lignes et les câbles électriques, et sur leur connexion aux périmètres des sous-stations. Nous cartographions les lignes de transmission qui relient les villes. L'infrastructure du réseau de transmission est si vaste qu'elle peut être tracée et cartographiée à l'aide d'images satellites ouvertes. Cependant, le réseau de distribution ne peut pas être cartographié suffisamment bien en utilisant uniquement des images satellites ouvertes et nécessite donc une collaboration étroite avec les communautés et les autorités locales. C'est la raison pour laquelle ce n'est pas notre objectif principal actuellement.

### <div class="tools-header">L'IA ne va-t-elle pas bientôt résoudre tous ces problèmes ?</div>
Pour garantir la qualité des données, chaque point de données dans OpenStreetMap doit être défini et validé par un être humain. Cela permet d'éviter qu'OpenStreetMap ne soit inondée de données synthétiques non validées qui ne pourraient pas servir de vérité terrain à long terme. En outre, il n'existe actuellement aucune méthode de détection permettant d'identifier avec précision les pylônes électriques et le tracé des lignes de transmission à l'aide des seuls satellites RVB classiques. La cartographie du réseau est une tâche qui requiert un haut degré d'expertise et de compréhension du contexte. En raison de la grande pertinence de ces données, la génération stochastique du réseau par l'IA n'est pas non plus recommandée. Pour valider ces données, les spécialistes doivent effectuer une cartographie active de la grille. Cependant, nous évaluons actuellement l'utilisation de l'intelligence artificielle. [détection de postes électriques en source ouverte basée sur les données de Sentinel 2](https://github.com/Lindsay-Lab/substation-seg) pour fournir une autre couche de postes aux cartographes. 

### <div class="tools-header">La publication de ces données présente-t-elle un risque pour la sécurité ?</div>

Non, la publication de données sur les réseaux par l'intermédiaire de MapYourGrid n'augmente pas de manière significative les risques en matière de sécurité. Cette inquiétude est compréhensible car les réseaux électriques sont des infrastructures critiques. Cependant, de nombreuses études et des pratiques concrètes montrent que l'ouverture des données de réseau n'augmente pas les niveaux de menace, et ce pour plusieurs raisons essentielles :

* Une grande partie du réseau est déjà visible et documentée. Les lignes de transmission sont facilement observables sur les images satellites et par toute personne sur le terrain. La plupart des sous-stations figurent déjà sur des plateformes telles que Google Maps. Les grandes institutions, y compris les agences gouvernementales, partagent publiquement des données détaillées sur le réseau depuis des décennies.

* Les acteurs sophistiqués disposent déjà de meilleures données. Les acteurs parrainés par un État ou malveillants ne se fient pas à OpenStreetMap. Ils ont accès à des outils plus avancés, à des images commerciales, voire à des canaux internes ou cybernétiques. Le blocage de l'accès public n'empêche pas leur activité, mais il entrave l'utilisation légitime.

* Les données ouvertes aident davantage les défenseurs que les attaquants. La transparence permet aux services publics, aux chercheurs et aux planificateurs de repérer les faiblesses, de modéliser les défaillances et d'améliorer la résilience. L'accès public aux données d'acheminement favorise la planification transfrontalière et une réponse plus rapide aux situations d'urgence.

* La sécurité par l'obscurité" ne fonctionne pas. La dissimulation des détails de l'infrastructure entrave souvent l'innovation et l'atténuation des risques. Comme le souligne l'Institut national américain des normes et de la technologie (NIST), l'obscurité n'est pas une stratégie de sécurité fiable.

MapYourGrid s'appuie sur une décennie de cartographie des infrastructures publiques, y compris des comparaisons mondiales montrant l'alignement avec les ensembles de données gouvernementales. Notre mission est de démocratiser l'accès aux données pour favoriser la résilience, la transparence et l'innovation, et non d'exposer ce que les adversaires ne savent pas déjà. Nos [Bonnes pratiques de cartographie](mapping-good-practices.md) décrit les valeurs partagées, les responsabilités et les pratiques sûres pour les individus et les organisations qui participent à des activités de cartographie de grille dans OpenStreetMap. Il est conçu pour protéger les communautés, promouvoir la transparence et protéger les zones sensibles tout en permettant l'utilisation de données ouvertes pour le développement mondial et la résilience énergétique.

Pour en savoir plus sur la cartographie responsable du réseau et la compréhension des risques et de leur atténuation, consultez notre site web. [Page d'impact](impact.md/#cartographie-responsable-du-reseau-comprendre-les-risques-et-les-mesures-dattenuation).

### <div class="tools-header">Comment la qualité et la validation des données sont-elles assurées ?</div>

MapYourGrid s'appuie sur le principe d'OpenStreetMap qui consiste à [vérifiabilité](https://wiki.openstreetmap.org/wiki/Verifiability)Cela signifie que toutes les données doivent pouvoir être observées et confirmées par d'autres. La qualité est assurée par :

* Contrôles automatisés à l'aide d'outils tels que [Le validateur JOSM](https://josm.openstreetmap.de/wiki/Help/Dialog/Validator) et [Osmose](https://wiki.openstreetmap.org/wiki/Osmose).
* Les lignes directrices visuelles et de marquage pour une cartographie cohérente.
* Des évaluations humaines facultatives via la balise `#MapYourGrid` dans OSM.
* Outils d'analyse tels que [Quelques statistiques](https://stats.now.ohsome.org/) pour détecter les lacunes ou les anomalies.
* Validation par des experts et contrôles d'échantillons aléatoires.

Ensemble, ces méthodes permettent de maintenir un ensemble de données fiables sur le réseau électrique. [En savoir plus sur l'assurance qualité et la validation](strategies.md/#assurance-qualite-et-validation).

### <div class="tools-header"> Quels sont les rôles des membres de l'équipe ? </div>

Nous sommes des développeurs, des scientifiques des données, des experts en réseaux électriques, des cartographes et des contributeurs à OpenStreetMap. Nos rôles vont du développement de logiciels et de la modélisation de données à la coordination de la communauté et à la connaissance du terrain. L'équipe principale de MapYourGrid se considère comme un engrais pour la communauté. Nous jetons des ponts entre les individus et les organisations, créons des outils de cartographie, documentons les stratégies et les bonnes pratiques, et développons du matériel de formation. Afin de tester notre propre matériel et d'acquérir de l'expérience, nous cartographions dans le monde entier pour comprendre les besoins de la communauté dans toute sa diversité.

### <div class="tools-header"> Quel est le modèle économique du projet ? </div>

MapYourGrid est une initiative à but non lucratif financée par plusieurs petites organisations qui utilisent ces données pour d'autres outils open-source, facilitant ainsi les contributions ultérieures à OSM et contribuant à maintenir la qualité des données au fil du temps. 

### <div class="tools-header"> Quelle est la gouvernance de MapYourGrid ? </div>

MapYourGrid est dirigé par [Transition énergétique ouverte](https://openenergytransition.org/), une organisation à but non lucratif, et soutenue par [Datactivist](https://datactivist.coop/en/), [Bus de la jungle](https://junglebus.io/en), [Dynartio](https://dynartio.com/) et [Infogeomatics](https://www.infrageomatics.com/). Nous sommes alignés sur les valeurs de l'écosystème OpenStreetMap et nous agissons pour une gouvernance partagée du projet au sein de la communauté. La mise en place d'un conseil de gouvernance officiel de MapYourGrid est prévue pour la fin de l'année 2025. Vous souhaitez nous rejoindre ou nous soutenir ? Contact <a href="mailto:MapYourGrid@openenergytransition.org" target="_blank" rel="noopener">nous par email</a> 

### <div class="tools-header"> Pourquoi donnons-nous la priorité aux lignes de transmission ? </div>

Le moyen le plus rapide d'élargir notre impact est de cartographier les réseaux de transport d'électricité. De nombreux aspects tels que les sous-stations du réseau de distribution seront ajoutés ultérieurement pour rendre les données plus détaillées et exploitables.

### <div class="tools-header"> Pourquoi faites-vous cela ? Pourquoi est-ce important ? </div>

Des données transparentes et précises sur les infrastructures énergétiques sont essentielles pour la résilience climatique, la planification énergétique et l'équité. Dans les pays à revenu faible ou intermédiaire, la plupart de ces données sont verrouillées ou manquantes. Notre objectif est de changer cela. En savoir plus sur l'impact que nous créons sur notre site web. [Impact](impact.md) page. 

### <div class="tools-header"> Pour qui faites-vous cela ? Qui utilise ces données ? </div>

Tout le monde peut utiliser les données et les outils que nous créons.

En particulier, les données ouvertes sur les réseaux de transport peuvent être utilisées par les gouvernements, les services publics, les modélisateurs énergétiques, les chercheurs, les entreprises et les organisations à but non lucratif, les particuliers, etc. Si vous êtes intéressé par des exemples concrets d'utilisation des données OSM sur les réseaux, consultez la section dédiée sur notre site web. [Impact](https://mapyourgrid.org/impact/#who-is-using-openstreetmap-grid-data) page.

### <div class="tools-header"> Comment ce projet contribue-t-il à la décarbonisation ? </div>

La décarbonisation repose sur les énergies renouvelables telles que l'éolien, le solaire, l'hydroélectricité, etc. Ces technologies peuvent être gourmandes en terres et nécessitent de vastes zones pour les sites de production. Ces technologies peuvent être gourmandes en terres et nécessiter de grandes surfaces pour les sites de production. Ces sites sont souvent éloignés des lieux où l'électricité est effectivement consommée : villes, industries et ménages. Pour intégrer les énergies renouvelables à grande échelle, les planificateurs de l'énergie doivent savoir où de nouvelles lignes peuvent relier la production à la demande, où le réseau doit être renforcé et où les investissements auront le plus d'impact.

Ainsi, en cartographiant l'infrastructure actuelle dans un format cohérent et global, nous visons à permettre une meilleure planification du déploiement des énergies renouvelables, des stratégies d'électrification et des décisions d'investissement à long terme qui sont essentielles pour la décarbonisation.

### <div class="tools-header"> Quels sont les pays couverts par le projet ? </div>

Notre projet est mondial. Actuellement, nous nous concentrons principalement sur les pays à faibles et moyens revenus où les données publiques peuvent être rares et où les besoins en matière de planification énergétique sont importants. 

### <div class="tools-header"> Pourquoi aurions-nous besoin de cartographier le réseau électrique ? Les gouvernements et/ou les services publics ne disposent-ils pas déjà de cartes indiquant exactement où se trouve leur infrastructure ?</div>

Pas toujours. Dans de nombreux pays à revenu faible ou intermédiaire, il n'existe tout simplement pas de cartes quadrillées actualisées et accessibles. Même dans certaines régions à revenu élevé, les informations peuvent être fragmentées, obsolètes ou difficiles d'accès.

Pour les services publics et les gouvernements, l'établissement de cartes complètes constitue souvent un défi majeur. Les données sont dispersées entre de multiples acteurs privés et publics, et de nombreuses organisations s'appuient encore sur des ensembles de données propriétaires coûteux, simplement pour obtenir une image de base de leur propre infrastructure.

C'est pourquoi il est si important de disposer de données ouvertes et normalisées sur les réseaux de transport. En rendant le réseau accessible par l'intermédiaire d'OpenStreetMap, on crée une référence globale et cohérente que tout le monde peut utiliser, qu'il s'agisse de décideurs politiques, de chercheurs, d'urbanistes locaux ou de citoyens.

### <div class="tools-header"> Comment cartographier tous ces réseaux électriques ? </div>

Nous utilisons une variété de sources, principalement l'imagerie satellitaire, ainsi que d'autres données ouvertes, des articles universitaires et des informations provenant d'OpenStreetMap, afin d'améliorer nos connaissances. 
Nous construisons également une chaîne d'outils 100 % open source pour cartographier le réseau électrique mondial :

1. [OpenStreetMap](https://www.openstreetmap.org/) en tant que base de données.
2. [JOSM](https://josm.openstreetmap.de/) en tant qu'éditeur OpenStreetMap.
3. [Carte des infrastructures ouvertes](https://openinframap.org/#2/26/12) pour la visualisation des données d'infrastructures de services publics provenant d'OSM.
4. [Osmose](https://wiki.openstreetmap.org/wiki/Osmose) pour la validation et l'assurance qualité.
5. [mkdocs matériel](https://squidfunk.github.io/mkdocs-material) pour le site web.
6. [Dépliant](https://github.com/Leaflet/Leaflet) pour la carte interactive.

En savoir plus sur tous les outils et référentiels que nous avons intégrés sur [GitHub - open-energy-transition/MapYourGrid : Nous donnons aux individus, aux communautés et aux nations du monde entier les moyens de cartographier le réseau électrique.](https://github.com/open-energy-transition/MapYourGrid)

Nous travaillons activement au développement et à l'intégration d'autres outils Open Source existants afin d'améliorer la chaîne d'outils.

### <div class="tools-header">Il existe déjà de nombreux ensembles de données en grille : pourquoi ne pas les utiliser ? </div>

Il est vrai que de nombreux jeux de données existent, mais ils sont rarement harmonisés et la plupart sont protégés par des licences propriétaires, ce qui signifie qu'ils ne peuvent pas être réutilisés librement sans autorisation explicite.

OpenStreetMap fournit des données de grille de haute qualité, cohérentes à l'échelle mondiale et conformes à des normes de données communes. Cette cohérence est essentielle pour modéliser des systèmes énergétiques à grande échelle dans différentes régions.

En outre, les données d'OpenStreetMap sont publiées sous la licence ODbL (Open Database Licence), qui permet de partager, d'adapter et de construire à partir des données, à condition que l'attribution soit donnée, que les données dérivées soient partagées de la même manière et que tout reste ouvert.

### <div class="tools-header">N'est-il pas plus facile pour les gouvernements et/ou les services publics d'intégrer leurs données de quadrillage dans OSM, au lieu de tout recartographier à la main ? </div>

OpenStreetMap n'est pas un simple dépôt de données dans lequel des fichiers peuvent être téléchargés. Les importations à grande échelle sont généralement déconseillées par la communauté en raison des préoccupations liées à la qualité des données, aux restrictions de licence et à la maintenance à long terme.

Chaque élément d'OSM doit être vérifiable, localisé avec précision et intégré de manière cohérente avec les éléments cartographiques existants. Cela nécessite une vérification humaine, d'où l'importance du rôle des cartographes.

Cela dit, les services publics et les gouvernements sont invités à collaborer : si leurs jeux de données sont compatibles avec la licence et les normes d'OSM, ils peuvent être utilisés comme matériel de référence par les bénévoles, ce qui permet d'accélérer le processus de cartographie tout en garantissant que les données restent ouvertes, exactes et gérées par la communauté.

### <div class="tools-header">Pourquoi les volontaires individuels feraient-ils cela ? </div>

Les bénévoles d'OpenStreetMap cartographient le réseau électrique mondial depuis près de 20 ans. Grâce à des millions de contributeurs, environ 70 % du réseau mondial est déjà dans OSM. MapYourGrid est là pour soutenir la communauté avec des outils encore meilleurs et une documentation plus claire pour aider à compléter les 30% restants, qui sont la partie la plus difficile.

---

## <div class="stradegy-header">Contribution dans OpenStreetMap </div></h3>

### <div class="tools-header"> Comment puis-je participer au projet ? </div>

Commencez par contribuer à OpenStreetMap (OSM). En outre, vous pouvez vous impliquer dans les communautés OSM locales, participer à nos ateliers de cartographie gratuits et vous connecter avec nous sur [Discord](https://discord.gg/a5znpdFWfD). 

### <div class="tools-header"> Quelles sont les compétences dont j'ai besoin pour contribuer ? </div>

Pour la cartographie générale, vous devez avoir des compétences de base en cartographie et comprendre OSM, être capable de lire et de cartographier des images satellite. Des connaissances locales et/ou des compétences linguistiques concernant le pays/la région que vous souhaitez cartographier sont très appréciées. 

Si vous êtes développeur, vous pouvez également nous aider à améliorer les outils de cartographie et d'évaluation de la qualité. 

La compréhension du contexte énergétique et de la composition du réseau électrique est un atout important, qui peut être acquis. 

Nous organisons également des sessions de formation régulières afin d'aider les contributeurs à développer leurs compétences et à se sentir plus confiants.

### <div class="tools-header"> J'ai des informations sur le réseau électrique de mon pays, mais je ne suis pas sûr qu'il s'agisse de données ouvertes. Puis-je les utiliser pour la cartographie du réseau ? </div>

Vérifiez la crédibilité de la source et les conditions de licence avant de l'utiliser comme source dans OpenStreetMap. Certaines sources peuvent être inexactes, obsolètes ou incompatibles avec les licences d'OSM. Dans la mesure du possible, il est préférable de demander au fournisseur de données l'autorisation explicite d'utiliser ou de référencer ses données, en particulier si la licence n'est pas claire. En cas de doute, discutez avec la communauté OSM locale avant d'utiliser ou de référencer des données externes. 

### <div class="tools-header"> J'ai trouvé des données ouvertes concernant mon pays. Comment puis-je les partager ?</div>

Vérifier les informations pertinentes [Page du pays sur le Wiki OSM](https://wiki.openstreetmap.org/wiki/Power_networks#Local_projects). Nous avons signalé toutes les sources de données qui s'y trouvent. Aidez-nous à enrichir et à vérifier les informations existantes.

### <div class="tools-header"> Les données ouvertes sont-elles toujours fiables ? </div>

La qualité des données ouvertes varie. Vérifiez-les lorsque c'est possible. Si vous êtes local, la vérification sur le terrain peut être un excellent moyen de le faire.

### <div class="tools-header"> Puis-je importer des données dans OpenStreetMap ? </div>

Les importations en masse sont fortement déconseillées et doivent respecter les directives strictes d'OSM. Contactez votre communauté OSM locale avant de procéder à des importations. 

### <div class="tools-header"> Quelle est la licence des données que vous créez et utilisez ?</div>

We're co-creating and using OpenStreetMap data. OSM data is under the licence Open DataBase Licence (OBDL) that you can find more information and official sources on here : [Licence de base de données ouverte - OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Open_Database_License)

The MapYourGrid website, documentation and tools are licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/).

### <div class="tools-header"> Puis-je réutiliser les données OpenStreetMap ?</div>

Oui, à condition que vous citiez OSM comme il se doit. Notez que si vous améliorez les données OSM, vous devez publier les améliorations avec la licence appropriée afin qu'elles puissent profiter à la communauté OSM. Pour plus d'informations, consultez les directives d'attribution de la Fondation OSM sur le site web [Site de la Fondation OSM](https://osmfoundation.org/wiki/Licence/Attribution_Guidelines).

### <div class="tools-header"> Que faites-vous avec les données que vous avez créées ? Quel produit les données alimentent-elles ?</div>

Tout ce qui est cartographié est directement intégré dans OpenStreetMap. De là, les données sont utilisées dans des outils ouverts tels que [Carte des infrastructures ouvertes](https://openinframap.org/#2/26/12) et des cadres de modélisation à code source ouvert tels que [PyPSA](https://pypsa.org/#home) pour la planification de systèmes énergétiques à grande échelle.

L'objectif de la création de ces données n'est pas d'alimenter un produit unique, mais de soutenir la planification locale et régionale, de fournir une base solide pour la recherche scientifique et d'alimenter des outils open-source qui facilitent la contribution tout en aidant à maintenir la qualité des données au fil du temps.

### <div class="tools-header"> Qu'est-ce que iD, JOSM et Osmose dont vous parlez ? </div>

Il s'agit d'outils permettant d'éditer et de valider les données dans OSM :

* [iD](https://openstreetmap.org)L'éditeur OSM : un éditeur basé sur un navigateur et convivial pour les débutants. C'est l'éditeur disponible lorsque vous cliquez sur "edit" sur le site OSM. 
* [JOSM](https://josm.openstreetmap.de/): éditeur avancé d'OpenStreetMap.
* [Osmose](https://osmose.openstreetmap.fr): outil d'assurance qualité qui détecte les problèmes liés aux données OpenStreetMap.

### <div class="tools-header"> Qu'est-ce qu'un Changeset ? </div>

Il s'agit d'un groupe de modifications soumises à OSM en une seule fois. Il comprend également la date et l'objectif de vos modifications. Il est préférable que les ensembles de modifications soient restreints et ciblés. Par exemple, limitez vos modifications à une zone géographique ou à un type d'objet (par exemple, des lignes électriques ou des sous-stations). Il est ainsi plus facile pour les autres de comprendre et de réviser votre travail. Cela permet également d'éviter les conflits avec d'autres contributeurs qui modifient la même zone.

### <div class="tools-header"> Comment puis-je créditer mes contributions à OpenStreetMap pour MapYourGrid ?</div>

Ajoutez le hashtag **#MapYourGrid** dans le champ de commentaire de votre jeu de modifications. Cela nous aide à suivre et à mettre en valeur le travail de la communauté.

### <div class="tools-header"> Qui répare les erreurs que je pourrais commettre en cartographiant ? </div>

OpenStreetMap repose sur l'édition et la révision par la communauté. Chaque modification n'est pas systématiquement vérifiée par un autre contributeur, c'est pourquoi les contributeurs sont tenus d'agir de manière responsable. Des erreurs peuvent se produire, mais la communauté OSM fait confiance à tous les contributeurs pour cartographier bien au-delà de leur niveau de connaissances et de compétences, afin de ne pas créer de travail supplémentaire pour les autres membres de la communauté.

### <div class="tools-header"> Comment savoir si j'ai commis des erreurs ? </div>

Avant de télécharger vos modifications dans le JOSM, il se peut que vous obteniez des erreurs de validation et des avertissements, accompagnés d'une brève explication du problème. Vous devriez résoudre la plupart des problèmes (si ce n'est tous) avant de terminer votre téléchargement vers OSM. 

Les outils OSM tels que [Osmose](https://osmose.openstreetmap.fr/) signaler les erreurs potentielles. Il se peut que l'on vous suggère de les corriger ou de les réviser par la suite.

---

## <div class="stradegy-header">Cartographie du réseau électrique </div></h3>

### <div class="tools-header"> Comment trouver la tension d'une ligne électrique dans mon pays ? </div>

Commencez par rechercher les jeux de données officiels publiés par l'opérateur du réseau national. Certains pays fournissent des cartes de tension ou des rapports techniques sous forme de données ouvertes.

Si les données ne sont pas accessibles au public, envisagez de contacter l'opérateur national ou l'autorité de régulation pour demander plus d'informations.

Enquêter sur le terrain, mais toujours en respectant des règles de sécurité strictes. Ne vous approchez jamais d'une infrastructure à haute tension et n'entrez jamais dans une zone interdite.

Demandez à des experts locaux. Les ingénieurs électriciens, les techniciens ou les personnes travaillant dans le secteur de l'énergie peuvent être en mesure de fournir des informations fiables basées sur les normes et pratiques locales.

### <div class="tools-header"> Puis-je obtenir une liste de toutes les sous-stations de mon pays pour vérifier si certaines sont absentes d'OSM ? </div>

Vous pouvez commencer par étudier les sources en ligne existantes, en particulier les données ouvertes publiées par l'opérateur du réseau électrique de votre pays. Si vous ne trouvez pas ce que vous cherchez, envisagez de contacter directement l'opérateur pour demander la publication de ces informations en tant que données ouvertes. En fonction des lois nationales, des précédents juridiques et des pratiques locales, cela peut être possible. Veillez toujours à vérifier les licences et les conditions d'utilisation avant d'utiliser ou de partager des données.

### <div class="tools-header"> Quels détails et attributs attendez-vous des contributeurs ?</div>

Les éléments les plus importants sont les lignes, les pylônes, les périmètres des sous-stations et les centrales électriques.

En outre, les attributs clés des lignes électriques comprennent la tension, le nombre de câbles, de circuits, de fils par faisceau et d'opérateurs. 

Vous trouverez une documentation complète sur les attributs à utiliser pour les fonctions d'alimentation sur le site web [Catégorie du wiki OpenStreetMap : Lignes directrices pour l'infrastructure électrique](https://wiki.openstreetmap.org/wiki/Category:Power_Infrastructure_Guidelines).

### <div class="tools-header"> Combien de temps faut-il pour cotiser ?</div>

Vous pouvez effectuer des modifications rapides en quelques minutes (ajouter un pylône électrique ici ou là, ajouter des attributs sur des infrastructures déjà cartographiées). Cependant, si vous souhaitez cartographier en détail, vous aurez besoin de plus de temps et d'une compréhension plus approfondie du sujet, alors considérez cela comme une contribution à long terme.

### <div class="tools-header"> Lorsque je suis sur le terrain, dois-je m'approcher de l'infrastructure électrique pour la cartographier ? </div>

Non, il ne faut jamais s'approcher des infrastructures à haute tension telles que les sous-stations, les lignes et les pylônes électriques. Elles peuvent être extrêmement dangereuses et présenter des risques de chute d'objets ou de personnes, d'incendie, d'exposition à des produits toxiques, d'électrocution et même de mort. Observez toujours à une distance sûre et ne pénétrez en aucun cas dans une propriété privée ou une zone à accès restreint.

### <div class="tools-header"> Existe-t-il des applications que je peux utiliser pour effectuer des levés sur le terrain ? </div>

Oui, essayez [Vespucci](https://vespucci.io/) (Android), [Carte géographique](https://apps.apple.com/us/app/go-map/id592990211) (iOS), [Panoramax](https://gitlab.com/panoramax/clients/mobile-app/) ou [Père](https://gitlab.com/ravenfeld/baba) pour capturer des photos géolocalisées. [RueComplète](https://streetcomplete.app/) offre de simples quêtes de cartographie sur le terrain. Bien qu'il ne comprenne pas de tâches liées à l'énergie, vous pouvez toujours l'utiliser pour laisser des notes sur la carte. Par exemple, vous pouvez marquer un pylône électrique ou une sous-station pour l'éditer ultérieurement à partir d'un outil de bureau. [Cartes organiques](https://organicmaps.app/) ou [CoMaps](https://www.comaps.app/) Les applications mobiles peuvent également être utilisées pour laisser des notes sur la carte. N'oubliez pas d'ajouter #MapYourGrid dans votre note.
