<div class="page-headers">
<h1>Impacto </h1>
</div>

El valor único de OpenStreetMap en la creación de datos de alta calidad para el desarrollo sostenible ha quedado demostrado por múltiples iniciativas en todo el mundo: 

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">

 <a href="https://map.vida.place/public/workspace/a6a89f8a-f472-45b0-8674-fcf6d7b4c7e3" target="_blank">
 <img src="../images/impact/DRE-pakistan.jpg" class="img-border" style="width: 100%;"> </a>
 <figcaption class="image-caption">La planificación energética de 58 países depende directamente de OpenStreetMap <a href="https://map.vida.place/public/workspace/114d1c69-eb81-4e49-8434-0f038854f4a0"> como en este caso Pakistán</a> Haga clic para ampliar.</figcaption>

 <a href="https://pypsa-earth.readthedocs.io/en/latest/index.html" target="_blank">
 <img src="../images/impact/pypsa-earth-india.jpg" class="img-border" style="width: 100%;"> </a>
 <figcaption class="image-caption">El modelo de sistema energético de código abierto PyPSA-Earth utiliza datos de OpenStreetMap para estudiar el futuro de la energía en el mundo. Haz clic para ampliar.</figcaption>
</div> 

1. En [Plataforma mundial de electrificación](https://electrifynow.energydata.info/) y [Atlas de energías renovables distribuidas](https://dre.energydata.info/)desarrollado y utilizado por el Banco Mundial, se emplean para planificar la electrificación y la expansión de las energías renovables en zonas rurales de 58 países. Utilizando las líneas de transmisión, carreteras, edificios y asentamientos de OpenStreetMap, ayuda a identificar a las poblaciones sin conexión a la red e informa sobre la planificación de estrategias de electrificación tanto en red como fuera de ella. gep-onsset, el software de código abierto que hay detrás de Global Electrification Platform, [se basa en gran medida en los datos de la red eléctrica de OpenStreetMap](https://gep-onsset.readthedocs.io/en/latest/GIS%20data%20collection.html#infrastructure).

1. En [Equipo humanitario de OpenStreetMap](https://www.hotosm.org/) proporciona datos geoespaciales abiertos de alta calidad para informar a los responsables de la toma de decisiones durante la respuesta temprana a catástrofes. Más de 419.000 cartógrafos voluntarios han contribuido a esta iniciativa. La plataforma permite la colaboración entre múltiples organizaciones, como proveedores de imágenes por satélite como Maxar y organismos humanitarios como la Cruz Roja. Esta plataforma de colaboración garantiza que las decisiones críticas para salvar vidas se basen en datos rastreables y verificables. Especialmente a medida que aumenta la frecuencia de los fenómenos meteorológicos extremos, los datos precisos sobre la red eléctrica [desempeña un papel clave en la respuesta a catástrofes en el Equipo Humanitario OpenStreetMap](https://github.com/USAFORUNHCRhive/turkana-grid-mapping).

1. El Banco Mundial [EnergyData.info](https://energydata.info/dataset/?q=OpenStreetMap) alberga más de 1.072 conjuntos de datos relacionados con la energía, 533 de los cuales dependen directamente de datos de OpenStreetMap. El Banco Mundial utiliza estos datos para financiar y apoyar proyectos de infraestructuras energéticas en países de renta baja y media, como la ampliación del acceso a la energía, la modernización de los sistemas eléctricos y la promoción de soluciones energéticas limpias. Estos datos se utilizan para crear informes destinados a los responsables de la toma de decisiones, tales como [Minirredes para 500 millones de personas](https://www.esmap.org/sites/default/files/esmap-files/Mini%20Grids%20for%20Half%20a%20Billion%20People%20-%20OKR%20Download%20Version_compressed_MKA.pdf).

## **<div class="tools-header">¿Cómo y por qué se utiliza para la red eléctrica?</div>**

Los datos sobre redes eléctricas de OpenStreetMap son utilizados activamente por operadores de redes, instituciones académicas, organismos gubernamentales, autoridades locales y organizaciones privadas. Estos datos desempeñan un papel crucial en el modelado y la planificación energética, informando tanto el desarrollo de políticas como las decisiones de inversión. 

Estas simulaciones ayudan a evaluar las opciones tecnológicas, el impacto de las políticas y las vías para lograr la plena electrificación, especialmente en los países en desarrollo. Los modelos energéticos son esenciales para avanzar en los objetivos de descarbonización y lograr un desarrollo sostenible. Sin embargo, la eficacia de estos modelos depende en gran medida de la **calidad y exhaustividad de los datos** en los que se basan.

--- 

### Modelización energética 

<div style="float: right; margin: 5px 0 20px 20px; width: 500px; max-width: 100%">
 <a href="https://pypsa-earth.readthedocs.io/en/latest/index.html" target="_blank">
 <img src="../images/impact/data-processing-PyPSA-EUR.png" class="img-border" style="width: 100%;"> </a>
 <figcaption class="image-caption">PyPSA combina líneas de transmisión y subestaciones (izquierda) para formar enlaces y autobuses energéticos más grandes entre distintas regiones (derecha). Fuente de la imagen: <a href="https://pypsa-earth.readthedocs.io/en/latest/index.html" target="_blank">Modelización de la red de alta tensión mediante datos abiertos para
Europa y más allá</a></figcaption> 
</div> 

[PyPSA-Tierra](https://pypsa-earth.readthedocs.io/en/latest/index.html) es el primer modelo energético que permite realizar estudios regionales basados en OpenStreetMap en todo el planeta. Los datos se agrupan en grandes núcleos eléctricos regionales para simplificar el modelo del sistema energético y mejorar la eficiencia computacional. Sin embargo, el potencial energético de regiones enteras se subestima si faltan líneas y subestaciones. Por lo tanto, mejorar el estado actual de los datos de la red eléctrica de OpenStreetMap aumenta significativamente la fiabilidad y eficacia de esta herramienta de planificación para estudios energéticos en [regiones de todo el mundo](https://pypsa-earth.readthedocs.io/en/latest/users_list.html#). El Centro Aeroespacial Alemán está llevando a cabo los primeros intentos de utilizar datos de OpenStreetMap para la modelización energética con el programa [SciGrid](https://www.dlr.de/en/ve/research-and-transfer/projects/project-scigrid) a partir de 2014. Posteriormente se han puesto en marcha proyectos como [OSMoGrid](https://github.com/ie3-institute/OSMoGrid), [GridTool](https://github.com/IEE-TUGraz/GridTool), [osmTGmod](https://github.com/wupperinst/osmTGmod) y [OpenGridMap](https://github.com/opengridmap) han continuado este desarrollo centrándose primero en la red eléctrica alemana.

--- 

### Valorado por las organizaciones internacionales

Organizaciones como el **Banco Mundial** y la **Agencia Internacional de la Energía (AIE)** confían en los datos de OpenStreetMap para sus análisis energéticos regionales y continentales. En muchos casos, OpenStreetMap es la **única fuente disponible** de datos abiertos y accesibles sobre infraestructuras. Poner estos datos a disposición del público añade un considerable **valor social** para la planificación y las transiciones hacia energías limpias, al tiempo que crea **valor económico** para el sector privado:

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <img src="../images/impact/nigeria-osm.jpg" class="img-border" style="width: 100%;"> </a>
 <figcaption class="image-caption"> Más de 240 millones de personas en Nigeria dependen de los datos de la red eléctrica de OpenStreetMap. El sitio <a href="https://pypsa-earth.readthedocs.io/en/latest/index.html" target="_blank">Sitio web nigeriano de SE4ALL</a>del Ministerio Federal de Energía, utiliza OpenStreetMap como fuente principal sobre la red de transporte.</figcaption> 
</div> 

> **Recomendación política clave de la AIE en 2024:**
> "Mejorar la fiabilidad y disponibilidad de los datos para evaluar y gestionar mejor los riesgos de los proyectos de energía limpia en los mercados emergentes y las economías en desarrollo." 
[Cómo alcanzar los objetivos energéticos de la COP28](https://www.iea.org/events/from-taking-stock-to-taking-action-how-to-implement-the-cop28-energy-goals)</br>
--- 
> **Recomendación accionable de la AIE en 2025:**
> "Los responsables políticos, los reguladores y las empresas de servicios públicos deben apoyar las instituciones, los reglamentos, las normas técnicas y las plataformas de colaboración para llegar a un consenso sobre enfoques de planificación eficaces que tengan plenamente en cuenta los cambios en los perfiles de los sistemas eléctricos y sus operaciones. Si se anima a los gestores de redes de transporte a compartir con los reguladores los datos sobre contratación y planificación de la capacidad, se contribuirá aún más a la elaboración de políticas informadas. 
[Construir la futura red de transporte](https://iea.blob.core.windows.net/assets/a688d0f5-a100-447f-91a1-50b7b0d8eaa1/BuildingtheFutureTransmissionGrid.pdf)

--- 

### Las redes de energía determinan nuestro futuro

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <a href="https://iea.blob.core.windows.net/assets/a688d0f5-a100-447f-91a1-50b7b0d8eaa1/BuildingtheFutureTransmissionGrid.pdf" target="_blank">
 <img src="../images/impact/expected-grid-growth.jpg" class="img-border" style="width: 100%;"> </a>
 <figcaption class="image-caption">Ampliar y sustituir las líneas de transmisión es vital para alcanzar los objetivos climáticos mundiales. Para 2050, las economías avanzadas pretenden casi duplicar su capacidad de red, mientras que las emergentes planean triplicarla. <a href="https://iea.blob.core.windows.net/assets/a688d0f5-a100-447f-91a1-50b7b0d8eaa1/BuildingtheFutureTransmissionGrid.pdf">AIE</a>CC BY 4.0. Haga clic para ampliar.</figcaption>
</div> 

Unos datos de infraestructuras fiables y abiertos favorecen directamente la **adopción y el éxito de proyectos de energía limpia** en todo el mundo. Estos proyectos se están acelerando por varias razones fundamentales:

* **Mitigación del cambio climático:** Los combustibles fósiles representan aproximadamente el 70% de las emisiones mundiales de gases de efecto invernadero.
* **Resiliencia:** La energía limpia refuerza la resiliencia frente a los impactos climáticos y los fenómenos meteorológicos extremos.
* **Seguridad energética:** Reducir la dependencia de las importaciones aumenta la independencia energética nacional, especialmente de regiones políticamente inestables u hostiles.

--- 

### Creciente impacto académico

Para evaluar la influencia de los datos de la red eléctrica de OpenStreetMap en la investigación, analizamos Google Scholar en busca de publicaciones que combinaran "OpenStreetMap" con términos como "red eléctrica", "red eléctrica", "renovable" o "modelo energético".

* 10.700 publicaciones desde 2005 incluían combinaciones de estas palabras clave.
* Sólo en el último año se han publicado un total de **2.460 publicaciones**, lo que demuestra el rápido aumento del compromiso académico con los datos de OpenStreetMap y el reconocimiento de su potencial.

## **<div class="tools-header">¿Por qué es importante que estos datos sean abiertos?</div>**

El acceso a datos abiertos y precisos sobre infraestructuras eléctricas es esencial para una planificación, desarrollo y colaboración eficaces, especialmente en el contexto de la transición energética mundial. Los beneficios son de gran alcance, especialmente para los países en desarrollo y las economías emergentes.

### Reducir las lagunas de datos en los países en desarrollo

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <a href="https://ember-energy.org/latest-insights/africa-electricity-data-transparency/" target="_blank">
 <img src="../images/impact/ember-africa.jpg" class="img-border" style="width: 100%;"> </a>
 <figcaption class="image-caption"> <a href="https://iea.blob.core.windows.net/assets/a688d0f5-a100-447f-91a1-50b7b0d8eaa1/BuildingtheFutureTransmissionGrid.pdf" target="_blank"> Ember - Transparencia de los datos eléctricos en África 2025 </a>- Haga clic para ampliar.</figcaption>
</div> 

En muchos países de renta baja y media, los datos sobre infraestructuras eléctricas están **desactualizados, incompletos o fragmentados**. Esto supone un obstáculo importante para los gobiernos, las empresas de servicios públicos y los planificadores. Incluso en los países de renta alta, aunque los datos pueden ser más completos, a menudo **no están a disposición del público** o están limitados por licencias restrictivas. Esto dificulta la transparencia y la capacidad de colaborar o validar resultados.

Los datos abiertos garantizan que:

* La planificación de infraestructuras es **más integradora y rentable**.
* Los conjuntos de datos se pueden **comprobar, reutilizar y mejorar** en colaboración.
* Los responsables políticos y los planificadores disponen de **una base fiable** para la toma de decisiones.

--- 

### Transparencia, trazabilidad y confianza pública

La metodología cartográfica única de OpenStreetMap, que no puede ser reproducida por servicios cartográficos propietarios que utilizan métodos cerrados, permite la trazabilidad y la [verificabilidad](https://wiki.openstreetmap.org/wiki/Verifiability): 

> "En el fondo, la "verificabilidad" es que todo lo que haces puede ser demostrado como verdadero o falso por otros maperos".

Una planificación transparente, respaldada por datos abiertos, desempeña un papel clave en la creación de **confianza pública**. La investigación ha demostrado que la apertura aumenta la aceptación pública de los proyectos de infraestructuras ([Ciupuliga y Cuppen, 2013](https://www.sciencedirect.com/science/article/abs/pii/S0301421513003601)).

Dado que OpenStreetMap es editable y colaborativo, **las comunidades locales, las ONG y los gobiernos** pueden contribuir directamente. Esto permite colmar lagunas, corregir errores y mejorar la calidad de los datos sobre infraestructuras. Por ejemplo, la iniciativa **YouthMappers** en **Sierra Leona** permitió a estudiantes y organizaciones locales cartografiar la red eléctrica, ayudando a los proveedores de electricidad a reducir los costes de planificación y mejorar el despliegue de infraestructuras ([Charles, 2022](https://link.springer.com/chapter/10.1007/978-3-031-05182-1_11)).

Los datos de la red abierta también sirven para identificar a las comunidades sin conexión a la red que podrían conectarse a las redes nacionales, lo que ayuda a orientar las intervenciones y las inversiones ([Arderne et al., 2020](https://www.nature.com/articles/s41597-019-0347-4)).

--- 

### Ahorro económico en comparación con los conjuntos de datos patentados 

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
 <a href="../images/impact/HILFD-savingspdf.png" target="_blank">
 <img src="../images/impact/HILFD-savingspdf.png" class="img-border" style="width: 100%;"> </a>
 <figcaption class="image-caption">Documento de la Fundación para la Creación de Datos sobre Infraestructuras de Energía Eléctrica a partir de Fuentes Abiertas. Haga clic para ampliar.</figcaption>
</div> 

Los datos de OpenStreetMap han permitido al Gobierno y a las autoridades locales crear conjuntos de datos de alta calidad sin tener que pagar por los caros datos patentados. Por ejemplo, el Departamento de Energía de EE.UU. y sus socios han creado los "Datos de Infraestructura de Energía Eléctrica" utilizando datos de código abierto, lo que supuso un **"ahorro estimado del 65% (~2 millones de dólares) respecto a los conjuntos de datos propietarios "** ([Singh et al, 2023](https://www.energy.gov/sites/default/files/2023-01/poster-%20Creating%20Foundation%20Electric%20Energy%20Infrastructure%20Data%20from%20Open-Sources.pdf)).

--- 

### Ejemplos de países de renta alta
En la mayoría de los países desarrollados, la publicación de conjuntos de datos abiertos de alta resolución sobre la red de transporte es una práctica habitual desde hace más de una década. Por ejemplo:

* [**ENTSO-E](https://www.entsoe.eu/data/map/) proporciona un **Mapa del Sistema de Transmisión** a escala europea con datos de infraestructura georreferenciados.
* El operador de red francés **RTE** publica su topología de red, incluidos **datos de series cronológicas de 5 minutos de resolución** sobre el funcionamiento de la red ([RTE en GitHub](https://github.com/rte-france/structural-french-grid-data-with-detailed-topology-time-series)).
* Enedis, el operador del sistema de distribución francés comprometido con los Datos Abiertos desde 2015, es [uniendo fuerzas con OpenStreetMap Francia](https://www.enedis.fr/presse/open-data-enedis-participe-un-projet-collaboratif-mondial-dechange-de-donnees) para facilitar los datos de su red y fomentar el crowdsourcing.
* Para encontrar más conjuntos de datos abiertos sobre la red eléctrica publicados por las autoridades nacionales o los operadores de la red eléctrica, consulte nuestra sección [elaboró una lista](https://github.com/open-energy-transition/Awesome-Electric-Grid-Mapping) con más de 150 mapas.

<div style="float: right; margin: -25px 0 5px 50px; width: 350px;">
 <a href="../images/homeland-osm.png" target="_blank">
 <img src="../images/homeland-osm.png" class="img-border float-right" style="width: 400px;">
 </a>
 <figcaption class="image-caption">
 La comparación de los datos del nivel de base de la infraestructura nacional de EE.UU. (líneas grises) con los datos de transmisión de OpenStreetMap (líneas verdes) muestra una resolución espacial coincidente. Haga clic para ampliar.
 </figcaption>
</div>

En Estados Unidos, el Departamento de Seguridad Nacional y otros organismos publican datos de la red nacional de transporte para apoyar **la respuesta a emergencias, el desarrollo de políticas y la planificación económica**. Estos conjuntos de datos abiertos se remontan a la legislación de los años 90 que pretendía mejorar el intercambio de datos geoespaciales ([fuente](https://www.govinfo.gov/content/pkg/WCPD-1994-04-18/pdf/WCPD-1994-04-18-Pg779.pdf)). Dentro de este conjunto de datos, el 24% de las líneas de transmisión estadounidenses declaran OpenStreetMap como fuente principal.

En [Datos básicos sobre infraestructuras nacionales](https://resilience.climate.gov/datasets/fedmaps::u-s-electric-power-transmission-lines/explore?location=38.846475%2C-76.984997%2C8.86) ha mostrado una **fuerte alineación** con los datos de OpenStreetMap, demostrando cómo las contribuciones abiertas pueden igualar a los conjuntos de datos oficiales en cobertura y precisión.

--- 

## **<div class="tools-header">¿Quién utiliza los datos de cuadrículas de OpenStreetMap?</div>**

¿Cómo influye la cartografía? Cuando se cartografían torres, subestaciones y centrales eléctricas en OpenStreetMap, se añaden datos valiosos que utilizan muchas entidades diferentes. A continuación se ofrece una lista de organizaciones y proyectos que han tenido un impacto y han utilizado estos datos. <br> 

Descargo de responsabilidad: Estas organizaciones no están afiliadas a MapYourGrid ni la respaldan. Todos los logotipos y marcas son propiedad de sus respectivos dueños. El uso que aquí se hace es únicamente con fines informativos, para identificar a las organizaciones que utilizan datos de OpenStreetMap.

¡**Agencia Internacional de la Energía** ![IEA logo](../images/impact/International-energy-agency-logo.png){width=30px} 
??? "Observatorio de la Energía y la Inteligencia Artificial (Click Me)"
 
 [**Enlace al sitio web](https://www.iea.org/data-and-statistics/data-tools/energy-and-ai-observatory)
 
 ![mapa](../images/impact/powerandai.jpg){: .img-border }
 
??? "Mapa Interactivo de Perspectivas Energéticas de América Latina (Click Me)"
 
 [**Enlace** - Mapa interactivo del panorama energético de América Latina (enlace)](https://www.iea.org/data-and-statistics/data-tools/latin-america-energy-outlook-interactive-map)
 
 ![mapa](../images/impact/iea-latinmap.jpg){: .img-border }

**Departamento de Seguridad Nacional de EE.UU.[Logo US dep](../images/impact/us-homeland.png){width=30px} 
??? "Datos a nivel de la Fundación de Infraestructuras Nacionales (HIFLD) (Click Me)"
 
 [**Enlace al sitio web](https://hifld-geoplatform.hub.arcgis.com/datasets/3486fb60feb2454c99232248fdf624ec_0/explore)
 
 ![mapa](../images/impact/HILFD-JOSM.png){: .img-border }

**Banco Mundial[Logotipo del Banco Mundial](../images/impact/worldbanklogo.jpg){width=70px} 
??? "Explorador de redes eléctricas de África (Click Me)"
 
 [**Enlace** - Explorador de redes eléctricas en África (enlace)](https://africagrid.energydata.info/)
 
 ![mapa](../images/impact/africa_grid_explorer.jpg){: .img-border }

¡**PyPSA-Tierra** ![PyPSA-Tierra](../images/impact/pypsa-earth-logo.png){: width=70px} ¡**+** **PyPSA-Eur** ![PyPSA-Eur](../images/impact/pypsa-eur-logo.jpg){: width=30px}
??? "PyPSA-Earth y Europa utilizan datos de OpenStreetMap para estudios de sistemas energéticos en todo el mundo. (Click Me)"
 
 [**Enlace al sitio web**)](https://pypsa-earth.readthedocs.io/)
 
 ![mapa](../images/impact/pypsa-earth.jpg){: .img-border }

**¡Enedis![Enedis](../images/impact/enedis-logo.png){width=70px} 
??? "La empresa francesa de servicios públicos Enedis, que gestiona la red de distribución de electricidad, cartografió postes y subestaciones eléctricas con la ayuda de una sólida comunidad local de OpenStreetMap. (Haz clic)"
 
 [**Enlace al sitio web](https://enedis.openstreetmap.fr/)
 
 ![mapa](../images/impact/enedis-osm.png){: .img-border }

**Observatorio Mundial de las Energías Renovables[Enedis](../images/impact/ms-logo.png){width=70px} 
??? "El Observatorio Mundial de las Energías Renovables cartografía y mide las instalaciones de energías renovables y sus capacidades estimadas a nivel subnacional, nacional y mundial. El aprendizaje automático que subyace al proceso de detección se entrena principalmente utilizando datos de OpenStreetMap. (Haz clic)"
 
 [**Enlace al sitio web](https://www.globalrenewableswatch.org/)
 
 ![mapa](../images/renewable-watch.png){: .img-border }
 
**CONAHCYT (Gobierno de Mexico)** ![CONAHCYT logo](../images/impact/conahcyt.png){width=70px} 
??? "Mapa del Sistema Eléctrico Nacional (Click Me)"
 
 [**Enlace al sitio web](https://energia.conacyt.mx/planeas/electricidad/sistema-electrico-nacional)
 
 ![mapa](../images/impact/mexicogov-map.png){: .img-border }
 
**¡Comisión Europea - Centro Común de Investigación** ![EUC logo](../images/impact/euc-logo.jpg){width=40px} 
??? "Plataforma de Conocimiento de África (Click Me)"
 
 [**Enlace al sitio web](https://africa-knowledge-platform.ec.europa.eu/explore_maps)
 
 ![mapa](../images/impact/africa-euc.png){: .img-border }

 **Más información**
 - Los datos de la red eléctrica de la imagen son una mezcla de datos del Banco Mundial y OpenStreetMap 
 
**¡IRENA**![GWA logo](../images/impact/irenalogo.jpg){width=55px} 
??? "Atlas Global de Energías Renovables (Click Me)"
 
 [**Enlace al sitio web](https://globalatlas.irena.org/workspace)
 
 ![mapa](../images/impact/irenaatlas.png){: .img-border }
 
**Atlas eólico mundial[GWA logo](../images/impact/globalwindatlaslogo.jpg){width=15px} 
??? "Atlas Eólico Global (Click Me)"
 
 [**Enlace al sitio web](https://globalwindatlas.info/en/)
 
 ![mapa](../images/impact/globalwindatlas.jpg){: .img-border }

¡**Fraunhofer ISE** ![Logotipo de Fraunhofer](../images/impact/fraunhoferlogo.jpg){width=45px} 
??? "Gráficos de energía (Click Me)"
 
 [**Enlace al sitio web](https://www.energy-charts.info/map/map.htm?l=en&c=DE&country=DE&lines=1110000&pp-source=bnetza&pp-bitmap=none)
 
 ![mapa](../images/impact/fraunhofermap.jpg){: .img-border }

¡**ESMAP, IFC, VIDA** ![ESMAP](../images/impact/ESMAP-logo.svg)¡{width=45px} ![IFC](../images/impact/IFC-logo.svg)¡{width=65px} ![VIDA](../images/impact/vida-logo.jpg){width=45px}
??? "Atlas de Energías Renovables Distribuidas (ERD) (Click Me)"
 
 [**Enlace al sitio web](https://dre.energydata.info/)
 
 ![mapa](../images/impact/DRE-atlas.jpg){: .img-border }

**¡GridRaven![GridRaven](../images/impact/raven.png){width=15px} 
??? "Clasificaciones de línea dinámicas con previsión meteorológica de precisión (Click Me)"
 
 [**Enlace al sitio web](https://claw.gridraven.com/world)
 
 ![mapa](../images/impact/GridRaven.jpg){: .img-border }

¡**windPRO** ![windPRO](../images/impact/Windpro_v2_rgb.png){width=15px}
??? "windPRO es un estándar del sector para el diseño, la planificación y la evaluación de proyectos de energía eólica y solar. (Hágame clic)"
 
 [**Enlace al sitio web](https://help.emd.dk/mediawiki/index.php/EMD_Electrical_Grid_Map)
 
 ![mapa](../images/impact/WindPro.jpg){: .img-border } 

**¡ETAP** ![etap](../images/impact/etap.jpg){width=25px}
??? "ETAP® ofrece soluciones de software y hardware líderes en el mercado que cubren todas las fases del ciclo de vida de los sistemas eléctricos para servicios públicos, infraestructuras, industrias y edificios. (Haga clic aquí)"
 
 [**Link to website**](https://etap.com/product/gis-for-electric)
 
 ![map](../images/impact/etap-osm.jpg){: .img-border } 

**¡GlitreNett![glitrenett](../images/impact/GlitreNett.svg){width=40px}
??? "DataArena pretende informar y facilitar información sobre el estado de la capacidad de la red eléctrica de Noruega. (Click Me)" 
 
 [DataArena intends to inform and provide information about the status of the Norway electrical grid capacity.](https://etap.com/product/gis-for-electric)
 
 ![mapa](../images/impact/data-area-norway.jpg){: .img-border } 

¡**MAPOG** ![mapog](../images/impact/MAPOG-logo.png){width=40px}
??? "Cómo mejora el SIG la cartografía de la red eléctrica y la planificación de infraestructuras energéticas. (Click Me)" 
 
 [**Enlace al sitio web](https://www.mapog.com/power-grid-and-infrastructure-mapping-and-planning-using-gis/)
 
 ![mapa](../images/impact/MAPOG.jpg){: .img-border } 

¡**dvlp.energy** ![dvlp.energía](../images/impact/dvlp-logo-purple.svg){width=40px}
??? "Con dvlp.energy, puede encontrar rápida y fácilmente el espacio adecuado para sus proyectos solares, eólicos o de almacenamiento. (Haz clic en mí)" 
 
 [**Enlace al sitio web](https://www.dvlp.energy/en)
 
 ![mapa](../images/impact/dvlp-energy.jpg){: .img-border } 

**Tecnologías Roseau[Tecnologías Roseau](../images/impact/roseau.svg){width=40px}
??? "Soluciones de software modernas y ergonómicas para el diseño sencillo de redes de distribución eléctrica. (Hágame clic)" 
 
 [**Enlace al sitio web](https://www.roseautechnologies.com/en/home/)
 
 ![mapa](../images/impact/roseau.jpg){: .img-border } 

