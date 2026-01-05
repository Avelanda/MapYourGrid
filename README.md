# MapYourGrid
**We empower individuals, communities and nations around the world to map the global electrical grid.** <br>

> This is the repository of the [MapYourGrid website](https://MapYourGrid.org/)

## Why?
<img src= https://raw.githubusercontent.com/open-energy-transition/MapYourGrid/refs/heads/main/docs/images/logos/MapYourGrid-logo.png align="right" width="350">
Energy from fossil fuels are by far the largest contributor to climate change, accounting for over 75 % of global greenhouse gas emissions. Migrating away from fossil energy sources requires the rapid extension and modernization of the electrical grid, which is currently one of the main bottlenecks to decarbonising our energy. <br></br>

Despite the urgent need to expand the global electricity grid, the industry has been unable to establish an open data standard for the exchange of transmission grid routing data and specifications across borders. In recent years, OpenStreetMap has established itself as the unofficial de facto standard in academia and industry for cross-border transmission and distribution grid data. For developing countries in particular, the quality and coverage of grid data is inadequate. Closing this gap is not only essential for providing stable energy supply to rural communities, it is also key to mitigating climate change, a key recommendation of the International Energy Agency's latest report:

> _Improve data reliability and availability to better assess and manage risks for clean energy projects in emerging market and developing economies._

[Taking Stock to Taking Action: How to implement the COP28 energy goals](https://iea.blob.core.windows.net/assets/f2f6dbe0-ee3d-4ffc-ac8b-b811a868b9b1/FromTakingStocktoTakingAction.pdf)

That's why we have launched this open initiative, working with the OpenStreetMap community, organisations and individuals around the world to not only create an [open digital twin of the European grid](https://www.nature.com/articles/s41597-025-04550-7), but also **to expand the global coverage of the transmission grid in OpenStreetMap from around 70% to 98% over the next three years.**

## How you can get involved?
Your support can make a significant impact on closing the data gap in the electricity grid. The MapYourGrid initiative will empower you! Are you good at online research? Do you like programming? Do you want to recognise power towers and other electrical infrastructure on satellite images? Do you want to use this data for a climate mitigation or the electrification of rural communities? We can help you find the right contribution for your skills and experience:

Check out how you can [contribute here](https://github.com/open-energy-transition/MapYourGrid/tree/main?tab=contributing-ov-file)!

When you make an edit, please use the **#MapYourGrid** in the changeset to help the initiative!

⚠️ **If you're eager to get started with transmission grid mapping in OpenStreetMap, check out the [Grid Mapping Starter Kit](https://mapyourgrid.org/starter-kit/) and [our community discord channel](https://discord.gg/a5znpdFWfD).** ⚠️


## Contribute to this website

1. [Install uv](https://docs.astral.sh/uv/getting-started/installation/) on your machine

2. Clone this repository from your fork of this repository:
```bash
git clone git@github.com:open-energy-transition/MapYourGrid.git
```
3. Create a branch to work on:
```bash
git checkout -b "your-branch-name"
```
4. Edit the website. mkdocs material offers [comprehensive documention](https://squidfunk.github.io/mkdocs-material/getting-started/).

5. Run the website on your machine:
```bash
cd MapYourGrid
uv run mkdocs serve
```

6. Open http://127.0.0.1:8000/ in your browser to see your changes. If you change a file, the website is automatically recreated.

7. Commit your changes and push:
```bash
git add your-filename
git commit -m "my commit message"
git push origin your-branch-name
```

8. Create a pull request.

## Related Repositories 
The MapYourGrid Website combines resources from multiple repositories:
1. [Awesome-Electric-Grid-Mapping](https://github.com/open-energy-transition/Awesome-Electric-Grid-Mapping) - A curated list of global electrical grid maps, datasets and resources, integrated into the MapYourGrid Data page. 
1. [ColorMyGrid](https://github.com/open-energy-transition/color-my-grid) - Definition of default MapYourGrid MapCSS files and tools for generating customized MapCSS styles for electrical transmission networks in JOSM (Java OpenStreetMap Editor).
1. [osm-grid-definition](https://github.com/open-energy-transition/osm-grid-definition) - This is repository contains all the overpass queries linked to the MapYourGrid Map It📍 page.
1. [ValidateMyGrid](https://github.com/open-energy-transition/validate-my-grid) - Transmission Grid Validation Rules for JOSM 
1. [Grid Inspector](https://github.com/ben10dynartio/apps_mapyourgrid) - Inspect the Data Quality of Transmission Grid data in OpenStreetMap. 
1. [Osmose QA](https://github.com/osmose-qa/osmose-backend) - QA analyses of OpenStreetMap data.
1. [osm-wikidata Toolset](https://github.com/open-energy-transition/osm-wikidata-toolset) - This repository contains a set of tools to extract, transform and analyze wikidata electricity infrastructure information and asses its potential integration to Open Street Map.
1. [Wikidata QID Generator](https://github.com/open-energy-transition/wikidata_qid_generator) - The Wikidata QID Generator automates the transformation of national electricity lines and circuits datasets into QuickStatements (QS) files for Wikidata batch upload.
1. [KPI Tracker tools](https://github.com/open-energy-transition/KPI-OSM) - Includes Overpass scripts, as well as a web interface that allows you to track your progress in mapping the transmission grid on OpenStreetMap.
1. [osm-power-grid-map-analysis](https://github.com/ben10dynartio/osm-power-grid-map-analysis) - Build maps and graph analysis on OpenStreetMap power grid data 
1. [OET_dataviz](https://github.com/datactivist/OET_dataviz) - Building quality indicators for MapYourGrid and tracking transmission grid mapping in OpenStreetMap.
1. [Podoma](https://github.com/osm-fr/podoma) - The OpenStreetMap statistics engine for thematic contributions.
1. [Grid Tycoon](https://github.com/open-energy-transition/grid-tycoon) - A collaborative web application for organizing and coordinating OpenStreetMap power infrastructure mapping sessions across Indian states and territories.
1. [OSM Industrial Filter](https://github.com/open-energy-transition/osm-industries) - A Python tool for extracting and filtering industrial land use areas from OpenStreetMap data by size, with support for country-based queries and JOSM integration.
1. [OSM Power Plants](https://github.com/open-energy-transition/osm-powerplants) - Extract and process power plant data from OpenStreetMap

## Early Prototypes integrated into the MapYourGrid repository. 
1. [osmose-per-country](https://github.com/open-energy-transition/osmose_per_country) - This is a front end interface that allows fetching data on gaps in the OSM data through the OSMOSE API on a country level.
1. [gem-per-country](https://github.com/open-energy-transition/gem_per_country) - This website helps to generate country specific geojson files with Power Plants as curated by Global Energy Monitor.
1. [Grid Mapping Starter Kit](https://github.com/open-energy-transition/grid-mapping-starter-kit) - A starter kit for Electrical Transmission Grid Mapping in OpenStreetMap, combining Osmose and Overpass with JOSM.
1. [Grid Mapping Logbook](https://github.com/open-energy-transition/grid-mapping-logbook) - This repository documents the process of mapping electricity infrastructure such as transmission towers/lines/poles, generators, substations and transformers using OpenStreetMap
