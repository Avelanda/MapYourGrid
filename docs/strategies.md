<div class="page-headers">
<h1>Tools and Strategies</h1>
</div>
Using the right tools and strategies is fundamental to mapping the electrical grid efficiently and accurately. The following strategies and tools will help you to extend existing transmission grid networks on OpenStreetMap. Learn more on our recommended tools and strategies by clicking on the buttons: 

<div class="starter-kit-buttons">
  <a href="#introduction" class="btn btn-primary">Introduction</a> 
  <a href="#pioneer-mapping-strategies-and-tools" class="btn btn-secondary">Pioneer Mapping Strategies and Tools</a>
  <a href="#technical-mapping-strategies" class="btn btn-secondary">Technical Mapping Strategies</a>
  <a href="#quality-assurance-and-validation" class="btn btn-secondary">Quality Assurance and Validation</a>
</div>

### **<div class="tools-header">Check out our tools and strategies video tutorial for JOSM</div>**
<iframe width="720" height="315" style="height: auto; aspect-ratio: 16/9;" src="https://www.youtube-nocookie.com/embed/gyO93zd30nQ?si=UHClE5T7ohl_rW84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## <div class="stradegy-header">Introduction</div></h3>


> As a rule of thumb: **The larger the towers and substations, the higher the voltage and the greater their relevance to the transmission grid. Priority should therefore be given to large, high-voltage infrastructure first.** 

Please consider the following strategies and the associated processes as recommendations only. Ultimately, the most efficient strategy is the one that enables you to work on the electrical grid with passion and motivation over a longer period of time. The strategies can be divided into two phases, with a quality assurance and validation process running alongside them.

**[Pioneer Mapping Strategies](strategies.md#pioneer-mapping-strategies-and-tools)**: To ensure the power grid has the best possible coverage, we recommend beginning with Pioneer Mapping in each country. Several strategies are employed at this stage to identify the location of all lines, power poles, and substations. Rather than reducing issues in the grid, the main focus is on increasing extending geographic coverage of the grid. This may result in an increased total number of issues in the grid. These strategies focus primarily on mapping the geographical location of power lines, towers, plants and substations, rather than technical grid details. They require good eyesight, fast mapping skills and an understanding of situations in which satellite data is insufficient for consistent grid mapping.

**[Technical Mapping Strategies](strategies.md#technical-mapping-strategies)**: This phase involves solving complex grid issues that require a fundamental understanding of the electrical grid. This includes mapping voltages, the number of circuits and routing issues. During this phase, the initial mapping work is validated against multiple sources to ensure its plausibility. These sources could include official maps from grid operators, statistics about grid length, and other official data. The main focus of these strategies is to minimise the number of complex quality issues in the grid.

**[Quality Assurance and Validation](strategies.md#quality-assurance-and-validation)**: Quality assurance runs parallel to both mapping phases and ensures that all data is verifiable, follows agreed tagging standards, is traceable, and can be reviewed by others. Tools like JOSM, Osmose, ohsome stats, and Open Infrastructure Map, along with community feedback and AI-assisted checks, help maintain the accuracy and reliability of the electrical grid data on OpenStreetMap.


## <div class="stradegy-header">Pioneer Mapping Strategies and Tools</div></h3>

<div class="tools-buttons-small">
  <a href="#osmose" class="btn btn-primary">Osmose</a> 
  <a href="#todo-plugin" class="btn btn-primary">Todo Plugin</a> 
  <a href="#map-fast" class="btn btn-secondary">Map Fast</a>
  <a href="#copy-coordinates-from-and-into-josm" class="btn btn-secondary">Coordinates and JOSM</a>
  <a href="#continue-open-lines" class="btn btn-secondary">Continue Open Lines</a>
  <a href="#spot-the-gaps-in-the-grid" class="btn btn-secondary">Spot the Gaps in the Grid</a>
  <a href="#connect-power-plants" class="btn btn-secondary">Connect Power Plants</a>
  <a href="#connect-substations" class="btn btn-secondary">Connect Substations </a>
  <a href="#connect-industrial-areas" class="btn btn-secondary">Connect Industrial Areas </a>
  <a href="#connect-wikidata" class="btn btn-secondary">Connect WikiData</a>
</div>

### **<div class="tools-header">Osmose</div>**
Osmose is a quality assurance tool that detects issues in OpenStreetMap data on a daily basis. It is the main tool we use to find and fix power infrastructure, and many strategies explained below utilise it. You can either use our integrated Osmose tool on MAP IT📍, but you can also use the official Osmose [website](https://osmose.openstreetmap.fr/en/map/).

<div style="float: right; margin: 3px 0 10px 20px; width: 350px;">
  <img src="../images/tools/osmose-tool.jpg" class="img-border" style="width: 100%;">
  <figcaption class="image-caption"> Use the Osmose tool we have integrated on our MAP IT📍 interactive map. Click to enlarge.</figcaption>
</div>

1. Go to the [MAP IT📍](https://mapyourgrid.org/map-it/)page.
1. Press on the Osmose hint layer button.
1. Choose one of the Osmose issues, and press on a country. This will fetch up to 5000 Osmose issues for that country and issue type.
1. Drag and drop the file into the map area of your iD or JOSM editor.

If you want to get Osmose issues for a specific region/province, we recommend using the Osmose website as you can get power-related issues by choosing the power topic for your area of interest and then `Export → JOSM`. In the future we will be integrating regions into [MAP IT📍](https://mapyourgrid.org/map-it/). Osmose issues can also be extracted, browsed and visualised via the official [Osmose user interface](https://osmose.openstreetmap.fr/en/map/#loc=8/33.356/-7.309&level=1%2C2%2C3&tags=power&useDevItem=all&item=7040&class=2). 

### **<div class="tools-header">Todo Plugin :white_check_mark:</div>**
The Todo plugin is used for almost all pioneer mapping strategies, systematically stepping through a dataset of `hints`.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
  <img src="/images/todo.jpg" class="img-border" style="width: 100%;">
  <figcaption class="image-caption"> A simple but very efficient way of mapping the network is the continuation of “Unfinished Transmission Lines loaded into the Todo plugin”. Click to enlarge.</figcaption>
</div>

1. Download any hint data layer into JOSM, or select other OpenStreetMap objects that you have filtered with `CTRL+F`.
1. Download the Todo plugin for JOSM. `Edit → Preferences`. Search for Todo, mark it and press OK. Press `Windows → Todo list` to show the Todo list window. 
1. Press `CTRL + A`  to select all objects in the hint layer. Press the Add in the Todo plugin window (`Windows → Todo list`)
1. Switch back to the OSM data layer.
1. You can now systematically step through all the hints by pressing Mark.
1. **Bonus:** By assigning the “Mark” hotkey to F1, it is much easier and faster to work through the various issues. `Open Edit → Preferences → Keyboard Shotcuts` and seach for `Mark`. Uncheck the `Use Default` box and select they key you want to use.  The zoom level is often too high, so it can also be helpful to set `View: Zoom Out (keypad)` to F2.


### **<div class="tools-header">Multiple Hint Layers </div>**

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
  <img src="/images/neon-hints.jpeg" class="img-border" style="width: 100%;">
  <figcaption class="image-caption"> The neon green squares shows windturbines from the Global Renewable Watch data loaded via the Map It📍. Click to enlarge.</figcaption>
</div>

Seeing all the other 'hint' layers in relation to the OSM data in JOSM can be very helpful, as it allows you to quickly spot what data is missing. In JOSM, inactive layers are shown in grey by default, which provides very low contrast with satellite imagery. To improve the visibility and usability of the other layers, you have to change the colour of the inactive layers in your JOSM preferences. 

1. Open the Colors Preferences. `Edit → Preferences → Colors`. 
1. Search for `inactive` and double click on it.
1. Select a colour that is not included in our mapCSS, but which is also uncommon in nature, as you want a high contrast with the satellite images. We recommend neon green. Press `OK` save the setting. 
1. To enlarge nodes and ways in other layers, simply activate this layer and select it. If you activate another layer now, the data will remain marked. 

### <div class="tools-header">Map Fast </div>


<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
  <img src="/images/mapfaster.jpg" class="img-border" style="width: 100%;">
  <figcaption class="image-caption"> Selecting all the untagged nodes along your line allows you to tag them all at once, saving you lots of time. Remember to tag the portal, as well as the start and end of the line. Click to enlarge </figcaption>
</div>


To map efficiently and quickly, you need to know how to select all the nodes along your new line and convert them into power towers in one go. This will save you loads of time:

1. Enable Expert Mode by selecting the View drop-down menu in the top panel.
1. Press `A` and draw nodes as you follow the towers. This will create a long line of untagged nodes, all connected by a untagged way.
1. Click on the way, and tag it as a power line.
1. Click on the way again, and `CTRL+F` to open up search. Then enter this search string: `child selected type:node AND untagged`. This will select all untagged nodes of the way.
1. Use the preset power tower or poles to set all nodes at once.
1. If you ever lose this query, click the right arrow on the search window and select it from your history.


### <div class="tools-header">Copy Coordinates from and into JOSM</div>

There are many reasons why you might want to share your location with someone else. Many popular mapping platforms allow you to copy coordinates from a map by right-clicking on an arbitrary position.

1. To copy coordinates from a node in JOSM, simply select the node and press `CTRL+SHIFT+C`.
2. To create a node from a given coordinate, press `SHIFT+D` or click the Add Node button in the Tools drop-down window. It is recommended that you add this button to your upper toolbar.


### <div class="tools-header">Continue Open Lines</div>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
  <img src="/images/osmose-unfinished-transmission-lines.jpg" class="img-border" style="width: 100%;">
  <figcaption class="image-caption"> The Osmose "Unfinished power transmission line" issues reveal all transmission lines that are not connected to a substation. Click to enlarge.</figcaption>
</div>

_Continue Open Lines_ is the most efficient and most beginner friendly strategy. It is directly integrated in [Map It📍](https://MapYourGrid.org/map-it/). The strategy mainly depends on [osmose](https://osmose.openstreetmap.fr/en/map/), a quality assurance tool that detects issues in OpenStreetMap data on a daily basis. These include different power classes of issues, such as "unfinished power transmission lines" : 

1. Select `Unfinished power transmission line (Class 2) (recommended for beginners ⭐)` from the drop-down menu, then click on the country or state you wish to map. 
2. Now drag and drop the GeoJSON file you have just downloaded into you JOSM window.
3. Press `CTRL+A` to select all the location you have selected and press `Add` in the window of the Todo list plugin.
4. Click on `Default Transmission (50 kV+)` in the `Transmission Overpass Query` selected and download the tranmission grid data into another layer in JOSM. Activate this layer.
4. You can now step through all issues by pressing `Mark`.



### <div class="tools-header">Spot the Gaps in the Grid</div>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
      <img src="/images/finding-gaps.jpg" class="img-border" alt="Equator ">
      <figcaption class="image-caption">Outdated satellite data results in larger gaps in the grid across many regions of Ecuador. These gaps can be spotted by lines that end abruptly rather than in a round circle, indicating a substation. Click to enlarge.</figcaption>
</div>

_Spot the gaps in the grid_ is a rather simple strategy but highly efficient. By using a bolt map coloring that highlights gaps in the grid and unconnected substation, is it easy to spot where are gaps in the grid. Unlike the 'Continue Open Lines' strategy, this approach is more flexible and relies on human judgement to address obvious topological issues in the grid. This allows us to prioritise lines extending or connecting new regions of the grid lines with topological relevance, in other words. 

As most transmission lines end at substations, the map painting technique allows us to mark the quiet lines that do not end at a substation with a circle. Zooming out allows the mapper to familiarise themselves with the gaps and nationwide coverage of the grid. If you haven't yet added our mapCSS to color the grid, you can find the recommended low-density grids map painting for this strategy here <a href="https://raw.githubusercontent.com/open-energy-transition/color-my-grid/refs/heads/main/ohmygrid-default.mapcss">here.</a>


1. We recommend using this MapCSS file for [low-density grids](https://raw.githubusercontent.com/open-energy-transition/color-my-grid/refs/heads/main/MapYourGrid-default.mapcss) and this one for [high-density grids](https://raw.githubusercontent.com/open-energy-transition/color-my-grid/refs/heads/main/MapYourGrid-default.mapcss). 
2. You can use [ColorMyGrid](https://github.com/open-energy-transition/color_my_map), our MapCSS Generator tool, to easily adapt the MapCSS file to fit any special requirements you might have. 
3. In the ColorMyGrid repo you will also find the raw data to edit the [map legend](https://raw.githubusercontent.com/open-energy-transition/color-my-grid/refs/heads/main/legend/power-grid-legend.png).


### <div class="tools-header">Connect Power Plants </div></h3>
As most large power plants are directly connected to the transmission grid, Connect Power Plants provides an easy strategy using the comprehensive power plants dataset from Global Energy Monitor. A simple user interface for retrieving this data at a national level is integrated into [Map It📍](https://MapYourGrid.org/map-it/), enabling users to preview and download GeoJSON data:

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="/images/connect-power-plants.jpg" class="img-border" alt="GEM Angola Data Example in JOSM">
  <figcaption class="image-caption">A power plant in Colombia is located close to a large substation. Click to enlarge.</figcaption>
</div>

1. Select `Global Energy Monitor - Power Plants` as the hint layer and press the country you like to map.
3. Drag and drop the GeoJSON file you have just downloaded into your JOSM window.
4. Press `CTRL+A` to select all locations and click Add in the Todo List plugin window.
5. Click on `Default Transmission (50 kV+)` in the `Transmission Overpass Query` selected and download the transmission grid data into another layer in JOSM. Activate this layer.
6. You can now step through all the issues by pressing 'Mark'.
7. If you find a power plant that is missing in OpenStreetMap, please map it too.


### <div class="tools-header">Connect Substations </div></h3>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
  <img src="/images/substation_malawi.jpg" class="img-border" alt="Substation in Malawi with unmapped interconnector in the left corner">
  <figcaption class="image-caption">A substation in Malawi with an unmapped interconnector with the first tower in image center. Click to enlarge.</figcaption>
</div>

A simple yet efficient strategy for mapping the transmission grid is to check every substation for new lines branching out from it. As most national transmission grids are entirely connected, this strategy enables you to trace and therefore map the entire grid network. One single unmapped power tower can sometimes trace to a missing interconnector to another country as shown in the image of a substation in Malawi. Can you see the power tower that's missing from the bottom left corner of the substation?

1. Download the transmission grid data of your country using the [Map It📍](https://MapYourGrid.org/map-it/) page.
2. Press `CTRL+F` and filter by `type:way power=substation`.
3. With the installed Todo plugin window press `Add`. 
4. Switch back to your transmission grid layer.
4. You can now step through all substations by pressing `Mark`.

### <div class="tools-header">Connect Industrial Areas </div></h3>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
  <img src="/images/industrial-area.jpg" class="img-border" alt="A car assembly plant in Nigeria which is connected directly to the grid.">
  <figcaption class="image-caption">This industrial area in Nigeria is connected to the transmission grid via its own substation.</figcaption>
</div>

Large industrial facilities require huge amounts of energy and therefore have their own substations, and are sometimes even directly connected to the transmission grid. Stepping through all industrial areas can also reveal substations or power plants that are often tagged already as landuse=industrial. Try also to check the surrounding area too as substations are sometimes placed outside of the mapped industrial area. 

1. Download the transmission grid data of your country using the [Map It📍](https://MapYourGrid.org/map-it/) page.
1. Download the industrial areas of your country using into a new layer using the [Map It📍](https://MapYourGrid.org/map-it/) page.
1. Press `CTRL+F` and filter by `type:way landuse=industrial`.
1. With the installed Todo plugin window press `Add`. 
1. Switch back to your transmission grid layer.
1. You can now step through all substations by pressing `Mark`.

For more highly industrialised countries, loading all industries from OSM can sometimes lead to an overwhelming amount of information. When this happens, it can be convenient to filter out smaller industries that may not offer useful insights. To do this, we have the [osm-industries](https://github.com/open-energy-transition/osm-industries) tool. This script allows you to create a layer of filtered industries that you can load into JOSM as a GeoJSON file. The script also lets you specify your own threshold value for filtering, with the default set to 10,000 sqm (1 hectare).


### <div class="tools-header">Connect WikiData</div></h3>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="/images/wikipedia-wikidata.jpg" class="img-border" alt="Wikidata Comparison GeoJSON Output">
    <figcaption class="image-caption">Wikipedia articles about power infrastructure, such as the Gitanga hydroelectric power station in Kenya, also provide location data that can be systematically accessed via WikiData.</figcaption>   
</div>


WikiData provides access to Wikipedia articles about power infrastructure around the world. The [Map It📍](https://MapYourGrid.org/map-it/) page provides you a simple interface to extract this data for the country you would like to map. The [osm-wikidata-comparison](https://github.com/open-energy-transition/osm-wikidata-comparison/) repository provides this data by identify missing or incomplete power infrastructure in OpenStreetMap by extracting structured data via the Wikidata API. It generates ready-to-use GeoJSON that can be opened in JOSM as a visual hint layer to guide new mapping work or improve existing tags.

1. Use the [Map It📍](https://MapYourGrid.org/map-it/) page to download the transmission grid data for your country.
1. Download your country's WikiData into a new layer using the [Map It📍](https://MapYourGrid.org/map-it/) page.
1. Press CTRL+A and click 'Add' in the 'Todo' window.
1. Switch back to your transmission grid layer.
1. You can now step through all WikiData entries by pressing 'Mark'.
1. If you spot any power plants or industrial areas missing, please also include these in your mapping.

<br>

#### Linking OpenStreetMap to WikiData

 Linking other datasets to OpenStreetMap objects, such as power plants, can significantly enrich the data and help to avoid licence issues. Often, other data catalogues provide more up-to-date information about objects than OpenStreetMap. WikiData provides an excellent means of linking all these different data sources together in a standardised way. The datasets we provide will also include the [WikiData QID](https://wiki.openstreetmap.org/wiki/Key:Wikidata). Adding these QIDs to OpenStreetMap objects greatly improves the quality and usability of data relating to power plants, substations, and interconnectors. To automate the process of creating and uploading datasets and IDs to Wikidata, check out our [Wikidata QID Generator](https://github.com/open-energy-transition/wikidata_qid_generator). To quickly link Wikidata entries with roughly estimated coordinates to objects in OpenStreetMap, the [JOSM Wikipedia plugin](https://josm.openstreetmap.de/wiki/Help/Plugin/Wikipedia) can significantly speed up the process.

To match other datasets, such as Global Energy Monitor, with Wikidata, tools like [Mix'n'Match](https://mix-n-match.toolforge.org/) can be very helpful. A workflow using these tools could look like this:


 <div class="wikidata-mobile-fix" style="float: right; margin: 0 0 20px 20px; width: 250px; max-width: 100%;">
 <style>
    @media (max-width: 768px) {
      .wikidata-mobile-fix {
        float: none !important;
        width: 100% !important;
        margin: 1rem 0 !important;
      }
    }
  </style>
    <img src="/images/WikiData-id.jpg" class="img-border" alt="Wikidata Comparison GeoJSON Output">
    <figcaption class="image-caption">WikiData QID enables Open Infrastructure Map to link to databases like Global Energy Monitor.</figcaption>   
</div>

1. **Confirm Already Matched Plants**  
    - Start by reviewing the plants that are already matched: [Matched Plants List](https://mix-n-match.toolforge.org/#/list/6736/auto)  
    - Ensure that each entry corresponds to the exact same plant.  
    - If any entry is not an exact match, remove it from the list.

2. **Identify Plants Missing on Wikidata**  
    - Look for plants on GEM that should have Wikidata items but currently do not.  
    - A useful report for finding these is: [Common Names Report](https://mix-n-match.toolforge.org/#/common_names/6736)

3. **Check for Multiple Catalogs**  
    - In the report, determine if multiple external datasets (catalogs) have the same plant concept.  
    - Ensure these concepts do not already have a Wikidata item before proceeding.

4. **Candidate Item Creation**  
    - Identify good candidates for new Wikidata items, for example: [Cement Australia Candidate](https://mix-n-match.toolforge.org/#/creation_candidates/by_ext_name/?ext_name=Cement%20Australia)  
    - Make sure that the candidate represents the exact same item or concept before creating a new Wikidata item.


<br><br>

## <div class="stradegy-header">Technical Mapping Strategies</div></h2>
  
<div class="tool-buttons">
  <a href="#Official-Data-and-Maps" class="btn btn-primary">Official Data and Maps</a> 
  <a href="#fixme-tags" class="btn btn-secondary">FixMe Tags</a>
  <a href="#open-infrastructure-map-nighttime-osmose-and-josm" class="btn btn-secondary">Open Infrastructure Map </a>
  <a href="#online-investigation" class="btn btn-secondary">Online Investigation</a>
  <a href="#josm-powernetworktools-plugin" class="btn btn-secondary">PowerNetworkTools Plugin</a>
  <a href="#validating-and-mapping-interconnectors" class="btn btn-secondary">Interconnectors</a>
  <a href="#improve-osm-tags-with-ppm" class="btn btn-secondary">PowerPlantMatching </a>
</div>

### <div class="tools-header">Official Data and Maps</div></h3>

In order to map more effectively, it is recommended to use maps and datasets that can help you find missing power lines, substations and power plants. Most National transmission system operators provide publicly available maps, which can help you to estimate the coverage of the grid, and locate what is missing in OSM. Furthermore, having the names of substations can also help locate them. MapYourGrid provides a list of [Curated Grid Maps](https://github.com/open-energy-transition/Awesome-Electric-Grid-Mapping), which contains datasets, maps, and documents for electrical grid all around the world.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="/images/bangladeshawesome.jpg" class="img-border" alt="GEM Angola Data Example in JOSM">
    <figcaption class="image-caption">Offical transmission grid map of Power Grid Bangladesh PLC.</figcaption>
</div>


#### OpenData and PBF Plugin
The OpenData plugin will allow you to load all kinds of GIS formats directly into JOSM.

1. Download the `OpenData` plugin for JOSM. Go to Edit > Preferences. Search for `OpenData`, select it and press OK.
1. You should now be able to import much more data formats like (csv, xls, ods, kml, kmz, shp, mif) as another hint layer into JOSM.
1. In order to import [PBF](https://wiki.openstreetmap.org/wiki/PBF_Format) files into JOSM, please install the PBF plugin.

!!! note "OpenStreetMap and Verifiability"
      ⚠️ Please use these datasets as hint layers. Do not copy and paste data from these maps directly into OpenStreetMap. Each data point of the transmission network must be set manually and <a href="https://wiki.openstreetmap.org/wiki/Verifiability">verified</a> with official satellite data provided by the OpenStreetMap community.

### <div class="tools-header">FixMe tags</div></h3>

OpenStreetMap allows mappers to quickly mark an object that seems to be wrong and needs fixing using the [Key:fixme](https://wiki.openstreetmap.org/wiki/Key:fixme) tag. For example, you can write `fixme=wrong voltage` if you think the voltage on a line is incorrect, but you don't know the correct value. A small F will then be visible on the edge of the symbol to indicate the fixme tag. Stepping through all the `fixme` tags in a country is also a great way to search for errors in the grid that you can try to fix. We recommend using the `Todo` plugin for this.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="/images/fixme.jpg" class="img-border float-right" alt="Fixme tags loaded in the Todo list.">
  <figcaption class="image-caption">FixMe tags offer an easy way to communicate with other mappers.</figcaption>
</div>

1. Download the grid you want to look into using at the [Map It📍](https://MapYourGrid.org/map-it/) page.
2. Press `CTRL+F`and search for `fixme=*`.
3. In the Todo list window press `Add`.
4. Once you have fixed an issue, please remove the `fixme` tag.

FixMe tags provide an efficient means of communicating with other mappers in your region regarding issues or uncertainties you have identified in your own or others' mapping. 

1. To make the FixMe tags easily accessible and to quickly visualise the notes directly on the map, activate `FixMe and Note` MapCSS under `Edit → Preferences Map → Paint Styles`. 
2. Search the `Available Styles` for `FixMe and Note`. 
3. Load it into your Active Styles and press `OK`, 
4. **Bonus:** Are you mapping the same region as someone else and want to update your fixme tags, using the fixme tags as a quick way to communicate and share information on the map? Pressing `CTRL+U` updates all the geometries and tags of the data you have already loaded.

### <div class="tools-header">Open Infrastructure Map - Nighttime, Osmose and JOSM </div></h3>
<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="/images/openinfraosmose.jpg" class="img-border" alt="Open Infrastructure Map - Osmose">
    <figcaption class="image-caption">Open Infrastructure Map also includes the osmose issues in the grid as another layer.</figcaption>
</div>

1. Open Infrastructure Map can be used as a tool to map and find issues by utilising the nighttime lights feature.
2. Go to the <a href="https://openinframap.org/#2/26/12">website</a> and set the background to nighttime lights. This can help see clear "holes" in a country's grid.
3. In layers, activate the power validation feature. If you zoom in and find an unfinished power line, you can see the osmose issue affiliated to this line.
4. If you want to edit what you found, Open Infrastructure Map allows editing via JOSM once zoomed-in enough. On the bottom right of the page, you can press on `Edit` and `Remote Editing` (remember to enable remote in JOSM). 

### <div class="tools-header">Online Investigation :mag:</div>

Searching for recent news articles, reports, academic studies or datasets related to newly operational substations and transmission lines is an effective way to find information about large-scale infrastructure projects that have just started construction or operation. As these facilities are of national interest, they are usually reported on in local news portals or on the websites of transmission grid operators. This is why there is so much news, articles and reports about new, large-scale substations, transmission lines and power plants starting operation.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="/images/mapstrats.jpg" class="img-border" alt="A wind farm in Bangladesh displayed in OpenStreetMap">
    <figcaption class="image-caption">A wind farm in Bangladesh displayed in OpenStreetMap that has been discovered by offical documents.</figcaption>
</div>

Local Large Language Models (LLMs) can help by conducting searches in the country’s official language. For example: “Please search for news articles, reports, academic studies, or datasets about transmission lines or substations opened in Country A in the last 5 years. Use the official language of the country A. Only include resources not already listed in the <a href='https://github.com/open-energy-transition/Awesome-Electric-Grid-Mapping'>Awesome Electric Grid Mapping</a> repository.”

Please be aware of the licence and quality of the documents you are finding. If you cannot validate the information you find by different sources, you can at least use the names of substations, regions and towns to identify the locations of new substations or transmission lines, and verify their visibility in satellite images. The fastest way to search global power infrastructure like power plants, substations or country interconnector by name is by the search function of <a href="https://openinframap.org/#2/26/12">Open Infrastructure Map</a>.



### <div class="tools-header">JOSM PowerNetworkTools Plugin 🔌</div></h3>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="/images/plugin.png" class="img-border" alt="JOSM PowerNetworkTools Plugin">
    <figcaption class="image-caption">The OpenStreetMap Editor plugin that allows to roughly estimate the voltage levels based on phase to phase clearance measurements.</figcaption>  
    <img src="/images/voltage-auto-filter.jpeg" class="img-border" alt="JOSM PowerNetworkTools Plugin">
    <figcaption class="image-caption">The voltage autofilter enables you to quickly identify the voltages in use and filter by voltage.</figcaption>    
</div>

This tool estimates the voltage of a substation busbar from aerial imagery by measuring the clearance between conductors. The clearance is dictated by the voltage and so allows an estimate of the voltage to be made. Although not a perfect method, when combined with knowledge of a country's standard power grid voltages and power infrastructure layout this can greatly assist mappers in assigning voltages to power infrastructure from aerial imagery.

1. Download the `PowerNetworkTools` plugin for JOSM. Go to `Edit` -> `Preferences` -> `Plugins`. Search for `PowerNetworkTools`, select it and press OK. 
1. Activate the Voltage Estimator in the `Windows` menu.
1. Press `V` to measure the distance between the two phases at the busbar.
1. Read more about how to use the plugin in the README of the [official repository](https://github.com/openinframap/josm-power-network-tools).
1. **Bonus:** To quickly see which voltages are used in a region and to filter lines with specific voltages the auto filters in JOSM can be very helpful. Press `Edit` -> `Preferences` -> `OSM Data`. Go to 'Other Options', activate 'Use Auto Filters' and select 'Rule Voltage [5]' from the drop-down menu. You will now see multiple buttons in the top left corner showing the voltages in the view. Click on a voltage to filter by it.



We recommend the following documents for a deeper dive into the construction of the electrical grid and how it is designed, including the relationship between distance and voltage based on IEC 60071-2. Please keep in mind that different standards may apply depending on the country.

1. [Overhead Line Methodology](https://go.ratedpower.com/hubfs/CS-Knowledge%20Base/Methodologies/Overhead%20Line%20Methodology.pdf)
1. [Overhead Electrical Lines Exceeding AC 1 kV](https://webstore.ansi.org/preview-pages/bsi/preview_30365961.pdf)


### <div class="tools-header">Validating and Mapping Interconnectors 📥</div></h3>
Interconnectors between countries are essential to the functioning of the transmission grid. Therefore, these lines should be regularly validated and carefully extended. If you are mapping an interconnector between two countries and want to see what’s mapped on the “other” side of the border, you can either do a quick Download from OSM in a new layer or use the following Overpass query:

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="/images/alternative_query.png" class="img-border" alt="Overpass Query Example">
    <figcaption class="image-caption">Overpass Query Example</figcaption>
</div>

1. Copy this <a href="https://raw.githubusercontent.com/open-energy-transition/osm-grid-definition/refs/heads/main/Other_queries/Border_overpass">query</a> and paste it into “Download from Overpass API” in JOSM.
2. Draw a small bounding box in the slippy map, then run the query to download.
3. <p><strong>Explanation:</strong> The query finds nodes in your bounding box, detects their admin area (level 4 by default), and fetches all power infrastructure within it. You can adjust the “admin level” in the query (e.g. level 2 for national, level 6 for province) by editing the <code>admin_level</code> parameter in the download tab. A smaller bounding box is better (faster execution).</p>


### <div class="tools-header">Street-Level Imagery</div></h3>

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="../images/mapillary_tower.jpg" class="img-border" alt="Overpass Query Example">
    <figcaption class="image-caption">Power Towers at the coast of Benin are clearly visible street level imagery</figcaption>
    <img src="../images/sub-sha-africa.jpg" class="img-border" style="width: 100%;"> </a>
  <figcaption class="image-caption">Mapillary provides valuable street-level imagery, which is particularly useful in low- to medium-income regions such as Western Africa. Click to enlarge.</figcaption>
</div>

Platforms such as [Mapillary](https://www.mapillary.com/) or [Panoramax](https://panoramax.fr/) provide an open-data alternative to Google Street View for validating power tower routing and cable numbers. This imagery is also extremely helpful for following power towers and line routing in urban areas, as spotting power towers with satellite imagery in such an environment can be very challenging. However, this imagery can also be used to estimate voltages by analysing the insulators of the powe towers. For many regions, such as Sub-Saharan Africa, Mapillary imagery is the only source of high-quality imagery, as satellite imagery in these regions is quite poor. Mapillary imagery is directly integrated in JOSM and iD. Here how to active it in JOSM:

1. Download the `Mapillary` plugin for JOSM. Go to `Edit` -> `Preferences`. Search for `Mapillary`, select it and press OK. 
2. Under `Windows` you should now find a `Mapillary` imagery layer. Click it.
3. You need to zoom in a lot to make the roads visible where imagery is available. Activating this layer allows you to click on every node to visualise the image. To browsing fast where imagery is available can be done with the [web interface of Mapillary](https://www.mapillary.com/app)

### <div class="tools-header">Add Additional Aerial Imagery to JOSM</div></h3>

Besides ESRI, Bing and Mapbox, JOSM integrates a wide range of other great global and local imagery. All available local imagery should be visible for the region you have selected in JOSM when you click on `Imagery` in the top toolbar. To add global satellite data products like Sentinel 2 to JOSM or search local datasets go to `Imagery` -> `Imagery Preferences`. Here you can search various imagery sources like `EOx cloudless Sentinel-2 2024` data. 

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="../images/sentinel2-turbines.jpg" class="img-border" alt="sentinel2 turbines">
    <figcaption class="image-caption">Depending on the size, background and sun angle, wind turbines can even be mapped with Sentinel 2 imagery.</figcaption>
</div>


Even though Sentinel-2 imagery has a much lower resolution, it can help you to verify data from other datasets because, for many regions, it is the most recent dataset available. Depending on the size of the project and background, it can be used to verify and map 400 kV lines, larger substations, solar parks and even wind turbines. 


JOSM also allows you to add imagery and maps from defined tile services, such as Esri Wayback or HOT high-resolution imagery. The OpenStreetMap diary [Using Esri Wayback Imagery in OSM Editor](https://www.openstreetmap.org/user/Deane%20Kensok/diary/397014) provides great step-by-step documentation on how to do this in ID. A similar integration can be done in JOSM under `Imagery` -> `Imagery Preferences`. Esri Wayback Imagery can be very helpful to investigate when infrastructure was built or cables have been buried underground. Also, in some cases, lines and towers can be more visible in older imagery because of a different sun angle or change of sessions.  


To find further imagery layers that are not natively integrated into JOSM, check out the  [OSM Editor Layer Index](https://github.com/osmlab/editor-layer-index) project. 

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="../images/filter-circuits.jpg" class="img-border" alt="Filter">
    <figcaption class="image-caption">JOSM is only showing the transmission lines without circuits in Pakistan by using the Filter.</figcaption>
</div>

### <div class="tools-header">Searching for Missing Data like Cables using the Filter</div></h3>
To find objects that are missing attributes like WikiData, names, cables or circuits you can easily filter the shown data in JOSM by that. Just Click on `Windows` -> `Filter`. By adding a filter string like `power=line AND (circuits: OR cables)`, you can now hide, invert or deactivate the data that already provides this information from the editor, showing only the data without circuits or cables. 


### <div class="tools-header">Continuos Download and Hydro Power Mapping</div></h3>
Mapping hydro power requires specialised tools and advanced experience in mapping. As with our previous workflows, you will be interested in all the data that has already been mapped in OpenStreetMap, such as waterways, dams, lakes, buildings and, of course, the electrical grid. Therefore, the [Map It📍](https://MapYourGrid.org/map-it/) page alone might help you to find hydro power plants at the end of the line, but you would now like to load all the data for a large region along the waterways. The continuosDownload plugin can help you here out:

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="../images/hydro.jpg" class="img-border" alt="Filter">
    <figcaption class="image-caption">To map hydroelectric power plants like this one in Chile, you need to download all the OpenStreetMap data.</figcaption>
</div>

1. Download the [continuosDownload](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/continuosDownload) plugin for JOSM under `Edit → Preferences → Plugins`. Search for continuosDownload, mark it and press OK. You might need to restart JOSM.
2. The plugin's default settings are suboptimal. You can chance the setting under `Download Seetings`. Change `Max download boxes` to 4 and the `Wait time` to 100 ms. `Extra Download area` and `Max download area` should be changed to 1.
3. Download a hint dataset like [GloHydroRes](https://zenodo.org/records/14526360). 
4. To make CSV files and other formats readable by JOSM you need the [OpenData plugin](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/OpenData) installed.
5. To make coordinates readable by JOSM, change the names of the coordinate columns to latitude and longitude.
6. Add the locations you want to work on to your to-do list from the hint layers, then head to your first destination.
7. Press the green download button in JOSM to get all data for the bounding box.
8. All data will now be automatically downloaded to your viewing area and beyond. Zoom out too much and you will run into bandwidth limitations. For further details and guidelines on how to perform power mapping, please refer to our [Hydropower Mapping Guidelines](https://wiki.openstreetmap.org/wiki/Power_generation/Guidelines/Hydropower). 

### <div class="tools-header">Improve OpenStreetMap tags with powerplantmatching</div></h3>

<a href="https://github.com/PyPSA/powerplantmatching" target="_blank">Powerplantmatching (PPM)</a> is a python repository designed to harmonize and combine power plant datasets from sources like OpenStreetMap (OSM) and Global Energy Monitor. It is widely used to prepare validated generation data for energy system models such as PyPSA-EUR. A new feature now fetches power plant data  from OSM and flags all <strong>power plants and generators that are rejected</strong> due to incomplete or inconsistent metadata. These include elements missing a <code>name</code>, <code>output:electrical</code>, <code>plant:method</code>, incorrect unit formats, among others.

You can access this data through our [Map It📍](https://MapYourGrid.org/map-it/) interface. Select the <strong>powerplantmatching</strong> button and click on any country to download a GeoJSON file listing rejected power plants. Once you've downloaded the file open it JOSM as a hint layer to help improve tagging. You can do this by reviewing the reason why the power plant was not considered and adding the missing data. For example, a common reason is the lack of a technology tag like <code>plant:method=run-of-river</code> or <code>plant:method=reservoir</code> on hydro power plants, or <code>plant:method=wind_turbine</code> on wind farms relations.

<div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="/images/ppm-hint-layer.jpg" class="img-border" alt="PPM Rejected Power Plants GeoJSON">
    <figcaption class="image-caption">
        Power plants rejected by powerplantmatching due to missing metadata, displayed in red as a JOSM hint layer. In black, the power infraestructure grid from OSM.
    </figcaption>   
</div>

Follow the steps below to help improve rejected power plants in OSM:

1. Use the [Map It📍](https://MapYourGrid.org/map-it/) page to download the rejected power plant layer for a given country.
2. Open the GeoJSON file in JOSM as a new layer.
3. Press `CTRL+A` and click `Add` in the `Todo` window.
4. Switch to your OSM transmission or power layer.
5. Step through the rejected entries by pressing `Mark` in JOSM.
6. Improve tagging to enhance the quality of OSM data.



## <div class="stradegy-header">Quality Assurance and Validation</div>

When properly curated and validated, crowdsourced geographic data can rival the quality of highly automated datasets. MapYourGrid builds on this community foundation to ensure the highest quality standards for mapping global electrical infrastructure.

MapYourGrid's validation approach is based on the [verifiability principles of OpenStreetMap](https://wiki.openstreetmap.org/wiki/Verifiability):

> **"At the core, "verifiability" is that everything you do can be demonstrated to be true or false by other mappers."**

This principle applies to every aspect of mapping: the physical presence of infrastructure, the accuracy of geometries, and the clarity of tags and values. A tag and geometry are considered verifiable only if another mapper, with the same inputs, would record them identically. This objective, evidence-based method is what makes OpenStreetMap a trusted source for academic research, governmental planning, and industrial analysis.

MapYourGrid layers additional tools, methodologies, and community-driven feedback mechanisms on top of this foundation to ensure data accuracy, completeness, and reliability. Here's how we do it:


1. **Professional Training, Standards and Support in Electrical Grid Mapping**

    The MapYourGrid initiative recognizes that high-quality data begins with knowledgeable contributors. We invest in building mapper capacity through structured training, professional-grade documentation, and standards aligned with both OpenStreetMap norms and the energy sector’s expectations. We support decentralized data stewardship by empowering local mappers to guide regional efforts, ensuring that data remains both accurate and contextually relevant over time.

    <div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="../images/kenya-tanzania.jpg" class="img-border" alt="PPM Rejected Power Plants GeoJSON">
    <figcaption class="image-caption"> Special care is taken to validate and investigate interconnectors between different countries like the <a href=https://openinframap.org/#6.7/-1.627/37.017> Kenya-Tanzania interconnector</a>. 
    </figcaption>   
    </div>

2. **User Feedback and Crowdsourced Issue Reporting**

    We encourage anyone using [Open Infrastructure Map](https://openinframap.org/#2/26/12) to report issues using the **#MapYourGrid** hashtag. Notes can be added without an account, lowering the barrier to participation. These community-sourced observations help identify outdated, misclassified, or missing infrastructure. This makes user feedback a cornerstone of validation.


3. **Pre-Upload Error Detection with JOSM Validator**

    Before data is uploaded to OpenStreetMap, it is automatically scanned using the [JOSM Validator](https://josm.openstreetmap.de/wiki/Help/Dialog/Validator). This tool checks for common mapping errors such as: Illogical tag combinations, unusual geometries (e.g., excessively long spans between power towers) or incomplete or deprecated data. MapYourGrid created custom made Power Validation rules for JOSM named "Power QA". Read more about this development in the  [ValidateMyGrid repository](https://github.com/open-energy-transition/validate-my-grid) and in the offical documentation for [Power Networks Quality Assurance](https://wiki.openstreetmap.org/wiki/Power_networks/Quality_Assurance).

    Warnings are prominently flagged, and mappers are discouraged from uploading until the issues are resolved, promoting a high standard of quality assurance.


4. **Visual Quality Checks with Custom Map Styles**

    Custom [map painting styles](starter-kit.md/#3-add-visual-clarity-with-custom-map-styles) specific to power infrastructure make it easier to spot errors visually within JOSM. These styles highlight anomalies, such as disconnected segments or misclassified equipment, empowering mappers to perform visual audits in real time.


5. **Human-in-the-Loop Review Option**

    By enabling the “I would like someone to review my edits” option in JOSM, contributors can request peer validation. The #mapyourgrid hashtag allows us to track these submissions and offer direct support, especially for:

    * New contributors working through tutorials
    * Edits based on unclear or low-resolution satellite imagery

    These reviews can involve experienced mappers or electrical grid specialists, providing both technical accuracy and mentorship.

    <div style="float: right; margin: 5px 0 20px 20px; width: 350px;">
    <img src="../images/osmose-gui.jpg" class="img-border" alt="Osmose GUI">
    <figcaption class="image-caption"><a href=https://osmose.openstreetmap.fr/en/map/#loc=8/33.356/-7.309&level=1%2C2%2C3&tags=power&useDevItem=all&item=7040&class=2>The Osmose GUI</a> enables users to extract and investigate Osmose issues within a specific region.  
    </figcaption>   
    </div>

6. **Daily Automated Quality Assurance via Osmose**

    The [Osmose QA platform](https://wiki.openstreetmap.org/wiki/Osmose) runs automated checks daily on the global grid data, focusing on:

    * Inconsistent voltage tagging
    * Isolated or unconnected transmission lines
    * Redundant or deprecated tagging

    Osmose QA has items and classes, these can be thought of as categories with items listed inside each category. Being a global tool, Osmose does quality checks on many layers of the OSM data beyond the power infrastructures. It is important to know what items and issues are of value for transmission grid mapping. 
    
    This list of relevant issues is what is made available on the [Map It📍](https://MapYourGrid.org/map-it/) page:


    | Item | Class | Description                              | Summary                                                                                                                   |
    | ---- | ----- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
    | 7040 | 1     | Lone Power Towers or Poles               | This tower should surely be connected to a power line                                                                     |
    |      | 2     | Unfinished Power Transmission line       | The line ends in a vacuum, and should be connected to another line or a transformer (`power=`) or a generator (`power=`). |
    |      | 3     | Connection between different Voltages    | Two lines meet at one point, but have inconsistent voltages (`voltage=*`)                                                 |
    |      | 4     | None Power node on Power Way             | If this node is a tower or pole, tag with `power=`; else remove it.                                                       |
    |      | 5     | Missing Power Tower or Pole              | Based on pole spacing, one appears to be missing on this line.                                                            |
    |      | 6     | Unfinished Power Distribution line       | The distribution line ends in a vacuum, and should connect to another distribution line or power structure.               |
    |      | 7     | Unmatched Voltage of line on Substation  | Ensure the voltage of lines matches the substation's rated voltage.                                                       |

    These issues are visualized directly in [Open Infrastructure Map](https://openinframap.org/#2/26/12), giving mappers clear targets for improving the dataset. 


7. **Statistical Monitoring with Health Scores (Under Construction)**

    Tools like [ohsome stats](https://stats.now.ohsome.org/) provide macro-level insights into mapping activity. They help detect:

    * Under-mapped regions or infrastructure gaps by comparing national line length statistics with OpenStreetMap
    * Unusual tagging patterns or mapping anomalies
    * Inactive areas with aging or outdated grid data

    Hashtag based tracking also enables performance monitoring and campaign evaluation across time and geography. All this statistical data, along with the osmose issues, is used to calculate a health score for the electrical grid. 

8. **FixMe Tags for easy communication between mappers on quality issues**

    Mappers can use [FixMe tags](https://wiki.openstreetmap.org/wiki/Key:fixme) to easily communicate potential quality issues with each other. These issues are highlighted to other mappers in the editor. Such issues may include incorrect attributes, such as voltages, incorrect routing, or any other issues that mappers identify in their own data or in data created by others.


9. **Integration and Interoperability Tests (Under Construction)**

    We routinely test how well OSM electrical data integrates with external systems and applications. This ensures that the data model is not only internally consistent but also compatible with real-world use cases, including load flow analysis, planning tools, and emergency response platforms. We test the dataset against other open and proprietary energy system models and frameworks to verify structural and semantic compatibility. Interoperability ensures that OSM-based grid data can be adopted widely, fostering trust among academic and industrial users.


10. **Sensitivity Analysis (Under Construction)**

    By simulating changes in voltage, topology, or component tagging, we measure how sensitive derived outputs (e.g., load estimations or reliability models) are to input variations. This helps identify critical data points where higher accuracy or verification is essential.


11. **Expert and Peer Cross-Validation (Under Construction)**

    Experienced technical mappers and energy system experts regularly review the data, particularly in complex regions with overlapping voltages, substations, or unusual infrastructure types. In combination with qualitative comparisons with third-party studies, statistics or official electrical grid maps, these experts gather all insights about data quality. They are capable of comaring different validation results to approve, release and version control electrical grid data. They can compare different validation results in order to approve, release and control the version of electrical grid data. This allows them to update the community on any significant grid data issues that have been identified.


12. **AI-Assisted Random Sample and Field Validation (Under Construction)**

    We use AI to detect and validate unmapped infrastructure and existing infrastructure from satellite imagery, as well as flagging anomalies in existing data. Random samples are then validated on the ground through local partners, combining remote detection with field-level truthing.


Together, these layers of validation, spanning crowdsourcing, automation, expert review, and AI, make MapYourGrid not just a mapping initiative, but a quality-assured knowledge infrastructure for the global energy transition.

