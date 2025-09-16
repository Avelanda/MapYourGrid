<div class="page-headers">
<h1>Outils et stratégies</h1>
</div>
L'utilisation des bons outils et des bonnes stratégies est fondamentale pour cartographier le réseau électrique de manière efficace et précise. Les stratégies et outils suivants vous aideront à étendre les réseaux de transmission existants sur OpenStreetMap. Pour en savoir plus sur les outils et stratégies recommandés, cliquez sur les boutons : 

<div class="starter-kit-buttons">
 <a href="#introduction" class="btn btn-primary">Introduction</a> 
 <a href="#pioneer-mapping-strategies-and-tools" class="btn btn-secondary">Stratégies et outils de cartographie des pionniers</a>
 <a href="#technical-mapping-strategies" class="btn btn-secondary">Stratégies de cartographie technique</a>
 <a href="#quality-assurance-and-validation" class="btn btn-secondary">Assurance qualité et validation</a>
</div>

### **<div class="tools-header">Voir notre tutoriel vidéo sur les outils et les stratégies pour l'OMEC</div>**
<iframe width="720" height="315" style="height: auto; aspect-ratio: 16/9;" src="https://www.youtube-nocookie.com/embed/gyO93zd30nQ?si=UHClE5T7ohl_rW84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## <div class="stradegy-header">Introduction</div></h3>

> En règle générale, plus les tours et les sous-stations sont grandes, plus la tension est élevée et plus elles sont importantes pour le réseau de transmission : **Plus les pylônes et les sous-stations sont grands, plus la tension est élevée et plus ils sont importants pour le réseau de transport. Il convient donc de donner la priorité aux grandes infrastructures à haute tension.** 

Les stratégies suivantes et les processus associés ne sont que des recommandations. En fin de compte, la stratégie la plus efficace est celle qui vous permet de travailler sur le réseau électrique avec passion et motivation pendant une longue période. Les stratégies peuvent être divisées en deux phases, accompagnées d'un processus d'assurance qualité et de validation.

**[Stratégies de cartographie des pionniers](tools.md#pioneer-mapping-strategies-and-tools)** : Pour s'assurer que le réseau électrique a la meilleure couverture possible, nous recommandons de commencer par la cartographie des pionniers dans chaque pays. Plusieurs stratégies sont employées à ce stade pour identifier l'emplacement de toutes les lignes, de tous les poteaux électriques et de toutes les sous-stations. Plutôt que de réduire les problèmes sur le réseau, l'objectif principal est d'étendre la couverture géographique du réseau. Il peut en résulter une augmentation du nombre total de problèmes dans le réseau. Ces stratégies se concentrent principalement sur la cartographie de l'emplacement géographique des lignes électriques, des pylônes, des centrales et des sous-stations, plutôt que sur les détails techniques du réseau. Elles nécessitent une bonne vue, des compétences en cartographie rapide et une compréhension des situations dans lesquelles les données satellitaires sont insuffisantes pour une cartographie cohérente du réseau.

**[Stratégies de cartographie technique](tools.md#technical-mapping-strategies)** : Cette phase consiste à résoudre des problèmes de réseau complexes qui nécessitent une compréhension fondamentale du réseau électrique. Il s'agit notamment de cartographier les tensions, le nombre de circuits et les problèmes d'acheminement. Au cours de cette phase, le travail de cartographie initial est validé par rapport à plusieurs sources afin de s'assurer de sa plausibilité. Ces sources peuvent être des cartes officielles des opérateurs de réseau, des statistiques sur la longueur du réseau et d'autres données officielles. L'objectif principal de ces stratégies est de minimiser le nombre de problèmes de qualité complexes dans le réseau.

**[Assurance qualité et validation](tools.md#quality-assurance-and-validation)** : L'assurance qualité se déroule parallèlement aux deux phases de cartographie et garantit que toutes les données sont vérifiables, respectent les normes de marquage convenues, sont traçables et peuvent être examinées par d'autres. Des outils tels que JOSM, Osmose, ohsome stats et Open Infrastructure Map, ainsi que les commentaires de la communauté et les vérifications assistées par l'IA, contribuent à maintenir l'exactitude et la fiabilité des données relatives au réseau électrique sur OpenStreetMap.

## <div class="stradegy-header">Stratégies et outils de cartographie des pionniers</div></h3>

<div class="tools-buttons-small">
 <a href="#osmose" class="btn btn-primary">Osmose</a> 
 <a href="#todo-plugin" class="btn btn-primary">Tous les plugins</a> 
 <a href="#map-fast" class="btn btn-secondary">Cartes rapides</a>
 <a href="#copy-coordinates-from-and-into-josm" class="btn btn-secondary">Coordonnées et JOSM</a>
 <a href="#continue-open-lines" class="btn btn-secondary">Poursuivre les lignes ouvertes</a>
 <a href="#spot-the-gaps-in-the-grid" class="btn btn-secondary">Repérer les lacunes de la grille</a>
 <a href="#connect-power-plants" class="btn btn-secondary">Connecter les centrales électriques</a>
 <a href="#connect-substations" class="btn btn-secondary">Connecter les sous-stations </a>
 <a href="#connect-industrial-areas" class="btn btn-secondary">Connecter les zones industrielles </a>
 <a href="#connect-wikidata" class="btn btn-secondary">Connect WikiData</a>
</div>

### **<div class="tools-header">Osmose</div>**
Osmose est un outil d'assurance qualité qui détecte quotidiennement les problèmes dans les données OpenStreetMap. C'est le principal outil que nous utilisons pour trouver et réparer les infrastructures électriques, et de nombreuses stratégies expliquées ci-dessous l'utilisent. Vous pouvez utiliser notre outil Osmose intégré sur MAP IT📍, mais vous pouvez également utiliser l'outil officiel Osmose [site web](https://osmose.openstreetmap.fr/en/map/).

<div style="float: right; margin: 3px 0 10px 20px; width: 350px;">
 <img src="/images/tools/osmose-tool.jpg" class="img-border" style="width: 100%;">
 <figcaption class="image-caption"> Utilisez l'outil Osmose que nous avons intégré à notre carte interactive MAP IT📍. Cliquez sur l'image pour l'agrandir.</figcaption>
</div>

1. Accédez à l'espace [MAP IT📍](https://mapyourgrid.org/map-it/)page.
1. Appuyer sur le bouton de la couche de teinte Osmose.
1. Choisissez l'une des émissions d'Osmose et appuyez sur un pays. Vous obtiendrez ainsi jusqu'à 5 000 numéros d'Osmose pour ce pays et ce type de numéro.
1. Glissez-déposez le fichier dans la zone de carte de votre éditeur iD ou JOSM.

Si vous souhaitez obtenir les questions d'Osmose pour une région/province spécifique, nous vous recommandons d'utiliser le site web d'Osmose. Vous pouvez obtenir les questions relatives à l'énergie en choisissant le thème de l'énergie pour votre zone d'intérêt et ensuite `Exporter → JOSM`. À l'avenir, nous intégrerons les régions dans [MAP IT📍](https://mapyourgrid.org/map-it/). Les questions d'Osmose peuvent également être extraites, parcourues et visualisées via le site officiel de la Commission européenne. [Interface utilisateur d'Osmose](https://osmose.openstreetmap.fr/en/map/#loc=8/33.356/-7.309&level=1%2C2%2C3&tags=power&useDevItem=all&item=7040&class=2). 

### **<div class="tools-header">Todo Plugin :white_check_mark :</div>**
Le plugin Todo est utilisé pour presque toutes les stratégies de cartographie des pionniers, en parcourant systématiquement un ensemble de données de `hints`.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/todo.jpg" class="img-border" style="width: 100%;">
 <figcaption class="image-caption"> Un moyen simple mais très efficace de cartographier le réseau est la suite de "Lignes de transmission inachevées chargées dans le plugin Todo". Cliquez sur l'image pour l'agrandir.</figcaption>
</div>

1. Téléchargez n'importe quelle couche de données hint dans JOSM, ou sélectionnez d'autres objets OpenStreetMap que vous avez filtrés avec `CTRL+F`.
1. Téléchargez le plugin Todo pour JOSM. `Editer → Préférences`. Recherchez Todo, cochez-la et appuyez sur OK. Appuyez sur `Fenêtres → Liste des tâches` pour afficher la fenêtre de la liste des tâches. 
1. Appuyez sur `CTRL + A` pour sélectionner tous les objets de la couche d'indices. Appuyez sur le bouton Ajouter dans la fenêtre du plugin Todo (`Fenêtres → Liste Todo`).
1. Revenez à la couche de données OSM.
1. Vous pouvez maintenant parcourir systématiquement tous les indices en appuyant sur Marque.

### <div class="tools-header">Cartes rapides </div>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/mapfaster.jpg" class="img-border" style="width: 100%;">
 <figcaption class="image-caption"> La sélection de tous les nœuds non balisés le long de votre ligne vous permet de les baliser tous en même temps, ce qui vous fait gagner beaucoup de temps. N'oubliez pas de baliser le portail, ainsi que le début et la fin de la ligne. Cliquez sur l'image pour l'agrandir </figcaption>
</div>

Pour cartographier efficacement et rapidement, vous devez savoir comment sélectionner tous les nœuds le long de votre nouvelle ligne et les convertir en pylônes électriques en une seule fois. Vous gagnerez ainsi beaucoup de temps :

1. Activez le mode expert en sélectionnant le menu déroulant Vue dans le panneau supérieur.
1. Appuyez sur `A` et dessinez des nœuds en suivant les tours. Cela créera une longue ligne de nœuds non marqués, tous connectés par un chemin non marqué.
1. Cliquez sur le chemin, et marquez-le comme une ligne électrique.
1. Cliquez à nouveau sur le chemin, et `CTRL+F` pour ouvrir la recherche. Puis entrez cette chaîne de recherche : `child selected type:node AND untagged`. Cela sélectionnera tous les noeuds non marqués de la voie.
1. Utilisez le pylône ou les poteaux d'alimentation préréglés pour régler tous les nœuds en même temps.
1. Si vous perdez cette requête, cliquez sur la flèche droite de la fenêtre de recherche et sélectionnez-la dans votre historique.

### <div class="tools-header">Copier les coordonnées depuis et vers le JOSM</div>

Il existe de nombreuses raisons pour lesquelles vous souhaitez partager votre position avec quelqu'un d'autre. De nombreuses plateformes cartographiques populaires vous permettent de copier les coordonnées d'une carte en cliquant avec le bouton droit de la souris sur une position arbitraire.

1. Pour copier les coordonnées d'un noeud dans le JOSM, il suffit de sélectionner le noeud et d'appuyer sur `CTRL+SHIFT+C`.
2. Pour créer un noeud à partir d'une coordonnée donnée, appuyez sur `SHIFT+D` ou cliquez sur le bouton Ajouter un noeud dans la fenêtre déroulante Outils. Il est recommandé d'ajouter ce bouton à votre barre d'outils supérieure.

### <div class="tools-header">Poursuivre les lignes ouvertes</div>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/osmose-unfinished-transmission-lines.jpg" class="img-border" style="width: 100%;">
 <figcaption class="image-caption"> Les questions de l'Osmose "Ligne de transport d'électricité inachevée" révèlent toutes les lignes de transport qui ne sont pas connectées à une sous-station. Cliquez sur l'image pour l'agrandir.</figcaption>
</div>

La stratégie _Continue Open Lines_ est la plus efficace et la plus conviviale pour les débutants. Elle est directement intégrée dans [Map It📍](https://MapYourGrid.org/map-it/). La stratégie dépend principalement [osmose](https://osmose.openstreetmap.fr/en/map/)L'outil d'assurance qualité OpenStreetMap détecte quotidiennement les problèmes dans les données OpenStreetMap. Il s'agit notamment de différentes catégories de problèmes, tels que les "lignes de transport d'électricité inachevées" : 

1. Sélectionnez `Ligne de transport d'électricité inachevée (classe 2) (recommandé pour les débutants ⭐)` dans le menu déroulant, puis cliquez sur le pays ou l'état que vous souhaitez cartographier. 
2. Glissez-déposez le fichier GeoJSON que vous venez de télécharger dans la fenêtre du JOSM.
3. Appuyez sur `CTRL+A` pour sélectionner tous les emplacements que vous avez choisis et appuyez sur `Ajouter` dans la fenêtre du plugin de la liste des tâches.
4. Cliquez sur "Transmission par défaut (50 kV+)" dans la requête "Transmission Overpass Query" sélectionnée et téléchargez les données de la grille de transmission dans une autre couche du JOSM. Activez cette couche.
4. Vous pouvez maintenant passer en revue toutes les questions en appuyant sur `Mark`.

### <div class="tools-header">Repérer les lacunes de la grille</div>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/finding-gaps.jpg" class="img-border" alt="Equator ">
 <figcaption class="image-caption">Des données satellitaires obsolètes entraînent des lacunes plus importantes dans le réseau dans de nombreuses régions de l'Équateur. Ces lacunes peuvent être repérées par des lignes qui se terminent brusquement plutôt qu'en cercle, ce qui indique la présence d'une sous-station. Cliquez sur l'image pour l'agrandir.</figcaption>
</div>

Repérer les lacunes du réseau est une stratégie assez simple mais très efficace. L'utilisation d'une carte colorée qui met en évidence les lacunes du réseau et les sous-stations non connectées permet de repérer facilement les lacunes du réseau. Contrairement à la stratégie "Continuer les lignes ouvertes", cette approche est plus souple et s'appuie sur le jugement humain pour résoudre les problèmes topologiques évidents du réseau. Cela nous permet de donner la priorité aux lignes qui étendent ou connectent de nouvelles régions du réseau, c'est-à-dire aux lignes qui présentent un intérêt topologique. 

Comme la plupart des lignes de transmission se terminent par des sous-stations, la technique de peinture sur carte nous permet de marquer d'un cercle les lignes tranquilles qui ne se terminent pas par une sous-station. Le zoom arrière permet au cartographe de se familiariser avec les lacunes et la couverture nationale de la grille. Si vous n'avez pas encore ajouté notre mapCSS pour colorer la grille, vous pouvez trouver le map painting recommandé pour les grilles à faible densité pour cette stratégie ici <a href="https://raw.githubusercontent.com/open-energy-transition/color-my-grid/refs/heads/main/ohmygrid-default.mapcss">ici.</a>

1. Nous recommandons d'utiliser ce fichier MapCSS pour [grilles à faible densité](https://raw.githubusercontent.com/open-energy-transition/color-my-grid/refs/heads/main/MapYourGrid-default.mapcss) et celui-ci pour [grilles à haute densité](https://raw.githubusercontent.com/open-energy-transition/color-my-grid/refs/heads/main/MapYourGrid-default.mapcss). 
2. Vous pouvez utiliser [ColorMyGrid](https://github.com/open-energy-transition/color_my_map)Notre outil MapCSS Generator vous permet d'adapter facilement le fichier MapCSS à vos besoins spécifiques. 
3. Dans le repo de ColorMyGrid, vous trouverez également les données brutes pour éditer le fichier [légende de la carte](https://raw.githubusercontent.com/open-energy-transition/color-my-grid/refs/heads/main/legend/power-grid-legend.png).

### <div class="tools-header">Connecter les centrales électriques </div></h3>
Comme la plupart des grandes centrales électriques sont directement connectées au réseau de transmission, Connect Power Plants propose une stratégie simple utilisant l'ensemble des données sur les centrales électriques de Global Energy Monitor. Une interface utilisateur simple permettant d'extraire ces données au niveau national est intégrée dans le module [Map It📍](https://MapYourGrid.org/map-it/)qui permet aux utilisateurs de prévisualiser et de télécharger des données GeoJSON :

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/connect-power-plants.jpg" class="img-border" alt="GEM Angola Data Example in JOSM">
 <figcaption class="image-caption">Une centrale électrique en Colombie est située à proximité d'une grande sous-station. Cliquez sur l'image pour l'agrandir.</figcaption>
</div>

1. Sélectionnez `Global Energy Monitor - Power Plants` comme couche de référence et appuyez sur le pays que vous souhaitez cartographier.
3. Glissez et déposez le fichier GeoJSON que vous venez de télécharger dans votre fenêtre JOSM.
4. Appuyez sur `CTRL+A` pour sélectionner tous les emplacements et cliquez sur Ajouter dans la fenêtre du plugin Todo List.
5. Cliquez sur "Transmission par défaut (50 kV+)" dans la requête "Transmission Overpass Query" sélectionnée et téléchargez les données du réseau de transmission dans une autre couche du JOSM. Activez cette couche.
6. Vous pouvez maintenant passer en revue toutes les questions en cliquant sur "Marquer".
7. Si vous trouvez une centrale électrique manquante dans OpenStreetMap, merci de la cartographier également.

### <div class="tools-header">Connecter les sous-stations </div></h3>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/substation_malawi.jpg" class="img-border" alt="Substation in Malawi with unmapped interconnector in the left corner">
 <figcaption class="image-caption">Une sous-station au Malawi avec une interconnexion non cartographiée avec le premier pylône au centre de l'image. Cliquez sur l'image pour l'agrandir.</figcaption>
</div>

Une stratégie simple mais efficace pour cartographier le réseau de transport consiste à vérifier chaque sous-station pour voir si de nouvelles lignes en partent. Comme la plupart des réseaux de transport nationaux sont entièrement connectés, cette stratégie permet de tracer et donc de cartographier l'ensemble du réseau. Un seul pylône électrique non cartographié peut parfois être à l'origine d'une interconnexion manquante vers un autre pays, comme le montre l'image d'une sous-station au Malawi. Voyez-vous le pylône électrique manquant dans le coin inférieur gauche de la sous-station ?

1. Téléchargez les données du réseau de transport de votre pays à l'aide de la fonction [Map It📍](https://MapYourGrid.org/map-it/) page.
2. Appuyez sur `CTRL+F` et filtrez par `type:way power=substation`.
3. Dans la fenêtre du plugin Todo installé, cliquez sur "Ajouter". 
4. Revenez à votre couche de grille de transmission.
4. Vous pouvez maintenant passer d'une sous-station à l'autre en appuyant sur `Mark`.

### <div class="tools-header">Connecter les zones industrielles </div></h3>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/industrial-area.jpg" class="img-border" alt="A car assembly plant in Nigeria which is connected directly to the grid.">
 <figcaption class="image-caption">Cette zone industrielle du Nigeria est connectée au réseau de transmission par l'intermédiaire de sa propre sous-station.</figcaption>
</div>

Les grandes installations industrielles nécessitent d'énormes quantités d'énergie et disposent donc de leurs propres sous-stations, et sont parfois même directement connectées au réseau de transport d'électricité. En parcourant toutes les zones industrielles, on peut également découvrir des sous-stations ou des centrales électriques qui sont souvent déjà étiquetées comme landuse=industrial (utilisation du sol = industrielle). Essayez également de vérifier la zone environnante, car les sous-stations sont parfois situées en dehors de la zone industrielle cartographiée. 

1. Téléchargez les données du réseau de transport de votre pays à l'aide de la fonction [Map It📍](https://MapYourGrid.org/map-it/) page.
1. Téléchargez les zones industrielles de votre pays dans une nouvelle couche à l'aide de la fonction [Map It📍](https://MapYourGrid.org/map-it/) page.
1. Appuyez sur `CTRL+F` et filtrez par `type:way landuse=industrial`.
1. Dans la fenêtre du plugin Todo installé, cliquez sur "Ajouter". 
1. Revenez à votre couche de grille de transmission.
1. Vous pouvez maintenant passer d'une sous-station à l'autre en appuyant sur `Mark`.

Pour les pays les plus industrialisés, le chargement de toutes les industries à partir d'OSM peut parfois conduire à une quantité écrasante d'informations. Dans ce cas, il peut être utile de filtrer les petites industries qui n'offrent pas d'informations utiles. Pour ce faire, nous disposons de la fonction [osm-industries](https://github.com/open-energy-transition/osm-industries) outil. Ce script vous permet de créer une couche d'industries filtrées que vous pouvez charger dans JOSM en tant que fichier GeoJSON. Le script vous permet également de spécifier votre propre valeur seuil pour le filtrage, la valeur par défaut étant de 10 000 m² (1 hectare).

### <div class="tools-header">Connect WikiData</div></h3>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/wikipedia-wikidata.jpg" class="img-border" alt="Wikidata Comparison GeoJSON Output">
 <figcaption class="image-caption">Les articles de Wikipédia sur les infrastructures électriques, comme la centrale hydroélectrique de Gitanga au Kenya, fournissent également des données de localisation qui peuvent être systématiquement consultées via WikiData.</figcaption> 
</div>

WikiData donne accès aux articles de Wikipédia sur les infrastructures électriques dans le monde. Les articles de [Map It📍](https://MapYourGrid.org/map-it/) vous offre une interface simple pour extraire ces données pour le pays que vous souhaitez cartographier. La page [osm-wikidata-comparison](https://github.com/open-energy-transition/osm-wikidata-comparison/) fournit ces données en identifiant les infrastructures électriques manquantes ou incomplètes dans OpenStreetMap en extrayant des données structurées via l'API Wikidata. Il génère des GeoJSON prêts à l'emploi qui peuvent être ouverts dans JOSM en tant que couche d'indices visuels pour guider les nouveaux travaux de cartographie ou améliorer les balises existantes.

1. Utiliser l'outil [Map It📍](https://MapYourGrid.org/map-it/) pour télécharger les données du réseau de transport pour votre pays.
1. Téléchargez les données WikiData de votre pays dans une nouvelle couche à l'aide de la fonction [Map It📍](https://MapYourGrid.org/map-it/) page.
1. Appuyez sur CTRL+A et cliquez sur "Ajouter" dans la fenêtre "Todo".
1. Revenez à votre couche de grille de transmission.
1. Vous pouvez maintenant parcourir toutes les entrées de WikiData en appuyant sur "Marquer".
1. Si vous constatez qu'il manque des centrales électriques ou des zones industrielles, veuillez les inclure dans votre cartographie.

<div class="wikidata-mobile-fix" style="float: right; margin: 0 0 20px 20px; width: 250px; max-width: 100%;">
 <style>
 @media (max-width : 768px) {
 .wikidata-mobile-fix {
 float : none !important ;
 width : 100% !important ;
 margin : 1rem 0 !important ;
 }
 }
 </style>
 <img src="/images/WikiData-id.jpg" class="img-border" alt="Wikidata Comparison GeoJSON Output">
 <figcaption class="image-caption">WikiData QID permet à Open Infrastructure Map d'établir des liens avec des bases de données telles que Global Energy Monitor.</figcaption> 
</div>

<br>

#### Lier OpenStreetMap à WikiData

 L'établissement de liens entre d'autres jeux de données et des objets OpenStreetMap, tels que des centrales électriques, peut considérablement enrichir les données et permettre d'éviter les problèmes de licence. Souvent, d'autres catalogues de données fournissent des informations plus récentes sur les objets qu'OpenStreetMap. WikiData constitue un excellent moyen de relier toutes ces différentes sources de données de manière standardisée. Les ensembles de données que nous fournissons comprennent également les éléments suivants [WikiData QID](https://wiki.openstreetmap.org/wiki/Key:Wikidata). L'ajout de ces QID aux objets OpenStreetMap améliore considérablement la qualité et l'utilité des données relatives aux centrales électriques, aux sous-stations et aux interconnexions.

<br><br><br><br>

## <div class="stradegy-header">Stratégies de cartographie technique</div></h2>
 
<div class="tool-buttons">
 <a href="#Official-Data-and-Maps" class="btn btn-primary">Données officielles et cartes</a> 
 <a href="#fixme-tags" class="btn btn-secondary">Balises FixMe</a>
 <a href="#open-infrastructure-map-nighttime-osmose-and-josm" class="btn btn-secondary">Carte des infrastructures ouvertes </a>
 <a href="#online-investigation" class="btn btn-secondary">Enquête en ligne</a>
 <a href="#josm-powernetworktools-plugin" class="btn btn-secondary">PowerNetworkTools Plugin</a>
 <a href="#validating-and-mapping-interconnectors" class="btn btn-secondary">Interconnecteurs</a>
 <a href="#improve-osm-tags-with-ppm" class="btn btn-secondary">Correspondance entre les plantes et l'électricité </a>
</div>

### <div class="tools-header">Données officielles et cartes</div></h3>

Afin de cartographier plus efficacement, il est recommandé d'utiliser des cartes et des ensembles de données qui peuvent vous aider à trouver les lignes électriques, les sous-stations et les centrales électriques manquantes. La plupart des gestionnaires de réseaux de transport nationaux fournissent des cartes accessibles au public, qui peuvent vous aider à estimer la couverture du réseau et à localiser ce qui manque dans OSM. En outre, le fait de connaître le nom des sous-stations peut également aider à les localiser. MapYourGrid fournit une liste de [Cartes quadrillées](https://github.com/open-energy-transition/Awesome-Electric-Grid-Mapping)qui contient des ensembles de données, des cartes et des documents sur les réseaux électriques dans le monde entier.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/bangladeshawesome.jpg" class="img-border" alt="GEM Angola Data Example in JOSM">
 <figcaption class="image-caption">Carte officielle du réseau de transmission de Power Grid Bangladesh PLC.</figcaption>
</div>

#### Plugin OpenData et PBF
Le plugin OpenData vous permettra de charger toutes sortes de formats SIG directement dans JOSM.

1. Téléchargez le plugin `OpenData` pour JOSM. Allez dans Edit > Preferences. Recherchez `OpenData`, sélectionnez-le et appuyez sur OK.
1. Vous devriez maintenant être en mesure d'importer beaucoup plus de formats de données comme (csv, xls, ods, kml, kmz, shp, mif) comme une autre couche d'indices dans JOSM.
1. Pour importer [PBF](https://wiki.openstreetmap.org/wiki/PBF_Format) dans JOSM, veuillez installer le plugin PBF.

!!! note "OpenStreetMap et vérifiabilité"
    ⚠️ Veuillez utiliser ces jeux de données comme des couches de référence. Ne copiez pas et ne collez pas les données de ces cartes directement dans OpenStreetMap. Chaque point de données du réseau de transmission doit être défini manuellement et <a href="https://wiki.openstreetmap.org/wiki/Verifiability"></a> avec les données satellites officielles fournies par la communauté OpenStreetMap.

### <div class="tools-header">Balises FixMe</div></h3>
OpenStreetMap permet aux cartographes de marquer rapidement un objet qui semble erroné et qui doit être corrigé à l'aide de la fonction [Clé:fixme](https://wiki.openstreetmap.org/wiki/Key:fixme) tag. Par exemple, vous pouvez écrire `fixme=wrong voltage` si vous pensez que la tension sur une ligne est incorrecte, mais que vous ne connaissez pas la valeur correcte. Un petit F sera alors visible sur le bord du symbole pour indiquer la balise fixme. Parcourir toutes les étiquettes `fixme` d'un pays est également un excellent moyen de rechercher des erreurs dans la grille que vous pouvez essayer de corriger. Nous recommandons d'utiliser le plugin `Todo` pour cela.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/fixme.jpg" class="img-border float-right" alt="Fixme tags loaded in the Todo list.">
 <figcaption class="image-caption">Balises Fixme chargées dans la liste Todo.</figcaption>
</div>

1. Téléchargez la grille que vous souhaitez utiliser à l'adresse suivante [Map It📍](https://MapYourGrid.org/map-it/) page.
2. Appuyez sur `CTRL+F` et recherchez `fixme=*`.
3. Dans la fenêtre de la liste des tâches, appuyez sur "Ajouter".
4. Une fois que vous avez corrigé un problème, veuillez supprimer la balise `fixme`...

### <div class="tools-header">Carte d'infrastructure ouverte - Nuit, Osmose et JOSM </div></h3>
<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/openinfraosmose.jpg" class="img-border" alt="Open Infrastructure Map - Osmose">
 <figcaption class="image-caption">Open Infrastructure Map inclut également les problèmes d'osmose dans la grille sous la forme d'une autre couche.</figcaption>
</div>

1. Open Infrastructure Map peut être utilisé comme outil pour cartographier et trouver les problèmes en utilisant la fonction d'éclairage nocturne.
2. Aller à la page <a href="https://openinframap.org/#2/26/12">site web</a> et régler l'arrière-plan sur des lumières nocturnes. Cela permet de voir clairement les "trous" dans le réseau d'un pays.
3. Dans les calques, activez la fonction de validation de la puissance. Si vous zoomez et trouvez une ligne électrique inachevée, vous pouvez voir le problème d'osmose affilié à cette ligne.
4. Si vous souhaitez modifier ce que vous avez trouvé, Open Infrastructure Map permet l'édition via JOSM une fois que vous avez suffisamment zoomé. En bas à droite de la page, vous pouvez cliquer sur "Editer" et "Edition à distance" (n'oubliez pas d'activer l'édition à distance dans le JOSM). 

### <div class="tools-header">Enquête en ligne :mag :</div>

La recherche d'articles de presse, de rapports, d'études universitaires ou d'ensembles de données récents concernant des sous-stations et des lignes de transmission nouvellement opérationnelles est un moyen efficace de trouver des informations sur des projets d'infrastructure à grande échelle dont la construction ou l'exploitation vient de commencer. Ces installations étant d'intérêt national, elles font généralement l'objet de reportages sur les portails d'information locaux ou sur les sites web des gestionnaires de réseaux de transport. C'est pourquoi il y a tant de nouvelles, d'articles et de rapports sur les nouvelles sous-stations, lignes de transmission et centrales électriques à grande échelle qui entrent en service.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/mapstrats.jpg" class="img-border" alt="A wind farm in Bangladesh displayed in OpenStreetMap">
 <figcaption class="image-caption">Un parc éolien au Bangladesh affiché dans OpenStreetMap qui a été découvert par des documents officiels.</figcaption>
</div>

Les grands modèles linguistiques (LLM) locaux peuvent aider en effectuant des recherches dans la langue officielle du pays. Par exemple : "Veuillez rechercher des articles de presse, des rapports, des études universitaires ou des ensembles de données sur les lignes de transmission ou les sous-stations ouvertes dans le pays A au cours des cinq dernières années. Utilisez la langue officielle du pays A. N'incluez que les ressources qui ne sont pas déjà répertoriées dans la base de données <a href=''.https://github.com/open-energy-transition/Awesome-Electric-Grid-Mapping'>Une cartographie impressionnante du réseau électrique</a> repository.”

Soyez attentif à la licence et à la qualité des documents que vous trouvez. Si vous ne pouvez pas valider les informations trouvées par différentes sources, vous pouvez au moins utiliser les noms des sous-stations, des régions et des villes pour identifier l'emplacement des nouvelles sous-stations ou lignes de transport, et vérifier leur visibilité sur les images satellite. Le moyen le plus rapide de rechercher des infrastructures électriques mondiales telles que des centrales électriques, des sous-stations ou des interconnexions nationales par leur nom est d'utiliser la fonction de recherche de <a href="https://openinframap.org/#2/26/12">Carte des infrastructures ouvertes</a>

### <div class="tools-header">JOSM PowerNetworkTools Plugin 🔌</div></h3>

Cet outil permet d'estimer la tension d'un jeu de barres de poste à partir d'images aériennes en mesurant l'espace entre les conducteurs. L'espacement est dicté par la tension et permet donc d'estimer la tension. Bien qu'il ne s'agisse pas d'une méthode parfaite, cet outil, combiné à la connaissance des tensions standard du réseau électrique d'un pays et de la disposition des infrastructures électriques, peut grandement aider les cartographes à attribuer des tensions aux infrastructures électriques à partir d'images aériennes.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/plugin.png" class="img-border" alt="JOSM PowerNetworkTools Plugin">
 <figcaption class="image-caption">Le plugin OpenStreetMap Editor qui permet d'estimer grossièrement les niveaux de tension en se basant sur les mesures d'espacement entre les phases.</figcaption> 
</div>

1. Téléchargez le plugin `PowerNetworkTools` pour JOSM. Allez dans `Edit` -> `Preferences`. Cherchez `PowerNetworkTools`, sélectionnez-le et appuyez sur OK. 
1. Activez l'Estimateur de tension dans le menu "Fenêtres".
1. Appuyez sur `V` pour mesurer la distance entre les deux phases au niveau du jeu de barres.
1. Pour en savoir plus sur l'utilisation du plugin, consultez le README de l'application [dépôt officiel](https://github.com/openinframap/josm-power-network-tools).

Nous recommandons les documents suivants pour approfondir la construction du réseau électrique et la manière dont il est conçu, y compris la relation entre la distance et la tension sur la base de la norme IEC 60071-2. N'oubliez pas que des normes différentes peuvent s'appliquer selon les pays.

1. [Méthodologie des lignes aériennes](https://go.ratedpower.com/hubfs/CS-Knowledge%20Base/Methodologies/Overhead%20Line%20Methodology.pdf)
1. [Lignes électriques aériennes dépassant 1 kV AC](https://webstore.ansi.org/preview-pages/bsi/preview_30365961.pdf)

### <div class="tools-header">Validation et cartographie des interconnecteurs 📥</div></h3>
Les interconnexions entre les pays sont essentielles au fonctionnement du réseau de transport. C'est pourquoi ces lignes doivent être régulièrement validées et soigneusement étendues. Si vous cartographiez une interconnexion entre deux pays et que vous souhaitez voir ce qui est cartographié de "l'autre" côté de la frontière, vous pouvez soit effectuer un téléchargement rapide à partir d'OSM dans une nouvelle couche, soit utiliser la requête "Overpass" suivante :

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/alternative_query.png" class="img-border" alt="Overpass Query Example">
 <figcaption class="image-caption">Exemple d'interrogation sur les passages supérieurs</figcaption>
</div>

1. Copiez cette <a href="https://raw.githubusercontent.com/open-energy-transition/osm-grid-definition/refs/heads/main/Other_queries/Border_overpass">requete</a> et le coller dans "Download from Overpass API" dans JOSM.
2. Dessinez une petite boîte de délimitation dans la carte glissante, puis exécutez la requête pour télécharger.
3. <p><strong>Explication :</strong> La requête trouve des nœuds dans votre zone de délimitation, détecte leur zone d'administration (niveau 4 par défaut) et récupère toute l'infrastructure électrique qui s'y trouve. Vous pouvez ajuster le "niveau d'administration" de la requête (par exemple, le niveau 2 pour le niveau national, le niveau 6 pour le niveau provincial) en modifiant l'attribut <code>niveau_administrateur</code> dans l'onglet téléchargement. Une boîte de délimitation plus petite est préférable (exécution plus rapide).</p>

### <div class="tools-header">Imagerie au niveau de la rue</div></h3>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/mapillary_tower.jpg" class="img-border" alt="Overpass Query Example">
 <figcaption class="image-caption">Les tours électriques de la côte du Bénin sont clairement visibles au niveau de la rue.</figcaption>
 <img src="/images/sub-sha-africa.jpg" class="img-border" style="width: 100%;"> </a>
 <figcaption class="image-caption">Mapillary fournit de précieuses images au niveau de la rue, particulièrement utiles dans les régions à revenu faible ou moyen telles que l'Afrique de l'Ouest. Cliquez sur l'image pour l'agrandir.</figcaption>
</div>

Des plates-formes telles que [Mapillaire](https://www.mapillary.com/) ou [Panoramax](https://panoramax.fr/) fournissent une alternative en données ouvertes à Google Street View pour valider le tracé des pylônes électriques et les numéros de câbles. Cette imagerie est également extrêmement utile pour suivre les pylônes électriques et le tracé des lignes dans les zones urbaines, car il peut être très difficile de repérer les pylônes électriques à l'aide de l'imagerie satellitaire dans un tel environnement. Cependant, cette imagerie peut également être utilisée pour estimer les tensions en analysant les isolateurs des pylônes électriques. Pour de nombreuses régions, comme l'Afrique subsaharienne, l'imagerie Mapillary est la seule source d'imagerie de haute qualité, car l'imagerie satellite dans ces régions est assez pauvre. L'imagerie Mapillary est directement intégrée dans le JOSM et l'iD. Voici comment l'activer dans JOSM :

1. Téléchargez le plugin `Mapillary` pour JOSM. Allez dans `Edit` -> `Preferences`. Cherchez `Mapillary`, sélectionnez-le et appuyez sur OK. 
2. Sous "Fenêtres", vous devriez maintenant trouver une couche d'imagerie `Mapillaire`. Cliquez dessus.
3. Il est nécessaire de zoomer beaucoup pour rendre les routes visibles lorsque l'imagerie est disponible. L'activation de cette couche vous permet de cliquer sur chaque nœud pour visualiser l'image. Pour naviguer rapidement là où l'imagerie est disponible, vous pouvez utiliser la fonction [interface web de Mapillary](https://www.mapillary.com/app)

### <div class="tools-header">Améliorer les balises OSM avec PPM</div></h3>

<a href="https://github.com/PyPSA/powerplantmatching" target="_blank">Correspondance des centrales électriques (PPM)</a> est un référentiel python conçu pour harmoniser et combiner des ensembles de données de centrales électriques provenant de sources telles que OpenStreetMap (OSM) et Global Energy Monitor. Il est largement utilisé pour préparer des données de production validées pour des modèles de systèmes énergétiques tels que PyPSA-EUR. Une nouvelle fonctionnalité permet désormais de récupérer les données de centrales électriques à partir d'OSM et de signaler toutes les <strong>centrales électriques et les générateurs qui sont rejetés</strong> en raison de métadonnées incomplètes ou incohérentes. Il s'agit notamment des éléments pour lesquels il manque un <code>name</code>, <code>output:electrical</code>, <code>plant:method</code>, des formats d'unités incorrects, entre autres.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/ppm-hint-layer.jpg" class="img-border" alt="PPM Rejected Power Plants GeoJSON">
 <figcaption class="image-caption">
 Centrales électriques rejetées par powerplantmatching en raison de métadonnées manquantes, affichées en rouge en tant que couche d'indices JOSM. En noir, la grille des infrastructures électriques d'OSM.
 </figcaption> 
</div>

Vous pouvez accéder à ces données par l'intermédiaire de notre [Map It📍](https://MapYourGrid.org/map-it/) interface. Sélectionnez le bouton <strong>powerplantmatching</strong> et cliquez sur n'importe quel pays pour télécharger un fichier GeoJSON répertoriant les centrales rejetées. Une fois le fichier téléchargé, ouvrez-le dans JOSM en tant que couche d'indices afin d'améliorer le marquage. Vous pouvez le faire en examinant la raison pour laquelle la centrale électrique n'a pas été prise en compte et en ajoutant les données manquantes. Par exemple, une raison courante est l'absence d'une balise technologique comme <code>plant:method=run-of-river</code> ou <code>plant:method=reservoir</code> sur les centrales hydroélectriques, ou <code>plant:method=wind_turbine</code> sur les relations avec les parcs éoliens.

Suivez les étapes ci-dessous pour améliorer les centrales électriques rejetées dans OSM :

1. Utiliser l'outil [Map It📍](https://MapYourGrid.org/map-it/) pour télécharger la couche des centrales électriques rejetées pour un pays donné.
2. Ouvrez le fichier GeoJSON dans le JOSM en tant que nouvelle couche.
3. Appuyez sur `CTRL+A` et cliquez sur `Ajouter` dans la fenêtre `Todo`.
4. Passez à votre couche de transmission ou d'alimentation OSM.
5. Parcourez les entrées rejetées en appuyant sur "Marquer" dans le JOSM.
6. Améliorer le balisage afin d'accroître la qualité des données OSM.

## <div class="stradegy-header">Assurance qualité et validation</div>

Lorsqu'elles sont correctement traitées et validées, les données géographiques issues du crowdsourcing peuvent rivaliser avec la qualité des ensembles de données hautement automatisés. MapYourGrid s'appuie sur cette base communautaire pour garantir les normes de qualité les plus élevées pour la cartographie de l'infrastructure électrique mondiale.

L'approche de validation de MapYourGrid est basée sur le principe du [principes de vérifiabilité d'OpenStreetMap](https://wiki.openstreetmap.org/wiki/Verifiability):

> **"Au fond, la "vérifiabilité" signifie que tout ce que vous faites peut être démontré comme vrai ou faux par d'autres cartographes "**

Ce principe s'applique à tous les aspects de la cartographie : la présence physique des infrastructures, la précision des géométries et la clarté des étiquettes et des valeurs. Une balise et une géométrie ne sont considérées comme vérifiables que si un autre cartographe, avec les mêmes données, les enregistrerait de manière identique. Cette méthode objective, fondée sur des preuves, fait d'OpenStreetMap une source fiable pour la recherche universitaire, la planification gouvernementale et l'analyse industrielle.

MapYourGrid ajoute à cette base des outils, des méthodologies et des mécanismes de retour d'information pilotés par la communauté afin de garantir l'exactitude, l'exhaustivité et la fiabilité des données. Voici comment nous procédons :

0. **Formation professionnelle, normes et soutien en matière de cartographie du réseau électrique**

    L'initiative MapYourGrid reconnaît que des données de haute qualité commencent par des contributeurs compétents. Nous investissons dans le renforcement des capacités des cartographes par le biais d'une formation structurée, d'une documentation de qualité professionnelle et de normes alignées sur les standards d'OpenStreetMap et les attentes du secteur de l'énergie. Nous soutenons la gestion décentralisée des données en donnant aux cartographes locaux les moyens de guider les efforts régionaux, en veillant à ce que les données restent à la fois précises et adaptées au contexte au fil du temps.

    <div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="/images/kenya-tanzania.jpg" class="img-border" alt="PPM Rejected Power Plants GeoJSON">
    <figcaption class="image-caption"> Un soin particulier est apporté à la validation et à l'étude des interconnexions entre différents pays, comme le <a href=https://openinframap.org/#6.7/-1.627/37.017> Interconnexion Kenya-Tanzanie</a> 
    </figcaption> 
    </div>

1. **Rétroaction des utilisateurs et signalement des problèmes par la foule**

    Nous encourageons tous ceux qui utilisent [Carte des infrastructures ouvertes](https://openinframap.org/#2/26/12) pour signaler des problèmes en utilisant le hashtag **#MapYourGrid**. Les notes peuvent être ajoutées sans compte, ce qui réduit la barrière à la participation. Ces observations provenant de la communauté permettent d'identifier les infrastructures obsolètes, mal classées ou manquantes. Le retour d'information des utilisateurs devient ainsi la pierre angulaire de la validation.

2. **Détection d'erreurs avant téléchargement avec le validateur JOSM**

    Avant d'être téléchargées sur OpenStreetMap, les données sont automatiquement scannées à l'aide de la technologie [Le validateur JOSM](https://josm.openstreetmap.de/wiki/Help/Dialog/Validator). Cet outil vérifie les erreurs de cartographie courantes telles que : Des combinaisons de balises illogiques, des géométries inhabituelles (par exemple, des portées excessivement longues entre les pylônes électriques) ou des données incomplètes ou obsolètes. MapYourGrid a créé des règles de validation personnalisées pour JOSM, appelées "Power QA". Pour en savoir plus sur ce développement, consultez la page [Référentiel ValidateMyGrid](https://github.com/open-energy-transition/validate-my-grid) et dans la documentation officielle de [Assurance qualité des réseaux électriques](https://wiki.openstreetmap.org/wiki/Power_networks/Quality_Assurance).

    Les avertissements sont signalés de manière visible et les mappeurs sont dissuadés de télécharger jusqu'à ce que les problèmes soient résolus, ce qui favorise un niveau élevé d'assurance qualité.

3. **Vérifications de la qualité visuelle avec les styles de cartes personnalisés**

    Sur mesure [styles de peinture de cartes](starter-kit.md/#3-add-visual-clarity-with-custom-map-styles) spécifiques à l'infrastructure électrique facilitent la détection visuelle des erreurs dans le JOSM. Ces styles mettent en évidence les anomalies, telles que les segments déconnectés ou les équipements mal classés, ce qui permet aux cartographes d'effectuer des audits visuels en temps réel.

4. **Option d'examen humain en boucle**

    En activant l'option "J'aimerais que quelqu'un révise mes éditions" dans le JOSM, les contributeurs peuvent demander une validation par les pairs. Le hashtag #mapyourgrid nous permet de suivre ces soumissions et d'offrir un soutien direct, en particulier pour :

    * Les nouveaux contributeurs travaillent sur des tutoriels
    * Modifications basées sur des images satellitaires peu claires ou à faible résolution

    Ces examens peuvent impliquer des cartographes expérimentés ou des spécialistes du réseau électrique, qui apportent à la fois la précision technique et le mentorat.

    <div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="/images/osmose-gui.jpg" class="img-border" alt="Osmose GUI">
    <figcaption class="image-caption"><a href=https://osmose.openstreetmap.fr/en/map/#loc=8/33.356/-7.309&level=1%2C2%2C3&tags=power&useDevItem=all&item=7040&class=2>L'interface graphique d'Osmose</a> permet aux utilisateurs d'extraire et d'étudier les problèmes liés à Osmose dans une région spécifique. 
    </figcaption> 
    </div>

5. **Assurance qualité automatisée quotidienne via Osmose**

    Le [Plate-forme d'assurance qualité Osmose](https://wiki.openstreetmap.org/wiki/Osmose) effectue quotidiennement des contrôles automatisés sur les données du réseau mondial, en se concentrant sur les éléments suivants

    * Le marquage de la tension n'est pas cohérent
    * Lignes de transmission isolées ou non connectées
    * balisage redondant ou obsolète

    Osmose QA possède des éléments et des classes, que l'on peut considérer comme des catégories avec des éléments listés dans chaque catégorie. En tant qu'outil global, Osmose effectue des contrôles de qualité sur de nombreuses couches de données OSM, au-delà des infrastructures électriques. Il est important de savoir quels sont les éléments et les problèmes qui ont une valeur pour la cartographie du réseau de transport d'électricité. 
 
    Cette liste de questions pertinentes est disponible sur le site web de la Commission européenne. [Map It📍](https://MapYourGrid.org/map-it/) page:

  | Item | Class | Description                              | Summary                                                                                                                   |
  | ---- | ----- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
  | 7040 | 1     | Lone Power Towers or Poles               | This tower should surely be connected to a power line                                                                     |
  |      | 2     | Unfinished Power Transmission line       | The line ends in a vacuum, and should be connected to another line or a transformer (`power=`) or a generator (`power=`). |
  |      | 3     | Connection between different Voltages    | Two lines meet at one point, but have inconsistent voltages (`voltage=*`)                                                 |
  |      | 4     | None Power node on Power Way             | If this node is a tower or pole, tag with `power=`; else remove it.                                                       |
  |      | 5     | Missing Power Tower or Pole              | Based on pole spacing, one appears to be missing on this line.                                                            |
  |      | 6     | Unfinished Power Distribution line       | The distribution line ends in a vacuum, and should connect to another distribution line or power structure.               |
  |      | 7     | Unmatched Voltage of line on Substation  | Ensure the voltage of lines matches the substation's rated voltage. 

 Ces questions sont directement visualisées dans [Carte des infrastructures ouvertes](https://openinframap.org/#2/26/12)Les cartographes disposent ainsi d'objectifs clairs pour améliorer l'ensemble de données. 

6. **Suivi statistique avec scores de santé (en cours de construction)**

    Des outils comme [Quelques statistiques](https://stats.now.ohsome.org/) fournissent des informations au niveau macro sur l'activité de cartographie. Ils permettent de détecter

    * Régions sous-cartographiées ou lacunes en matière d'infrastructures en comparant les statistiques nationales sur la longueur des lignes avec OpenStreetMap.
    * Des modèles de marquage inhabituels ou des anomalies de cartographie
    * Zones inactives avec des données de grille vieillissantes ou obsolètes

    Le suivi basé sur les hashtags permet également de contrôler les performances et d'évaluer les campagnes dans le temps et dans l'espace. Toutes ces données statistiques, ainsi que les problèmes d'osmose, sont utilisées pour calculer un score de santé pour le réseau électrique. 

7. **Tests d'intégration et d'interopérabilité (en cours de réalisation)**

    Nous testons régulièrement l'intégration des données électriques OSM avec les systèmes et applications externes. Nous nous assurons ainsi que le modèle de données est non seulement cohérent en interne, mais aussi compatible avec les cas d'utilisation réels, notamment l'analyse des flux de charge, les outils de planification et les plates-formes d'intervention d'urgence. Nous testons l'ensemble de données par rapport à d'autres modèles et cadres de systèmes énergétiques ouverts et propriétaires afin de vérifier la compatibilité structurelle et sémantique. L'interopérabilité garantit que les données de réseau basées sur OSM peuvent être largement adoptées, ce qui favorise la confiance entre les utilisateurs universitaires et industriels.

8. **Analyse de sensibilité (en cours de réalisation)**

    En simulant des changements de tension, de topologie ou de marquage des composants, nous mesurons la sensibilité des résultats dérivés (par exemple, les estimations de charge ou les modèles de fiabilité) aux variations des données d'entrée. Cela permet d'identifier les points de données critiques pour lesquels une plus grande précision ou une vérification plus poussée est essentielle.

9. **Validation croisée par des experts et des pairs (en cours de construction)**

    Des cartographes techniques expérimentés et des experts en systèmes énergétiques examinent régulièrement les données, en particulier dans les régions complexes où les tensions, les sous-stations ou les types d'infrastructure inhabituels se chevauchent. En combinaison avec des comparaisons qualitatives avec des études de tiers, des statistiques ou des cartes officielles du réseau électrique, ces experts recueillent toutes les informations relatives à la qualité des données. Ils sont capables de comparer différents résultats de validation afin d'approuver, de publier et de contrôler la version des données du réseau électrique. Ils peuvent comparer différents résultats de validation afin d'approuver, de diffuser et de contrôler la version des données relatives au réseau électrique. Cela leur permet d'informer la communauté de tout problème important lié aux données du réseau électrique qui a été identifié.

10. **Échantillon aléatoire assisté par l'IA et validation sur le terrain (en cours de construction)**

    Nous utilisons l'IA pour détecter les infrastructures non cartographiées à partir de l'imagerie satellite et signaler les anomalies dans les données existantes. Des échantillons aléatoires sont ensuite validés sur le terrain par des partenaires locaux, combinant la détection à distance et la vérification sur le terrain.

Ensemble, ces couches de validation, qui englobent le crowdsourcing, l'automatisation, l'examen par des experts et l'IA, font de MapYourGrid non seulement une initiative de cartographie, mais aussi une infrastructure de connaissances dont la qualité est assurée pour la transition énergétique mondiale.

