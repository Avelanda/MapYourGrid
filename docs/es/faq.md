<div class="page-headers">
<h1>Preguntas y respuestas</h1>
</div>

He aquí una recopilación de las preguntas más frecuentes que recibimos. 

<div class="starter-kit-buttons">
 <a href="#cuestiones-generales" class="btn btn-secondary"> Cuestiones generales</a>
 <a href="#contribucion-en-openstreetmap" class="btn btn-secondary"> Contribución en OpenStreetMap</a>
 <a href="#mapa-de-la-red-electrica" class="btn btn-secondary"> Mapa de la red eléctrica</a>
</div>

Si tiene más preguntas o consultas, puede ponerse en contacto directamente por <a href="mailto:MapYourGrid@openenergytransition.org" target="_blank" rel="noopener"> correo electrónico</a>

---

## <div class="stradegy-header">Cuestiones generales</div></h3>

### <div class="tools-header">¿Quién es usted? ¿Qué es MapYourGrid?</div>

MapYourGrid es una iniciativa abierta y colaborativa cuyo objetivo es cartografiar las redes eléctricas de todo el mundo, centrándose en las líneas de transmisión de alta tensión, las subestaciones, las centrales eléctricas y los principales consumidores de energía. La iniciativa aporta todos sus datos a [OpenStreetMap](https://www.openstreetmap.org/) para que sea accesible y verificable a escala mundial.

### <div class="tools-header">¿Qué incluye el alcance del proyecto?</div>

Nuestro principal objetivo es cartografiar las redes eléctricas de transmisión, principalmente líneas y cables eléctricos, y conectarlas a los perímetros de las subestaciones. Cartografiamos las líneas de transmisión que unen ciudades. La infraestructura de la red de transmisión es tan grande que puede trazarse y cartografiarse utilizando imágenes de satélite abiertas. Sin embargo, la red de distribución no puede cartografiarse suficientemente bien sólo con imágenes de satélite abiertas y, por tanto, requiere una estrecha colaboración con las comunidades y autoridades locales. Por esta razón, actualmente no es nuestro principal objetivo.

### <div class="tools-header">¿No resolverá pronto todo esto la IA?</div>
Para garantizar la calidad de los datos, cada punto de OpenStreetMap debe ser establecido y validado por un ser humano. De este modo se evita que OpenStreetMap se inunde de datos sintéticos no validados que, a largo plazo, no servirían como verdad sobre el terreno. Además, actualmente no existen métodos de detección que permitan identificar con precisión las torres de alta tensión y el trazado de las líneas de transmisión utilizando únicamente los satélites RGB clásicos. La cartografía de redes es una tarea que requiere un alto grado de experiencia y comprensión contextual. Debido a la gran relevancia de estos datos, tampoco se recomienda la generación estocástica de la cuadrícula mediante IA. Para validar estos datos, los especialistas deben realizar un mapeo activo de la cuadrícula. Sin embargo, actualmente estamos evaluando el uso de [detección de subestaciones de código abierto basada en datos de Sentinel 2](https://github.com/Lindsay-Lab/substation-seg) para proporcionar otra capa de pistas de subestaciones para los mapeadores. 

### <div class="tools-header">¿La publicación de estos datos supone un riesgo para la seguridad?</div>

No, la publicación de datos de redes a través de MapYourGrid no aumenta significativamente los riesgos de seguridad. Esta preocupación es comprensible porque las redes eléctricas son infraestructuras críticas. Sin embargo, múltiples estudios y prácticas del mundo real demuestran que los datos de red abiertos no elevan los niveles de amenaza, por varias razones clave:

* Gran parte de la red ya es visible y está documentada. Las líneas de transmisión son fácilmente observables en imágenes por satélite y por cualquiera que esté sobre el terreno. La mayoría de las subestaciones ya están en plataformas como Google Maps. Las principales instituciones, incluidas las agencias gubernamentales, han compartido públicamente datos detallados de la red durante décadas.

* Los actores sofisticados ya disponen de mejores datos. Los actores maliciosos o patrocinados por el Estado no confían en OpenStreetMap. Tienen acceso a herramientas más avanzadas, imágenes comerciales o incluso canales internos o cibernéticos. Bloquear el acceso público no impide su actividad, pero dificulta el uso legítimo.

* Los datos abiertos ayudan más a los defensores que a los atacantes. La transparencia permite a empresas de servicios públicos, investigadores y planificadores detectar puntos débiles, modelar fallos y mejorar la resistencia. El acceso público a los datos de encaminamiento favorece la planificación transfronteriza y una respuesta de emergencia más rápida.

* "La seguridad a través de la oscuridad" no funciona. Ocultar detalles de la infraestructura suele impedir la innovación y la mitigación de riesgos. Como señala el Instituto Nacional de Normas y Tecnología de Estados Unidos (NIST), la oscuridad no es una estrategia de seguridad fiable.

MapYourGrid se basa en una década de cartografía de infraestructuras públicas, incluyendo comparaciones globales que muestran la alineación con los conjuntos de datos gubernamentales. Nuestra misión es democratizar el acceso a la resiliencia, la transparencia y la innovación, no exponer nada que los adversarios no sepan ya. Nuestro [Buenas prácticas de mapeo](mapping-good-practices.md) describe los valores compartidos, las responsabilidades y las prácticas seguras para las personas y organizaciones que participan en actividades de cartografía de redes en OpenStreetMap. Está diseñado para salvaguardar a las comunidades, promover la transparencia y proteger las zonas sensibles, al tiempo que permite el uso de datos abiertos para el desarrollo global y la resiliencia energética.

Más información sobre la cartografía responsable de la red y la comprensión de los riesgos y su mitigación en nuestro [Página de impacto](impact.md/#cartografia-responsable-de-la-red-comprender-los-riesgos-y-su-mitigacion).

### <div class="tools-header">¿Cómo se garantiza la calidad y validación de los datos?</div>

MapYourGrid se basa en el principio de OpenStreetMap de [verificabilidad](https://wiki.openstreetmap.org/wiki/Verifiability)Esto significa que todos los datos deben ser observables y confirmables por terceros. La calidad se garantiza mediante:

* Controles automatizados con herramientas como [Validador JOSM](https://josm.openstreetmap.de/wiki/Help/Dialog/Validator) y [Osmosis](https://wiki.openstreetmap.org/wiki/Osmose).
* Directrices visuales y de etiquetado para una cartografía coherente.
* Revisiones humanas opcionales a través de la etiqueta `#MapYourGrid` en OSM.
* Herramientas de análisis como [algunas estadísticas](https://stats.now.ohsome.org/) para detectar lagunas o anomalías.
* Validación por expertos y controles de muestras aleatorias.

Juntos, estos métodos ayudan a mantener un conjunto de datos fiables sobre la red eléctrica de origen colectivo. [Más información sobre garantía de calidad y validación](strategies.md/#garantia-de-calidad-y-validacion).

### <div class="tools-header"> ¿Cuáles son las funciones de los miembros del equipo? </div>

Somos desarrolladores, científicos de datos, expertos en redes eléctricas, cartógrafos y colaboradores de OpenStreetMap. Nuestras funciones abarcan desde el desarrollo de software y el modelado de datos hasta la coordinación de la comunidad y el conocimiento del terreno. El equipo central de MapYourGrid se considera un fertilizante para la comunidad. Tendemos puentes entre individuos y organizaciones, creamos herramientas cartográficas, documentamos estrategias y buenas prácticas y elaboramos materiales de formación. Para poner a prueba nuestro propio material y acumular experiencia, cartografiamos por todo el mundo con el fin de comprender las necesidades de la diversa comunidad.

### <div class="tools-header"> ¿Cuál es el modelo de negocio del proyecto? </div>

MapYourGrid es una iniciativa sin ánimo de lucro financiada por varias organizaciones más pequeñas que utilizan estos datos para otras herramientas de código abierto, facilitando nuevas contribuciones en OSM y ayudando a mantener la calidad de los datos a lo largo del tiempo. 

### <div class="tools-header"> ¿Cuál es la gobernanza de MapYourGrid? </div>

MapYourGrid está dirigido por [Transición Energética Abierta](https://openenergytransition.org/)sin ánimo de lucro, y con el apoyo de [Datactivist](https://datactivist.coop/en/), [Autobús de la selva](https://junglebus.io/en), [Dynartio](https://dynartio.com/) y [Infogeomática](https://www.infrageomatics.com/). Estamos alineados con los valores del ecosistema de OpenStreetMap y actuamos en favor de una gobernanza compartida del proyecto dentro de la comunidad. La creación de un consejo de gobierno oficial de MapYourGrid está prevista para finales de 2025. ¿Quieres unirte o apoyarnos? Contacto <a href="mailto:MapYourGrid@openenergytransition.org" target="_blank" rel="noopener">por correo electrónico</a> 

### <div class="tools-header"> ¿Por qué damos prioridad a las líneas de transmisión? </div>

La forma más rápida de ampliar nuestro impacto ahora mismo es cartografiar las redes eléctricas de transmisión. Más adelante se añadirán muchos aspectos, como las subestaciones de la red de distribución, para que los datos sean más detallados y procesables.

### <div class="tools-header"> ¿Por qué lo haces? ¿Por qué es importante? </div>

Disponer de datos transparentes y precisos sobre las infraestructuras energéticas es esencial para la resiliencia climática, la planificación energética y la equidad. En los países de renta baja y media, la mayoría de estos datos están bloqueados o faltan. Nuestro objetivo es cambiar esta situación. Lea más sobre el impacto que estamos creando en nuestro [Impacto](impact.md) página. 

### <div class="tools-header"> ¿Para quién lo hace? ¿Quién utiliza estos datos? </div>

Todo el mundo puede utilizar los datos y herramientas que estamos creando.

En particular, los datos abiertos de la red de transmisión pueden ser utilizados por gobiernos, empresas de servicios públicos, modeladores energéticos, investigadores, empresas y organizaciones sin ánimo de lucro, particulares, etc. Si está interesado en ejemplos concretos de cómo se están utilizando los datos de red de OSM, consulte la sección dedicada en nuestro [Impacto](https://mapyourgrid.org/impact/#who-is-using-openstreetmap-grid-data) página.

### <div class="tools-header"> ¿Cómo contribuye este proyecto a la descarbonización? </div>

La descarbonización se basa en energías renovables como la eólica, la solar, la hidráulica, etc. Estas tecnologías pueden requerir un uso intensivo de la tierra y grandes extensiones de terreno para los emplazamientos de generación. Estos emplazamientos suelen estar lejos de donde se consume realmente la electricidad: ciudades, industrias y hogares. Para integrar las energías renovables a gran escala, los planificadores energéticos necesitan saber dónde pueden conectarse nuevas líneas de generación a la demanda, dónde debe reforzarse la red y dónde la inversión tendrá el mayor impacto.

Así, al cartografiar las infraestructuras actuales en un formato coherente y global, pretendemos permitir una mejor planificación del despliegue de las renovables, las estrategias de electrificación y las decisiones de inversión a largo plazo, esenciales para la descarbonización.

### <div class="tools-header"> ¿Qué países abarca el proyecto? </div>

Nuestro proyecto es global. En la actualidad, nos centramos principalmente en los países de renta baja y media, donde los datos públicos pueden ser escasos y las necesidades de planificación energética son elevadas. 

### <div class="tools-header"> ¿Por qué necesitamos cartografiar la red eléctrica? ¿No tienen ya los gobiernos y/o las empresas de servicios públicos mapas que muestran exactamente dónde están sus infraestructuras?</div>

No siempre. En muchos países de renta baja y media, simplemente no existen mapas de cuadrículas actualizados y accesibles. Incluso en algunas regiones de renta alta, la información puede estar fragmentada, anticuada o ser de difícil acceso.

Para las empresas de servicios públicos y las administraciones públicas, la elaboración de mapas exhaustivos suele ser un gran reto. Los datos están dispersos entre múltiples agentes privados y públicos, y muchas organizaciones siguen dependiendo de costosos conjuntos de datos patentados solo para hacerse una idea básica de su propia infraestructura.

Por eso son tan importantes los datos abiertos y normalizados de la red de transporte. Al hacer accesible la red a través de OpenStreetMap, se crea una referencia global y coherente que cualquiera puede utilizar, desde responsables políticos e investigadores hasta planificadores locales y ciudadanos.

### <div class="tools-header"> ¿Cómo se cartografían todas esas redes eléctricas? </div>

Utilizamos diversas fuentes, principalmente imágenes por satélite, así como otros datos abiertos, artículos académicos e información obtenida por crowdsourcing de OpenStreetMap, para mejorar nuestros conocimientos. 
También estamos creando una cadena de herramientas 100% de código abierto para cartografiar la red eléctrica mundial:

1. [OpenStreetMap](https://www.openstreetmap.org/) como base de datos.
2. [JOSM](https://josm.openstreetmap.de/) como editor de OpenStreetMap.
3. [Mapa de infraestructuras abiertas](https://openinframap.org/#2/26/12) para la visualización de datos de infraestructuras de servicios públicos procedentes de OSM.
4. [Osmosis](https://wiki.openstreetmap.org/wiki/Osmose) para la validación y la garantía de calidad.
5. [mkdocs material](https://squidfunk.github.io/mkdocs-material) para el sitio web.
6. [Folleto](https://github.com/Leaflet/Leaflet) para ver el mapa interactivo.

Más información sobre todas las herramientas y repositorios que hemos integrado en [GitHub - open-energy-transition/MapYourGrid: Capacitamos a individuos, comunidades y naciones de todo el mundo para mapear la red eléctrica.](https://github.com/open-energy-transition/MapYourGrid)

Estamos trabajando activamente en el desarrollo y la integración de otras herramientas de código abierto existentes para mejorar la cadena de herramientas.

### <div class="tools-header">Ya existen muchos Grid Datasets: ¿por qué no utilizarlos? </div>

Es cierto que existen muchos conjuntos de datos de cuadrículas, pero rara vez están armonizados y la mayoría se ocultan tras licencias de propiedad, lo que significa que no pueden reutilizarse libremente sin permiso explícito.

OpenStreetMap proporciona datos de cuadrículas de alta calidad y coherencia global que siguen estándares de datos comunes. Esta coherencia es esencial a la hora de modelizar sistemas energéticos a gran escala en distintas regiones.

Además, los datos de OpenStreetMap se publican bajo la Licencia de Base de Datos Abierta (ODbL), que permite compartirlos, adaptarlos y construir a partir de ellos, siempre que se cite su procedencia, se compartan igualmente los datos derivados y todo permanezca abierto.

### <div class="tools-header">¿No sería más fácil si los gobiernos y/o las empresas de servicios públicos integraran sus datos de red en OSM, en lugar de volver a cartografiar todo a mano? </div>

OpenStreetMap no es un simple repositorio de datos en el que se puedan cargar archivos. Por lo general, la comunidad desaconseja las importaciones a gran escala debido a la preocupación por la calidad de los datos, las restricciones de las licencias y el mantenimiento a largo plazo.

Cada elemento de OSM debe ser verificable, localizado con precisión e integrado de forma coherente con las características cartográficas existentes. Para ello es necesaria la verificación humana, de ahí la importancia del papel de los cartógrafos.

Dicho esto, las empresas de servicios públicos y los gobiernos son bienvenidos a colaborar: si sus conjuntos de datos son compatibles con la licencia y las normas de OSM, pueden ser utilizados como material de referencia por los voluntarios, ayudando a acelerar el proceso de cartografía al tiempo que se garantiza que los datos siguen siendo abiertos, precisos y mantenidos por la comunidad.

### <div class="tools-header">¿Por qué harían esto los voluntarios individuales? </div>

Los voluntarios de OpenStreetMap llevan casi 20 años cartografiando la red eléctrica mundial. Gracias a millones de colaboradores, alrededor del 70% de la red mundial ya está en OSM. MapYourGrid está aquí para apoyar a la comunidad con herramientas aún mejores y documentación más clara para ayudar a completar el 30% restante, que es la parte más difícil.

---

## <div class="stradegy-header">Contribución en OpenStreetMap </div></h3>

### <div class="tools-header"> ¿Cómo puedo participar en el proyecto? </div>

Empieza por contribuir a OpenStreetMap (OSM). Además, puedes participar en las comunidades locales de OSM, unirte a nuestros talleres gratuitos de cartografía y conectar con nosotros en [Discordia](https://discord.gg/a5znpdFWfD). 

### <div class="tools-header"> ¿Qué competencias necesito para contribuir? </div>

Para la cartografía general, se necesitan conocimientos básicos de cartografía y comprensión de OSM, así como capacidad para leer y cartografiar imágenes por satélite. Se valorarán mucho los conocimientos locales o lingüísticos sobre el país o la zona que se desee cartografiar. 

Si es desarrollador, también puede ayudarnos a mejorar las herramientas de cartografía y evaluación de la calidad. 

Comprender el contexto energético y la composición de la red eléctrica es una baza importante que puede adquirirse. 

También organizamos sesiones de formación periódicas para ayudar a los colaboradores a desarrollar sus capacidades y sentirse más seguros.

### <div class="tools-header"> Tengo información sobre la red eléctrica de mi país, pero no estoy seguro de que sean datos abiertos. ¿Puedo utilizarla para cartografiar la red? </div>

Comprueba la credibilidad de la fuente y los términos de la licencia antes de utilizarla como fuente en OpenStreetMap. Algunas fuentes pueden ser inexactas, obsoletas o incompatibles con la licencia de OSM. Siempre que sea posible, es mejor pedir permiso explícito al proveedor de los datos para utilizarlos o hacer referencia a ellos, especialmente si la licencia no está clara. En caso de duda, hable con la comunidad local de OSM antes de utilizar o hacer referencia a datos externos. 

### <div class="tools-header"> He encontrado datos abiertos sobre mi país. ¿Cómo puedo compartirlos?</div>

Consulte la [Página del país en OSM Wiki](https://wiki.openstreetmap.org/wiki/Power_networks#Local_projects). Hemos informado de todas las fuentes de datos de las que disponemos. Ayúdenos a enriquecer y verificar la información existente.

### <div class="tools-header"> ¿Son siempre fiables los datos abiertos? </div>

La calidad de los datos abiertos varía. Compruébalos siempre que sea posible. Si eres local, la verificación sobre el terreno puede ser una buena forma de hacerlo.

### <div class="tools-header"> ¿Puedo importar cualquier dato a OpenStreetMap? </div>

Las importaciones a granel están totalmente desaconsejadas y deben seguir las estrictas directrices de OSM. Póngase en contacto con sus comunidades locales de OSM antes de realizar importaciones. 

### <div class="tools-header"> ¿Cuál es la licencia de los datos que está creando y utilizando?</div>

Estamos co-creando y utilizando datos de OpenStreetMap. Los datos de OSM están bajo la licencia Open DataBase Licence (OBDL) sobre la que puedes encontrar más información y fuentes oficiales aquí : [Licencia de base de datos abierta - OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Open_Database_License)

El sitio web, la documentación y las herramientas de MapYourGrid están bajo licencia [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/).

### <div class="tools-header"> ¿Puedo reutilizar los datos de OpenStreetMap?</div>

Sí, siempre y cuando acredites a OSM adecuadamente. Ten en cuenta que si mejoras los datos de OSM, necesitas publicar las mejoras con la licencia apropiada para que puedan beneficiar a la comunidad OSM. Para obtener más información, consulte las directrices de atribución de la Fundación OSM en la página [Sitio web de la Fundación OSM](https://osmfoundation.org/wiki/Licence/Attribution_Guidelines).

### <div class="tools-header"> ¿Qué hace con los datos que ha creado? ¿A qué producto alimentan los datos?</div>

Todo lo cartografiado va directamente a OpenStreetMap. A partir de ahí, los datos se utilizan en herramientas abiertas como [Mapa de infraestructuras abiertas](https://openinframap.org/#2/26/12) y marcos de modelización de código abierto como [PyPSA](https://pypsa.org/#home) para la planificación de sistemas energéticos a gran escala.

El objetivo de la creación de estos datos no es alimentar un único producto, sino apoyar la planificación local y regional, proporcionar una base sólida para la investigación científica y alimentar herramientas de código abierto que faciliten la contribución y ayuden a mantener la calidad de los datos a lo largo del tiempo.

### <div class="tools-header"> ¿Qué son iD, JOSM y Osmose de los que hablas? </div>

Son herramientas para editar y validar datos en OSM:

* [iD](https://openstreetmap.org): editor basado en navegador y fácil de usar para principiantes. Es el editor disponible cuando haces clic en "editar" en el sitio web de OSM. 
* [JOSM](https://josm.openstreetmap.de/)Editor avanzado de OpenStreetMap.
* [Osmosis](https://osmose.openstreetmap.fr)herramienta de control de calidad que detecta problemas con los datos de OpenStreetMap.

### <div class="tools-header"> ¿Qué es un Changeset? </div>

Es un grupo de ediciones enviadas a OSM a la vez. También incluye la hora y el propósito de tus ediciones. Es mejor mantener los conjuntos de cambios pequeños y enfocados. Por ejemplo, limite sus ediciones a un área geográfica o a un tipo de objeto (por ejemplo, líneas eléctricas o subestaciones). De este modo, a los demás les resultará más fácil comprender y revisar su trabajo. También ayuda a evitar conflictos con otros colaboradores que editen la misma zona.

### <div class="tools-header"> ¿Cómo acredito mis contribuciones en OpenStreetMap para MapYourGrid?</div>

Añade el hashtag **#MapYourGrid** en el campo de comentarios de tu changeset. Esto nos ayuda a seguir y mostrar el trabajo de la comunidad.

### <div class="tools-header"> ¿Quién corrige los errores que pueda cometer durante el mapeo? </div>

OpenStreetMap se basa en la edición y revisión por parte de la comunidad. No todas las ediciones son revisadas sistemáticamente por otro colaborador, por lo que se espera que los colaboradores actúen con responsabilidad. Pueden producirse errores, pero la comunidad OSM confía en que todos los colaboradores cartografíen más allá de su nivel de conocimientos y habilidades, para no crear trabajo extra a otros miembros de la comunidad.

### <div class="tools-header"> ¿Cómo sabré si he cometido errores? </div>

Antes de subir tus ediciones en JOSM, puedes obtener errores de validación y advertencias, con una breve explicación sobre cuál es el problema. Deberías resolver la mayoría de los problemas (si no todos) antes de finalizar tu subida a OSM. 

Herramientas OSM como [Osmosis](https://osmose.openstreetmap.fr/) señalar posibles errores. Es posible que reciba sugerencias para corregirlos o revisarlos posteriormente.

---

## <div class="stradegy-header">Mapa de la red eléctrica </div></h3>

### <div class="tools-header"> ¿Cómo puedo saber la tensión de una línea eléctrica en mi país? </div>

Empiece por buscar conjuntos de datos oficiales publicados por el operador nacional de la red. Algunos países ofrecen mapas de tensión o informes técnicos como datos abiertos.

Si los datos no están a disposición del público, considere la posibilidad de ponerse en contacto con el operador nacional o la autoridad reguladora para solicitar más información.

Investigue sobre el terreno, pero siga siempre unas normas de seguridad estrictas. No te acerques nunca a infraestructuras de alta tensión ni entres en zonas restringidas.

Pregunte a expertos locales. Los ingenieros eléctricos, técnicos o personas que trabajen en el sector energético pueden proporcionar información fiable basada en las normas y prácticas locales.

### <div class="tools-header"> ¿Puedo obtener una lista de todas las subestaciones de mi país para comprobar si faltan algunas en OSM? </div>

Puedes empezar investigando las fuentes en línea existentes, especialmente los datos abiertos publicados por el operador de la red eléctrica de tu país. Si no encuentra lo que busca, póngase en contacto directamente con el operador para solicitar la publicación de esta información como datos abiertos. Dependiendo de la legislación nacional, los precedentes legales y las prácticas locales, esto puede ser posible. Asegúrate siempre de comprobar las licencias y condiciones de uso antes de utilizar o compartir cualquier dato.

### <div class="tools-header"> ¿Qué detalles y atributos espera que asignen los contribuyentes?</div>

Los elementos más importantes son las líneas, las torres, las subestaciones perimetrales y las centrales eléctricas.

Además, entre los atributos clave de las líneas eléctricas figuran la tensión, el número de cables, los circuitos, los hilos por haz y el operador. 

Puede encontrar una amplia documentación sobre los atributos que se deben utilizar para las funciones de potencia en la página [Categoría de la wiki de OpenStreetMap:Directrices sobre infraestructuras eléctricas](https://wiki.openstreetmap.org/wiki/Category:Power_Infrastructure_Guidelines).

### <div class="tools-header"> ¿Cuánto tiempo se necesita para contribuir?</div>

Puedes hacer ediciones rápidas en cuestión de minutos (añadir una torre de alta tensión aquí o allá, añadir atributos en infraestructuras ya cartografiadas). Sin embargo, si quieres cartografiar en detalle, necesitarás más tiempo y un conocimiento más profundo del asunto, así que considéralo una contribución a largo plazo.

### <div class="tools-header"> Mientras estoy en el campo, ¿necesito acercarme a la infraestructura eléctrica para cartografiarla? </div>

No, nunca te acerques a infraestructuras de alta tensión como subestaciones, líneas o torres de alta tensión. Pueden ser extremadamente peligrosas y entrañar riesgos de caída de objetos o personas, incendio, exposición a tóxicos, electrocución e incluso muerte. Obsérvalas siempre desde una distancia segura y nunca invadas propiedad privada o zonas restringidas bajo ninguna circunstancia.

### <div class="tools-header"> ¿Existen aplicaciones que pueda utilizar mientras hago topografía sobre el terreno? </div>

Sí, prueba [Vespucci](https://vespucci.io/) (Android), [GoMap](https://apps.apple.com/us/app/go-map/id592990211) (iOS), [Panoramax](https://gitlab.com/panoramax/clients/mobile-app/) o [Padre](https://gitlab.com/ravenfeld/baba) para capturar fotos geolocalizadas. [CalleCompleta](https://streetcomplete.app/) ofrece sencillas misiones de mapeado sobre el terreno. Aunque no incluye tareas relacionadas con la energía, puedes utilizarla para dejar notas en el mapa. Por ejemplo, puedes marcar una torre de alta tensión o una subestación para editarlas posteriormente desde una herramienta de escritorio. [Mapas ecológicos](https://organicmaps.app/) o [CoMaps](https://www.comaps.app/) Las aplicaciones móviles también pueden utilizarse para dejar notas en el mapa. No olvides añadir #MapYourGrid en tu nota de texto.
