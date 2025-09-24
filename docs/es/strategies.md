<div class="page-headers">
<h1>Estrategias</h1>
</div>
Utilizar las herramientas y estrategias adecuadas es fundamental para cartografiar la red eléctrica con eficacia y precisión. Las siguientes estrategias y herramientas le ayudarán a ampliar las redes de transmisión existentes en OpenStreetMap. Obtenga más información sobre nuestras herramientas y estrategias recomendadas haciendo clic en los botones: 

<div class="starter-kit-buttons">
 <a href="#introduction" class="btn btn-primary">Introducción</a> 
 <a href="#pioneer-mapping-strategies-and-tools" class="btn btn-secondary">Estrategias y herramientas de Pioneer Mapping</a>
 <a href="#technical-mapping-strategies" class="btn btn-secondary">Estrategias cartográficas técnicas</a>
 <a href="#quality-assurance-and-validation" class="btn btn-secondary">Garantía de calidad y validación</a>
</div>

### **<div class="tools-header">Vea nuestro tutorial en vídeo sobre herramientas y estrategias para JOSM</div>**
<iframe width="720" height="315" style="height: auto; aspect-ratio: 16/9;" src="https://www.youtube-nocookie.com/embed/gyO93zd30nQ?si=UHClE5T7ohl_rW84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## <div class="stradegy-header">Introducción</div></h3>

> Como regla general: **Cuanto mayores sean las torres y subestaciones, mayor será su tensión y su relevancia para la red de transporte. Por lo tanto, debe darse prioridad en primer lugar a las grandes infraestructuras de alta tensión.** 

Por favor, considere las siguientes estrategias y los procesos asociados sólo como recomendaciones. En última instancia, la estrategia más eficaz es la que le permite trabajar en la red eléctrica con pasión y motivación durante más tiempo. Las estrategias pueden dividirse en dos fases, acompañadas de un proceso de garantía de calidad y validación.

**[Estrategias cartográficas pioneras](strategies.md#pioneer-mapping-strategies-and-tools)**: Para garantizar que la red eléctrica tenga la mejor cobertura posible, recomendamos empezar con la cartografía Pioneer en cada país. En esta fase se emplean varias estrategias para identificar la ubicación de todas las líneas, postes eléctricos y subestaciones. En lugar de reducir los problemas en la red, el objetivo principal es aumentar la ampliación de la cobertura geográfica de la red. Esto puede dar lugar a un aumento del número total de problemas en la red. Estas estrategias se centran principalmente en cartografiar la ubicación geográfica de las líneas eléctricas, torres, plantas y subestaciones, más que en los detalles técnicos de la red. Requieren buena vista, habilidades cartográficas rápidas y una comprensión de las situaciones en las que los datos por satélite son insuficientes para una cartografía coherente de la red.

**[Estrategias cartográficas técnicas](strategies.md#technical-mapping-strategies)**: Esta fase consiste en resolver problemas complejos de la red que requieren un conocimiento fundamental de la red eléctrica. Esto incluye el mapeo de tensiones, el número de circuitos y los problemas de enrutamiento. Durante esta fase, el trabajo inicial de cartografía se valida con múltiples fuentes para garantizar su plausibilidad. Estas fuentes pueden incluir mapas oficiales de los operadores de la red, estadísticas sobre la longitud de la red y otros datos oficiales. El objetivo principal de estas estrategias es minimizar el número de problemas de calidad complejos en la red.

**[Garantía de calidad y validación](strategies.md#quality-assurance-and-validation)**: El control de calidad se realiza en paralelo a ambas fases de cartografía y garantiza que todos los datos sean verificables, sigan las normas de etiquetado acordadas, sean trazables y puedan ser revisados por otros. Herramientas como JOSM, Osmose, ohsome stats y Open Infrastructure Map, junto con los comentarios de la comunidad y las comprobaciones asistidas por IA, ayudan a mantener la precisión y fiabilidad de los datos de la red eléctrica en OpenStreetMap.

## <div class="stradegy-header">Estrategias y herramientas de Pioneer Mapping</div></h3>

<div class="tools-buttons-small">
 <a href="#osmose" class="btn btn-primary">Osmosis</a> 
 <a href="#todo-plugin" class="btn btn-primary">Todos los plugins</a> 
 <a href="#map-fast" class="btn btn-secondary">Mapa rápido</a>
 <a href="#copy-coordinates-from-and-into-josm" class="btn btn-secondary">Coordenadas y JOSM</a>
 <a href="#continue-open-lines" class="btn btn-secondary">Continuar con las líneas abiertas</a>
 <a href="#spot-the-gaps-in-the-grid" class="btn btn-secondary">Detecte los huecos en la cuadrícula</a>
 <a href="#connect-power-plants" class="btn btn-secondary">Conectar centrales eléctricas</a>
 <a href="#connect-substations" class="btn btn-secondary">Conectar subestaciones </a>
 <a href="#connect-industrial-areas" class="btn btn-secondary">Conectar zonas industriales </a>
 <a href="#connect-wikidata" class="btn btn-secondary">Conectar WikiData</a>
</div>

### **<div class="tools-header">Osmosis</div>**
Osmose es una herramienta de control de calidad que detecta a diario problemas en los datos de OpenStreetMap. Es la principal herramienta que utilizamos para encontrar y corregir infraestructuras eléctricas, y muchas de las estrategias que se explican a continuación la utilizan. Puede utilizar nuestra herramienta Osmose integrada en MAP IT📍, pero también puede utilizar la Osmose oficial [sitio web](https://osmose.openstreetmap.fr/en/map/).

<div style="float: right; margin: 3px 0 10px 20px; width: 350px;">
 <img src="/images/tools/osmose-tool.jpg" class="img-border" style="width: 100%;">
 <figcaption class="image-caption"> Utilice la herramienta Osmose que hemos integrado en nuestro mapa interactivo MAP IT📍. Haga clic para ampliar.</figcaption>
</div>

1. Ir a la página [MAPA IT📍](https://mapyourgrid.org/map-it/)página.
1. Pulse el botón de la capa indirecta de Osmose.
1. Elija una de las emisiones de Osmose y pulse sobre un país. Aparecerán hasta 5000 emisiones de Osmose para ese país y tipo de emisión.
1. Arrastra y suelta el archivo en el área de mapas de tu iD o editor JOSM.

Si desea obtener ediciones de Osmose para una región/provincia específica, le recomendamos que utilice la página web de Osmose, ya que puede obtener ediciones relacionadas con la energía eligiendo el tema de energía para su área de interés y luego `Exportar → JOSM`. En el futuro integraremos las regiones en [MAPA IT📍](https://mapyourgrid.org/map-it/). Los temas de Osmose también pueden extraerse, consultarse y visualizarse a través de la aplicación oficial [Interfaz de usuario de Osmose](https://osmose.openstreetmap.fr/en/map/#loc=8/33.356/-7.309&level=1%2C2%2C3&tags=power&useDevItem=all&item=7040&class=2). 

### **<div class="tools-header">Todo Plugin :white_check_mark:</div>**
El plugin Todo se utiliza para casi todas las estrategias de mapeo pioneras, recorriendo sistemáticamente un conjunto de datos de "pistas".

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/todo.jpg" class="img-border" style="width: 100%;">
 <figcaption class="image-caption"> Una forma sencilla pero muy eficaz de cartografiar la red es la continuación de "Líneas de transmisión inacabadas cargadas en el plugin Todo". Haz clic para ampliar.</figcaption>
</div>

1. Descargue cualquier capa de datos de sugerencias en JOSM, o seleccione otros objetos de OpenStreetMap que haya filtrado con `CTRL+F`.
1. Descarga el plugin Todo para JOSM. 2. `Editar → Preferencias`. Busca Todo, márcalo y pulsa OK. Pulsa `Windows → Lista de Todo` para mostrar la ventana de la lista de Todo. 
1. Pulsa `CTRL + A` para seleccionar todos los objetos de la capa de sugerencias. 2. Pulsa Añadir en la ventana del plugin Todo (`Windows → Lista de todo`).
1. Vuelve a la capa de datos OSM.
1. Ahora puede recorrer sistemáticamente todas las pistas pulsando Marcar.

### <div class="tools-header">Mapa rápido </div>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/mapfaster.jpg" class="img-border" style="width: 100%;">
 <figcaption class="image-caption"> Si selecciona todos los nodos no etiquetados de la línea, podrá etiquetarlos todos a la vez, lo que le ahorrará mucho tiempo. Recuerde etiquetar el portal, así como el inicio y el final de la línea. Haga clic para ampliar </figcaption>
</div>

Para trazar mapas de forma eficaz y rápida, tienes que saber cómo seleccionar todos los nodos a lo largo de tu nueva línea y convertirlos en torres de energía de una sola vez. Esto te ahorrará mucho tiempo:

1. Active el Modo Experto seleccionando el menú desplegable Ver en el panel superior.
1. Pulsa `A` y dibuja nodos siguiendo las torres. Esto creará una larga línea de nodos no marcados, todos conectados por un camino no marcado.
1. Haz clic en el camino y etiquétalo como línea eléctrica.
1. Haz clic de nuevo en el camino y `CTRL+F` para abrir la búsqueda. A continuación, introduzca esta cadena de búsqueda: `child selected type:node AND untagged`. Esto seleccionará todos los nodos no etiquetados del camino.
1. Utilice la torre o los postes de energía preestablecidos para establecer todos los nodos a la vez.
1. Si alguna vez pierdes esta consulta, haz clic en la flecha derecha de la ventana de búsqueda y selecciónala del historial.

### <div class="tools-header">Copiar coordenadas desde y hacia JOSM</div>

Hay muchas razones por las que puedes querer compartir tu ubicación con otra persona. Muchas plataformas cartográficas populares permiten copiar coordenadas de un mapa haciendo clic con el botón derecho en una posición arbitraria.

1. Para copiar coordenadas de un nodo en JOSM, basta con seleccionar el nodo y pulsar `CTRL+SHIFT+C`.
2. Para crear un nodo a partir de una coordenada dada, pulse `MAYÚS+D` o haga clic en el botón Añadir nodo de la ventana desplegable Herramientas. Se recomienda añadir este botón a la barra de herramientas superior.

### <div class="tools-header">Continuar con las líneas abiertas</div>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/osmose-unfinished-transmission-lines.jpg" class="img-border" style="width: 100%;">
 <figcaption class="image-caption"> Los números de Osmose "Línea de transmisión eléctrica inacabada" revelan todas las líneas de transmisión que no están conectadas a una subestación. Haga clic para ampliar.</figcaption>
</div>

_Continuar Líneas Abiertas_ es la estrategia más eficaz y más fácil de usar para los principiantes. Está directamente integrada en [Mapa It📍](https://MapYourGrid.org/map-it/). La estrategia depende principalmente de [osmose](https://osmose.openstreetmap.fr/en/map/)una herramienta de control de calidad que detecta diariamente problemas en los datos de OpenStreetMap. Entre ellos se incluyen distintas clases de problemas, como "líneas de transmisión eléctrica inacabadas": 

1. Selecciona `Línea de transmisión eléctrica inacabada (Clase 2) (recomendada para principiantes ⭐)` en el menú desplegable y, a continuación, haz clic en el país o estado que desees cartografiar. 
2. Ahora arrastra y suelta el archivo GeoJSON que acabas de descargar en tu ventana JOSM.
3. Pulsa `CTRL+A` para seleccionar todas las ubicaciones que hayas seleccionado y pulsa `Añadir` en la ventana del plugin de la lista de Todo.
4. Haga clic en `Default Transmission (50 kV+)` en la `Transmission Overpass Query` seleccionada y descargue los datos de la red de transmisión en otra capa en JOSM. Active esta capa.
4. Ahora puede pasar por todas las incidencias pulsando `Mark`.

### <div class="tools-header">Detecte los huecos en la cuadrícula</div>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/finding-gaps.jpg" class="img-border" alt="Equator ">
 <figcaption class="image-caption">Los datos satelitales obsoletos provocan grandes lagunas en la red en muchas regiones de Ecuador. Estos vacíos se pueden detectar por líneas que terminan abruptamente en lugar de en un círculo redondo, lo que indica una subestación. Haga clic para ampliar.</figcaption>
</div>

Detectar los huecos en la red es una estrategia sencilla pero muy eficaz. Utilizando un mapa de pernos coloreados que resalta los huecos en la red y las subestaciones no conectadas, es fácil detectar dónde hay huecos en la red. A diferencia de la estrategia "Continuar líneas abiertas", este enfoque es más flexible y se basa en el criterio humano para resolver los problemas topológicos evidentes de la red. Esto nos permite dar prioridad a las líneas que amplían o conectan nuevas regiones de la red con líneas de relevancia topológica, en otras palabras. 

Como la mayoría de las líneas de transmisión terminan en subestaciones, la técnica de pintado de mapas permite marcar con un círculo las líneas tranquilas que no terminan en una subestación. Alejar la imagen permite al cartógrafo familiarizarse con los huecos y la cobertura nacional de la cuadrícula. Si aún no has añadido nuestro mapCSS para colorear la cuadrícula, puedes encontrar el pintado de mapas de cuadrículas de baja densidad recomendado para esta estrategia aquí <a href="https://raw.githubusercontent.com/open-energy-transition/color-my-grid/refs/heads/main/ohmygrid-default.mapcss">aquí.</a>

1. Recomendamos utilizar este archivo MapCSS para [rejillas de baja densidad](https://raw.githubusercontent.com/open-energy-transition/color-my-grid/refs/heads/main/MapYourGrid-default.mapcss) y éste para [rejillas de alta densidad](https://raw.githubusercontent.com/open-energy-transition/color-my-grid/refs/heads/main/MapYourGrid-default.mapcss). 
2. Puede utilizar [ColorMyGrid](https://github.com/open-energy-transition/color_my_map), nuestra herramienta generadora de MapCSS, para adaptar fácilmente el archivo MapCSS a cualquier requisito especial que pueda tener. 
3. En el repositorio de ColorMyGrid también encontrará los datos sin procesar para editar el archivo [leyenda del mapa](https://raw.githubusercontent.com/open-energy-transition/color-my-grid/refs/heads/main/legend/power-grid-legend.png).

### <div class="tools-header">Conectar centrales eléctricas </div></h3>
Dado que la mayoría de las grandes centrales eléctricas están conectadas directamente a la red de transporte, Connect Power Plants ofrece una estrategia sencilla utilizando el completo conjunto de datos sobre centrales eléctricas de Global Energy Monitor. Una sencilla interfaz de usuario para recuperar estos datos a nivel nacional está integrada en [Mapa It📍](https://MapYourGrid.org/map-it/)que permite a los usuarios previsualizar y descargar datos GeoJSON:

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/connect-power-plants.jpg" class="img-border" alt="GEM Angola Data Example in JOSM">
 <figcaption class="image-caption">Una central eléctrica en Colombia se encuentra cerca de una gran subestación. Haga clic para ampliar.</figcaption>
</div>

1. Seleccione `Global Energy Monitor - Power Plants` como capa de sugerencia y pulse el país que desee cartografiar.
3. Arrastre y suelte el archivo GeoJSON que acaba de descargar en su ventana JOSM.
4. Pulsa `CTRL+A` para seleccionar todas las ubicaciones y haz clic en Añadir en la ventana del plugin Lista de Todo.
5. Haga clic en `Default Transmission (50 kV+)` en la `Transmission Overpass Query` seleccionada y descargue los datos de la red de transmisión en otra capa en JOSM. Active esta capa.
6. Ahora puede pasar por todos los problemas pulsando "Marcar".
7. Si encuentra una central eléctrica que falta en OpenStreetMap, por favor, mapeela también.

### <div class="tools-header">Conectar subestaciones </div></h3>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/substation_malawi.jpg" class="img-border" alt="Substation in Malawi with unmapped interconnector in the left corner">
 <figcaption class="image-caption">Una subestación en Malawi con un interconector sin cartografiar con la primera torre en el centro de la imagen. Haga clic para ampliar.</figcaption>
</div>

Una estrategia sencilla pero eficaz para cartografiar la red de transporte consiste en comprobar cada subestación en busca de nuevas líneas que se ramifiquen desde ella. Como la mayoría de las redes de transporte nacionales están totalmente conectadas, esta estrategia permite trazar y, por tanto, cartografiar toda la red. A veces, una sola torre de alta tensión sin cartografiar puede llevar a un interconector que falta en otro país, como muestra la imagen de una subestación en Malawi. ¿Puedes ver la torre de alta tensión que falta en la esquina inferior izquierda de la subestación?

1. Descargue los datos de la red de transporte de su país utilizando la herramienta [Mapa It📍](https://MapYourGrid.org/map-it/) página.
2. Pulsa `CTRL+F` y filtra por `type:way power=substation`.
3. Con la ventana del plugin Todo instalada pulsa `Añadir`. 
4. Vuelva a su capa de red de transmisión.
4. Ahora puede recorrer todas las subestaciones pulsando `Mark`.

### <div class="tools-header">Conectar zonas industriales </div></h3>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/industrial-area.jpg" class="img-border" alt="A car assembly plant in Nigeria which is connected directly to the grid.">
 <figcaption class="image-caption">Esta zona industrial de Nigeria está conectada a la red de transmisión a través de su propia subestación.</figcaption>
</div>

Las grandes instalaciones industriales necesitan grandes cantidades de energía y, por tanto, tienen sus propias subestaciones, y a veces incluso están conectadas directamente a la red de transporte. Recorrer todas las zonas industriales también puede revelar subestaciones o centrales eléctricas que a menudo ya están etiquetadas como uso del suelo=industrial. Intenta comprobar también los alrededores, ya que a veces las subestaciones están situadas fuera de la zona industrial cartografiada. 

1. Descargue los datos de la red de transporte de su país utilizando la aplicación [Mapa It📍](https://MapYourGrid.org/map-it/) página.
1. Descargue las zonas industriales de su país utilizando en una nueva capa utilizando la función [Mapa It📍](https://MapYourGrid.org/map-it/) página.
1. Pulse `CTRL+F` y filtre por `type:way landuse=industrial`.
1. Con la ventana del plugin Todo instalada pulsa `Añadir`. 
1. Vuelva a su capa de red de transmisión.
1. Ahora puede recorrer todas las subestaciones pulsando `Mark`.

En el caso de los países más industrializados, cargar todas las industrias de OSM puede dar lugar a veces a una cantidad abrumadora de información. Cuando esto ocurre, puede ser conveniente filtrar las industrias más pequeñas que no ofrezcan información útil. Para ello, disponemos de [osm-industries](https://github.com/open-energy-transition/osm-industries) herramienta. Este script le permite crear una capa de industrias filtradas que puede cargar en JOSM como archivo GeoJSON. El script también le permite especificar su propio valor umbral para el filtrado, con el valor predeterminado de 10.000 metros cuadrados (1 hectárea).

### <div class="tools-header">Conectar WikiData</div></h3>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/wikipedia-wikidata.jpg" class="img-border" alt="Wikidata Comparison GeoJSON Output">
 <figcaption class="image-caption">Los artículos de Wikipedia sobre infraestructuras energéticas, como la central hidroeléctrica de Gitanga en Kenia, también proporcionan datos de localización a los que se puede acceder sistemáticamente a través de WikiData.</figcaption> 
</div>

WikiData proporciona acceso a artículos de Wikipedia sobre infraestructuras eléctricas en todo el mundo. El sitio [Mapa It📍](https://MapYourGrid.org/map-it/) le ofrece una interfaz sencilla para extraer estos datos del país que desea cartografiar. La página [osm-wikidata-comparison](https://github.com/open-energy-transition/osm-wikidata-comparison/) El repositorio proporciona estos datos identificando las infraestructuras eléctricas que faltan o están incompletas en OpenStreetMap mediante la extracción de datos estructurados a través de la API Wikidata. Genera GeoJSON listos para usar que pueden abrirse en JOSM como una capa de sugerencias visuales para guiar nuevos trabajos cartográficos o mejorar las etiquetas existentes.

1. Utilice la [Mapa It📍](https://MapYourGrid.org/map-it/) para descargar los datos de la red de transporte de su país.
1. Descargue los WikiDatos de su país en una nueva capa utilizando la función [Mapa It📍](https://MapYourGrid.org/map-it/) página.
1. Pulsa CTRL+A y haz clic en "Añadir" en la ventana "Todo".
1. Vuelva a su capa de red de transmisión.
1. Ahora puede recorrer todas las entradas de WikiData pulsando 'Marcar'.
1. Si observa que faltan centrales eléctricas o zonas industriales, inclúyalas también en su cartografía.

<div class="wikidata-mobile-fix" style="float: right; margin: 0 0 20px 20px; width: 250px; max-width: 100%;">
 <style>
 @media (max-width: 768px) {
 .wikidata-mobile-fix {
 float: none !important;
 anchura: 100% !importante;
 margin: 1rem 0 !important;
 }
 }
 </style>
 <img src="/images/WikiData-id.jpg" class="img-border" alt="Wikidata Comparison GeoJSON Output">
 <figcaption class="image-caption">WikiData QID permite a Open Infrastructure Map enlazar con bases de datos como Global Energy Monitor.</figcaption> 
</div>

<br>

#### Vinculación de OpenStreetMap con WikiData

 Vincular otros conjuntos de datos a objetos de OpenStreetMap, como centrales eléctricas, puede enriquecer notablemente los datos y ayudar a evitar problemas de licencias. A menudo, otros catálogos de datos proporcionan información más actualizada sobre los objetos que OpenStreetMap. WikiData constituye un excelente medio para enlazar todas estas fuentes de datos de forma normalizada. Los conjuntos de datos que proporcionamos también incluirán la [WikiData QID](https://wiki.openstreetmap.org/wiki/Key:Wikidata). La adición de estos QID a los objetos de OpenStreetMap mejora enormemente la calidad y utilidad de los datos relativos a centrales eléctricas, subestaciones e interconectores.

<br><br><br><br>

## <div class="stradegy-header">Estrategias cartográficas técnicas</div></h2>
 
<div class="tool-buttons">
 <a href="#Official-Data-and-Maps" class="btn btn-primary">Datos y mapas oficiales</a> 
 <a href="#fixme-tags" class="btn btn-secondary">FixMe Etiquetas</a>
 <a href="#open-infrastructure-map-nighttime-osmose-and-josm" class="btn btn-secondary">Mapa de infraestructuras abiertas </a>
 <a href="#online-investigation" class="btn btn-secondary">Investigación en línea</a>
 <a href="#josm-powernetworktools-plugin" class="btn btn-secondary">Plugin PowerNetworkTools</a>
 <a href="#validating-and-mapping-interconnectors" class="btn btn-secondary">Interconectores</a>
 <a href="#improve-osm-tags-with-ppm" class="btn btn-secondary">PowerPlantMatching </a>
</div>

### <div class="tools-header">Datos y mapas oficiales</div></h3>

Para cartografiar con mayor eficacia, se recomienda utilizar mapas y conjuntos de datos que puedan ayudarle a encontrar las líneas eléctricas, subestaciones y centrales eléctricas que faltan. La mayoría de los operadores de sistemas de transmisión nacionales ofrecen mapas públicos que pueden ayudarle a estimar la cobertura de la red y a localizar lo que falta en OSM. Además, tener los nombres de las subestaciones también puede ayudar a localizarlas. MapYourGrid proporciona una lista de [Mapas de cuadrícula seleccionados](https://github.com/open-energy-transition/Awesome-Electric-Grid-Mapping)que contiene conjuntos de datos, mapas y documentos sobre la red eléctrica en todo el mundo.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/bangladeshawesome.jpg" class="img-border" alt="GEM Angola Data Example in JOSM">
 <figcaption class="image-caption">Mapa oficial de la red de transmisión de Power Grid Bangladesh PLC.</figcaption>
</div>

#### OpenData y Plugin PBF
El plugin OpenData le permitirá cargar todo tipo de formatos SIG directamente en JOSM.

1. Descargue el plugin `OpenData` para JOSM. 2. Vaya a Editar > Preferencias. Busque `OpenData`, selecciónelo y pulse OK.
1. Ahora debería poder importar muchos más formatos de datos como (csv, xls, ods, kml, kmz, shp, mif) como otra capa de pistas en JOSM.
1. Para importar [PBF](https://wiki.openstreetmap.org/wiki/PBF_Format) en JOSM, instale el complemento PBF.

!!! nota "OpenStreetMap y la verificabilidad"
    ⚠️ Utilice estos conjuntos de datos como capas de referencia. No copie y pegue datos de estos mapas directamente en OpenStreetMap. Cada punto de datos de la red de transmisión debe configurarse manualmente y <a href="https://wiki.openstreetmap.org/wiki/Verifiability">verificado</a> con datos oficiales de satélite proporcionados por la comunidad OpenStreetMap.

### <div class="tools-header">Etiquetas FixMe</div></h3>
OpenStreetMap permite a los cartógrafos marcar rápidamente un objeto que parece erróneo y que hay que arreglar utilizando la función [Clave:fixme](https://wiki.openstreetmap.org/wiki/Key:fixme) tag. Por ejemplo, puedes escribir `fixme=tensión incorrecta` si crees que la tensión de una línea es incorrecta, pero no conoces el valor correcto. Aparecerá una pequeña F en el borde del símbolo para indicar la etiqueta fixme. Recorrer todas las etiquetas `fixme` de un país es también una buena forma de buscar errores en la red que puede intentar corregir. Para ello, recomendamos utilizar el plugin `Todo`.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/fixme.jpg" class="img-border float-right" alt="Fixme tags loaded in the Todo list.">
 <figcaption class="image-caption">Etiquetas Fixme cargadas en la lista Todo.</figcaption>
</div>

1. Descargue la rejilla que desee utilizar en la página [Mapa It📍](https://MapYourGrid.org/map-it/) página.
2. Pulsa `CTRL+F` y busca `fixme=*`.
3. En la ventana de la lista de tareas pulse "Añadir".
4. Una vez que haya solucionado un problema, elimine la etiqueta `fixme`..

### <div class="tools-header">Mapa de infraestructuras abiertas - Nocturno, Osmose y JOSM </div></h3>
<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/openinfraosmose.jpg" class="img-border" alt="Open Infrastructure Map - Osmose">
 <figcaption class="image-caption">Open Infrastructure Map también incluye los problemas de osmosis en la red como otra capa.</figcaption>
</div>

1. Open Infrastructure Map puede utilizarse como herramienta para cartografiar y encontrar problemas utilizando la función de luces nocturnas.
2. Ir a la <a href="https://openinframap.org/#2/26/12">sitio web</a> y configura el fondo con luces nocturnas. Esto puede ayudar a ver claramente los "agujeros" en la red de un país.
3. En las capas, active la función de validación de potencia. Si hace zoom y encuentra una línea de alimentación inacabada, podrá ver el problema de osmosis afiliado a esta línea.
4. Si desea editar lo que ha encontrado, Open Infrastructure Map permite la edición a través de JOSM una vez que se ha ampliado lo suficiente. En la parte inferior derecha de la página, puede pulsar sobre `Editar` y `Edición remota` (recuerde habilitar la edición remota en JOSM). 

### <div class="tools-header">Investigación en línea :mag:</div>

La búsqueda de artículos de prensa, informes, estudios académicos o conjuntos de datos recientes relacionados con subestaciones y líneas de transmisión recién puestas en servicio es una forma eficaz de encontrar información sobre proyectos de infraestructuras a gran escala que acaban de iniciar su construcción o explotación. Como estas instalaciones son de interés nacional, se suele informar sobre ellas en los portales de noticias locales o en los sitios web de los operadores de las redes de transmisión. Por eso hay tantas noticias, artículos e informes sobre nuevas subestaciones, líneas de transmisión y centrales eléctricas a gran escala que empiezan a funcionar.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/mapstrats.jpg" class="img-border" alt="A wind farm in Bangladesh displayed in OpenStreetMap">
 <figcaption class="image-caption">Un parque eólico en Bangladesh mostrado en OpenStreetMap que ha sido descubierto por documentos oficiales.</figcaption>
</div>

Los grandes modelos lingüísticos locales (LLM) pueden ayudar realizando búsquedas en la lengua oficial del país. Por ejemplo: "Por favor, busque artículos de prensa, informes, estudios académicos o conjuntos de datos sobre líneas de transmisión o subestaciones inauguradas en el país A en los últimos 5 años. Utilice la lengua oficial del país A. Incluya sólo recursos que no figuren ya en la lista <a href='https://github.com/open-energy-transition/Awesome-Electric-Grid-Mapping'>Impresionante cartografía de la red eléctrica</a> repository.”

Tenga en cuenta la licencia y la calidad de los documentos que encuentre. Si no puede validar la información que encuentra por diferentes fuentes, al menos puede utilizar los nombres de subestaciones, regiones y ciudades para identificar la ubicación de nuevas subestaciones o líneas de transmisión, y verificar su visibilidad en imágenes de satélite. La forma más rápida de buscar infraestructuras eléctricas mundiales como centrales eléctricas, subestaciones o interconectores de países por su nombre es mediante la función de búsqueda de <a href="https://openinframap.org/#2/26/12">Mapa de infraestructuras abiertas</a>

### <div class="tools-header">Plugin JOSM PowerNetworkTools 🔌.</div></h3>

Esta herramienta calcula la tensión de una barra colectora de una subestación a partir de imágenes aéreas midiendo la separación entre conductores. La separación viene dictada por la tensión, por lo que permite hacer una estimación de la tensión. Aunque no es un método perfecto, si se combina con el conocimiento de las tensiones estándar de la red eléctrica de un país y la disposición de la infraestructura eléctrica, puede ayudar en gran medida a los cartógrafos a asignar tensiones a la infraestructura eléctrica a partir de imágenes aéreas.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/plugin.png" class="img-border" alt="JOSM PowerNetworkTools Plugin">
 <figcaption class="image-caption">Plugin del editor de OpenStreetMap que permite estimar aproximadamente los niveles de tensión basándose en las mediciones de distancia entre fases.</figcaption> 
</div>

1. Descargue el plugin `PowerNetworkTools` para JOSM. 2. Vaya a `Editar` -> `Preferencias`. Busque `PowerNetworkTools`, selecciónelo y pulse OK. 
1. Active el Estimador de Tensión en el menú `Windows`.
1. Pulse `V` para medir la distancia entre las dos fases en la barra colectora.
1. Más información sobre cómo utilizar el complemento en el archivo README del archivo [repositorio oficial](https://github.com/openinframap/josm-power-network-tools).

Recomendamos los siguientes documentos para profundizar en la construcción de la red eléctrica y su diseño, incluida la relación entre distancia y tensión basada en la norma IEC 60071-2. Ten en cuenta que pueden aplicarse normas diferentes según el país.

1. [Metodología de la línea aérea](https://go.ratedpower.com/hubfs/CS-Knowledge%20Base/Methodologies/Overhead%20Line%20Methodology.pdf)
1. [Líneas eléctricas aéreas de más de 1 kV de CA](https://webstore.ansi.org/preview-pages/bsi/preview_30365961.pdf)

### <div class="tools-header">Validación y asignación de interconectores 📥</div></h3>
Los interconectores entre países son esenciales para el funcionamiento de la red de transporte. Por lo tanto, estas líneas deben validarse periódicamente y ampliarse con cuidado. Si usted está mapeando un interconector entre dos países y desea ver lo que está mapeado en el "otro" lado de la frontera, puede hacer una Descarga rápida desde OSM en una nueva capa o utilizar la siguiente consulta Overpass:

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/alternative_query.png" class="img-border" alt="Overpass Query Example">
 <figcaption class="image-caption">Ejemplo de consulta sobre el paso elevado</figcaption>
</div>

1. Copie este <a href="https://raw.githubusercontent.com/open-energy-transition/osm-grid-definition/refs/heads/main/Other_queries/Border_overpass">consulta</a> y pégalo en "Download from Overpass API" en JOSM.
2. Dibuje un pequeño cuadro delimitador en el mapa deslizante y, a continuación, ejecute la consulta para descargar.
3. <p><strong>Explicación:</strong> La consulta busca nodos en su cuadro delimitador, detecta su área de administración (nivel 4 por defecto) y obtiene toda la infraestructura energética que hay en ella. Puede ajustar el "nivel de administración" de la consulta (por ejemplo, nivel 2 para nacional, nivel 6 para provincial) editando el archivo <code>nivel_admin</code> en la pestaña de descarga. Un cuadro delimitador más pequeño es mejor (ejecución más rápida).</p>

### <div class="tools-header">Imágenes a pie de calle</div></h3>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/mapillary_tower.jpg" class="img-border" alt="Overpass Query Example">
 <figcaption class="image-caption">Las torres de alta tensión de la costa de Benín son claramente visibles a pie de calle.</figcaption>
 <img src="/images/sub-sha-africa.jpg" class="img-border" style="width: 100%;"> </a>
 <figcaption class="image-caption">Mapillary proporciona valiosas imágenes a pie de calle, especialmente útiles en regiones de renta baja o media como África Occidental. Haga clic para ampliar.</figcaption>
</div>

Plataformas como [Mapillary](https://www.mapillary.com/) o [Panoramax](https://panoramax.fr/) ofrecen una alternativa de datos abiertos a Google Street View para validar el trazado de las torres de alta tensión y los números de los cables. Estas imágenes también resultan muy útiles para seguir el trazado de las torres de alta tensión y las líneas en zonas urbanas, ya que detectar torres de alta tensión con imágenes por satélite en un entorno de este tipo puede resultar muy complicado. Sin embargo, estas imágenes también pueden utilizarse para estimar las tensiones mediante el análisis de los aisladores de las torres de alta tensión. Para muchas regiones, como el África subsahariana, las imágenes Mapillary son la única fuente de imágenes de alta calidad, ya que las imágenes por satélite en estas regiones son bastante pobres. Las imágenes Mapillary se integran directamente en JOSM e iD. Aquí cómo activarla en JOSM:

1. Descarga el plugin `Mapillary` para JOSM. 2. Vaya a `Edit` -> `Preferences`. Busca `Mapillary`, selecciónalo y pulsa OK. 
2. En `Windows` debería encontrar una capa de imágenes `Mapillary`. Haga clic en ella.
3. Es necesario hacer mucho zoom para que las carreteras sean visibles cuando se disponga de imágenes. La activación de esta capa permite hacer clic en cada nodo para visualizar la imagen. Para navegar rápidamente donde hay imágenes disponibles se puede hacer con el botón [interfaz web de Mapillary](https://www.mapillary.com/app)

### <div class="tools-header">Mejorar las etiquetas OSM con PPM</div></h3>

<a href="https://github.com/PyPSA/powerplantmatching" target="_blank">Powerplantmatching (PPM)</a> es un repositorio python diseñado para armonizar y combinar conjuntos de datos de centrales eléctricas procedentes de fuentes como OpenStreetMap (OSM) y Global Energy Monitor. Se utiliza ampliamente para preparar datos de generación validados para modelos de sistemas energéticos como PyPSA-EUR. Ahora, una nueva función obtiene datos de centrales eléctricas de OSM y marca todas las <strong>centrales eléctricas y generadores rechazados</strong> debido a metadatos incompletos o incoherentes. Esto incluye elementos a los que les falta <code>nombre</code>, <code>salida:eléctrica</code>, <code>planta:método</code>, formatos de unidades incorrectos, entre otros.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="/images/ppm-hint-layer.jpg" class="img-border" alt="PPM Rejected Power Plants GeoJSON">
 <figcaption class="image-caption">
 Centrales eléctricas rechazadas por powerplantmatching debido a la falta de metadatos, mostradas en rojo como una capa JOSM hint. En negro, la red de infraestructuras eléctricas de OSM.
 </figcaption> 
</div>

Puede acceder a estos datos a través de [Mapa It📍](https://MapYourGrid.org/map-it/) interfaz. Seleccione el botón <strong>powerplantmatching</strong> y haga clic en cualquier país para descargar un archivo GeoJSON con una lista de las centrales eléctricas rechazadas. Una vez descargado el archivo, ábralo en JOSM como capa de sugerencias para mejorar el etiquetado. Puede hacerlo revisando la razón por la que la central eléctrica no fue considerada y añadiendo los datos que faltan. Por ejemplo, una razón común es la falta de una etiqueta de tecnología como <code>plant:method=run-of-river</code> o <code>plant:method=reservoir</code> en las centrales hidroeléctricas, o <code>plant:method=wind_turbine</code> en las relaciones de parques eólicos.

Siga los siguientes pasos para ayudar a mejorar las centrales rechazadas en OSM:

1. Utilice la [Mapa It📍](https://MapYourGrid.org/map-it/) para descargar la capa de centrales eléctricas rechazadas de un país determinado.
2. Abra el archivo GeoJSON en JOSM como una nueva capa.
3. Pulsa `CTRL+A` y haz clic en `Añadir` en la ventana `Hacer`.
4. Cambie a su capa de transmisión o potencia OSM.
5. Repase las entradas rechazadas pulsando "Marcar" en JOSM.
6. Mejorar el etiquetado para aumentar la calidad de los datos OSM.

## <div class="stradegy-header">Garantía de calidad y validación</div>

Cuando se revisan y validan adecuadamente, los datos geográficos obtenidos por crowdsourcing pueden rivalizar con la calidad de conjuntos de datos altamente automatizados. MapYourGrid se basa en esta comunidad para garantizar los más altos estándares de calidad en la cartografía de la infraestructura eléctrica mundial.

El enfoque de validación de MapYourGrid se basa en el método [principios de verificabilidad de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Verifiability):

> **"En el fondo, la "verificabilidad" consiste en que todo lo que haces puede ser demostrado como verdadero o falso por otros mappers. "**

Este principio se aplica a todos los aspectos de la cartografía: la presencia física de infraestructuras, la precisión de las geometrías y la claridad de las etiquetas y los valores. Una etiqueta y una geometría sólo se consideran verificables si otro cartografiador, con los mismos datos, las registrara de forma idéntica. Este método objetivo y basado en pruebas es lo que convierte a OpenStreetMap en una fuente fiable para la investigación académica, la planificación gubernamental y el análisis industrial.

MapYourGrid incorpora herramientas adicionales, metodologías y mecanismos de retroalimentación impulsados por la comunidad para garantizar la exactitud, integridad y fiabilidad de los datos. Así es como lo hacemos:

0. **Formación profesional, normas y apoyo en cartografía de redes eléctricas**

    La iniciativa MapYourGrid reconoce que los datos de alta calidad comienzan con colaboradores bien informados. Invertimos en el desarrollo de la capacidad de los cartógrafos mediante una formación estructurada, documentación de calidad profesional y normas acordes tanto con las normas de OpenStreetMap como con las expectativas del sector energético. Apoyamos la gestión descentralizada de los datos capacitando a los cartógrafos locales para que guíen los esfuerzos regionales, garantizando que los datos sigan siendo precisos y contextualmente relevantes a lo largo del tiempo.

    <div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="/images/kenya-tanzania.jpg" class="img-border" alt="PPM Rejected Power Plants GeoJSON">
    <figcaption class="image-caption"> Se presta especial atención a validar e investigar las interconexiones entre distintos países como el <a href=https://openinframap.org/#6.7/-1.627/37.017> Interconector Kenia-Tanzania</a> 
    </figcaption> 
    </div>

1. **Comentarios de los usuarios y notificación masiva de problemas**.

    Animamos a todos los que utilicen [Mapa de infraestructuras abiertas](https://openinframap.org/#2/26/12) para informar de problemas utilizando el hashtag **#MapYourGrid**. Se pueden añadir notas sin necesidad de tener una cuenta, lo que reduce la barrera a la participación. Estas observaciones de la comunidad ayudan a identificar infraestructuras obsoletas, mal clasificadas o ausentes. De este modo, los comentarios de los usuarios se convierten en la piedra angular de la validación.

2. **Detección de errores previa a la carga con JOSM Validator**.

    Antes de cargar los datos en OpenStreetMap, se escanean automáticamente mediante el programa [Validador JOSM](https://josm.openstreetmap.de/wiki/Help/Dialog/Validator). Esta herramienta comprueba errores cartográficos comunes como: Combinaciones ilógicas de etiquetas, geometrías inusuales (por ejemplo, tramos excesivamente largos entre torres de alta tensión) o datos incompletos o obsoletos. MapYourGrid ha creado reglas de validación de energía personalizadas para JOSM denominadas "Power QA". Más información sobre este desarrollo en [Repositorio ValidateMyGrid](https://github.com/open-energy-transition/validate-my-grid) y en la documentación oficial de [Garantía de calidad de las redes eléctricas](https://wiki.openstreetmap.org/wiki/Power_networks/Quality_Assurance).

    Las advertencias se señalan de forma destacada y se disuade a los creadores de mapas de subir archivos hasta que se resuelvan los problemas, lo que fomenta un alto nivel de garantía de calidad.

3. **Comprobación de la calidad visual con estilos de mapas personalizados**

    A medida [estilos de pintura de mapas](starter-kit.md/#3-add-visual-clarity-with-custom-map-styles) específicos para infraestructuras eléctricas facilitan la detección visual de errores en JOSM. Estos estilos destacan anomalías, como segmentos desconectados o equipos mal clasificados, lo que permite a los mapeadores realizar auditorías visuales en tiempo real.

4. **Opción de revisión humana en bucle**

    Al activar la opción "Me gustaría que alguien revisara mis ediciones" en JOSM, los colaboradores pueden solicitar la validación por pares. El hashtag #mapyourgrid nos permite hacer un seguimiento de estos envíos y ofrecer apoyo directo, especialmente para:

    * Nuevos contribuyentes que trabajan a través de tutoriales
    * Ediciones basadas en imágenes por satélite poco claras o de baja resolución.

    En estas revisiones pueden participar cartógrafos experimentados o especialistas en redes eléctricas, que aportan tanto precisión técnica como tutoría.

    <div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="/images/osmose-gui.jpg" class="img-border" alt="Osmose GUI">
    <figcaption class="image-caption"><a href=https://osmose.openstreetmap.fr/en/map/#loc=8/33.356/-7.309&level=1%2C2%2C3&tags=power&useDevItem=all&item=7040&class=2>La interfaz gráfica de Osmose</a> permite a los usuarios extraer e investigar los problemas de Osmose dentro de una región específica. 
    </figcaption> 
    </div>

5. **Control de calidad automatizado diario a través de Osmose**.

    En [Plataforma Osmose QA](https://wiki.openstreetmap.org/wiki/Osmose) realiza diariamente comprobaciones automatizadas de los datos de la red global, centrándose en:

    * Etiquetado de tensión incoherente
    * Líneas de transmisión aisladas o no conectadas
    * Etiquetado redundante o obsoleto

    Osmose QA tiene ítems y clases, estos pueden ser pensados como categorías con ítems listados dentro de cada categoría. Al ser una herramienta global, Osmose realiza comprobaciones de calidad en muchas capas de los datos OSM más allá de las infraestructuras de energía. Es importante saber qué elementos y cuestiones son de valor para la cartografía de la red de transmisión. 
    
    Esta lista de cuestiones relevantes es la que se facilita en la [Mapa It📍](https://MapYourGrid.org/map-it/) página:

 | Ítem | Clase | Descripción | Resumen |
 | ---- | ----- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
 | 7040 | 1 | Torres o Postes Eléctricos Solitarios | Esta torre seguramente debe estar conectada a una línea eléctrica |
 | | 2 | Línea de transmisión de energía inacabada | La línea termina en el vacío, y debe conectarse a otra línea o a un transformador (`power=`) o a un generador (`power=`). |
 | | 3 | Conexión entre tensiones diferentes | Dos líneas se encuentran en un punto, pero tienen tensiones inconsistentes (`voltage=*`) |
 | | 4 | Si este nodo es una torre o un poste, etiquétalo con `power=`; si no, elimínalo. |
 | | 5 | Falta Torre o Poste Eléctrico | Basado en el espaciamiento de los postes, parece faltar uno en esta línea. |
 | | 6 | Línea de distribución de energía inacabada | La línea de distribución termina en el vacío, y debe conectarse a otra línea de distribución o estructura de energía. |
 | | 7 | Tensión no coincidente de la línea en la subestación | Asegúrese de que la tensión de las líneas coincide con la tensión nominal de la subestación. |

 Estas cuestiones se visualizan directamente en [OpenInfrastructureMap](https://openinframap.org/#2/26/12) que ofrecen a los cartógrafos objetivos claros para mejorar el conjunto de datos. 

6. **Seguimiento estadístico con puntuaciones de salud (en construcción)**.

    Herramientas como [algunas estadísticas](https://stats.now.ohsome.org/) proporcionan información a nivel macro sobre la actividad cartográfica. Ayudan a detectar:

    * Regiones infra cartografiadas o lagunas en las infraestructuras comparando las estadísticas nacionales de longitud de líneas con OpenStreetMap.
    * Patrones de etiquetado inusuales o anomalías en el mapeo
    * Zonas inactivas con datos de cuadrículas antiguos u obsoletos

    El seguimiento basado en hashtags también permite supervisar el rendimiento y evaluar las campañas a lo largo del tiempo y la geografía. Todos estos datos estadísticos, junto con los problemas de osmosis, se utilizan para calcular una puntuación de salud de la red eléctrica. 

7. **Pruebas de integración e interoperabilidad (en construcción)**.

    Rutinariamente probamos lo bien que los datos eléctricos de OSM se integran con sistemas y aplicaciones externas. Esto garantiza que el modelo de datos no sólo es coherente internamente, sino también compatible con los casos de uso del mundo real, incluyendo el análisis de flujo de carga, herramientas de planificación y plataformas de respuesta de emergencia. Probamos el conjunto de datos con otros modelos y marcos de sistemas energéticos abiertos y patentados para verificar la compatibilidad estructural y semántica. La interoperabilidad garantiza que los datos de red basados en OSM puedan adoptarse ampliamente, fomentando la confianza entre usuarios académicos e industriales.

8. **Análisis de sensibilidad (en construcción)**

    Mediante la simulación de cambios en la tensión, la topología o el etiquetado de componentes, medimos la sensibilidad de los resultados derivados (por ejemplo, estimaciones de carga o modelos de fiabilidad) a las variaciones de entrada. Esto ayuda a identificar puntos de datos críticos en los que es esencial una mayor precisión o verificación.

9. **Validación cruzada entre expertos y pares (en construcción)**

    Cartografistas técnicos experimentados y expertos en sistemas energéticos revisan periódicamente los datos, sobre todo en regiones complejas con solapamientos de tensiones, subestaciones o tipos de infraestructuras poco habituales. En combinación con comparaciones cualitativas con estudios de terceros, estadísticas o mapas oficiales de la red eléctrica, estos expertos reúnen todas las percepciones sobre la calidad de los datos. Son capaces de comparar diferentes resultados de validación para aprobar, publicar y controlar la versión de los datos de la red eléctrica. Pueden comparar diferentes resultados de validación para aprobar, liberar y controlar la versión de los datos de la red eléctrica. Esto les permite poner al día a la comunidad sobre cualquier problema importante que se haya detectado en los datos de la red.

10. **Muestra aleatoria asistida por IAI y validación sobre el terreno (en construcción)**.

    Aprovechamos la IA para detectar infraestructuras no cartografiadas a partir de imágenes por satélite y señalar anomalías en los datos existentes. Las muestras aleatorias se validan sobre el terreno a través de socios locales, combinando la detección remota con la verificación sobre el terreno.

Juntas, estas capas de validación, que abarcan el crowdsourcing, la automatización, la revisión por expertos y la IA, hacen de MapYourGrid no sólo una iniciativa cartográfica, sino una infraestructura de conocimiento de calidad garantizada para la transición energética mundial.

