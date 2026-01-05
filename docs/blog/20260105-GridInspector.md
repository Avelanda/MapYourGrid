<div class="blog-headers">
<h1>GridInspector: A Global Diagnostic of Open Power Grid Data
</h1>
</div>
:octicons-calendar-24: January 5, 2026 by Marina Petkova <br>

<!-- <div class="starter-kit-buttons">
  <a href="#power-grid-data-quality-is-a-global-blind-spot" class="btn btn-primary"> Power grid data quality is a global blind spot</a>
  <a href="#a-recurring-question-we-could-not-answer-reliably" class="btn btn-secondary"> A recurring question we could not answer reliably</a>
  <a href="#introducing-gridinspector-a-shared-lens-on-data-quality" class="btn btn-secondary"> Introducing GridInspector: a shared lens on data quality</a>
  <a href="#clarity-over-complexity" class="btn btn-secondary"> Clarity over complexity</a>
  <a href="#who-gridinspector-is-built-for" class="btn btn-secondary"> Who GridInspector is built for?</a>
  <a href="#what-gridinspector-measures" class="btn btn-secondary"> What GridInspector measures?</a>
  <a href="#what-gridinspector-changed-for-mapyourgrid" class="btn btn-secondary"> What GridInspector changed for MapYourGrid?</a>
  <a href="#what-do-the-results-teach-us" class="btn btn-secondary"> What do the results teach us?</a>
  <a href="#how-we-made-this-possible" class="btn btn-secondary"> How we made this possible?</a>
  <a href="#what-comes-next-and-why-further-funding-matters-now" class="btn btn-secondary"> What comes next and why further funding matters now?</a>
  <a href="#in-a-nutshell" class="btn btn-secondary"> In a nutshell</a>
</div> -->
  
### <div class="tools-header"> Power grid data quality is a global blind spot </div>

[OpenStreetMap (OSM)](https://www.openstreetmap.org/) is today the only globally unified, openly accessible, harmonized database describing power grid infrastructure. It is increasingly used in research, planning, development projects, and exploratory energy analysis. 

Yet, one fundamental issue remains largely unaddressed: data quality is uneven, difficult to assess, and rarely comparable across countries. 

Visual completeness can be misleading, and the apparent presence of infrastructure does not necessarily imply that the data is structurally correct, sufficiently attributed, or usable for analysis.

So when data quality is assumed rather than measured, this uncertainty can lead to fragile analyses, incorrect conclusions, and limited trust from institutional or technical stakeholders.
This situation raises a recurring and practical question.

### <div class="tools-header"> A recurring question we could not answer reliably </div>
***Can OpenStreetMap power grid data be used with confidence, and under which conditions?***

Despite the growing use of OpenStreetMap, answering this question at scale has proven difficult. Existing quality assurance tools focus on local or object level issues, while academic studies are often one off, country specific, and not easily reproducible. Practitioners, contributors, and institutions lack a shared, accessible framework to assess data quality consistently across territories.

And it was this gap between usage and confidence that was the starting point for [GridInspector](https://mapyourgrid.org/quality/).

### <div class="tools-header"> Introducing GridInspector: a shared lens on data quality </div>

<div style="max-width: 1200px; margin: 2rem auto; display: flex; gap: 1.5rem;">
  <div style="flex: 1;">
    <img 
      src="/images/blog-illustrations/GridInspector-Quality-Europe-Africa-Asia.png" 
      alt="GridInspector's Quality view" >
    <div style="text-align: center; font-style: italic; color: #036d7a; margin-top: 0.5rem; margin-bottom: 1rem;">
      GridInspector's Quality view across Europe, Africa and Asia.
    </div>
  </div>
  <div style="flex: 1;">
    <img
      src="/images/blog-illustrations/GridInspector-Coverage-Europe-Africa-Asia.png"
      alt="GridInspector's Coverage view"
      style="width: 100%;">
    <div style="text-align: center; font-style: italic; color: #036d7a; margin-top: 0.5rem; margin-bottom: 1rem">
      GridInspector's Coverage view across Europe, Africa and Asia.
    </div>
  </div>
</div>

[GridInspector](https://mapyourgrid.org/quality/) is an experimental, open platform designed to assess the quality of OpenStreetMap power grid data at a global scale.

To our knowledge, it is the only initiative offering a systematic, consistent, and cross country comparable assessment of OpenStreetMap power grid data quality.

GridInspector is a rule-based quality assessment tool. It does not aim to replace existing OSM data quality tools. Instead, it provides a complementary perspective: a high level diagnostic that makes data quality visible, comparable, and discussable across countries.

From the outset, it was designed as a shared lens rather than an expert only instrument.


### <div class="tools-header"> Clarity over complexity </div>
Our objective was not to build a complex technical audit or a black box scoring system, but rather to provide a clear, visual, and synthetic overview of data quality and coverage at a glance.

This choice was intentional. Data quality indicators only become useful when they are understandable, reproducible, and actionable by a broad range of actors. By prioritizing clarity over complexity, GridInspector aims to support coordination, prioritization, and collective decision making.

The underlying methodology is generic by design and can be adapted to other infrastructure domains such as water, transport, or telecommunications.

### <div class="tools-header"> Who GridInspector is built for? </div>
GridInspector was built with a diverse audience in mind, because data quality is a shared concern:

* Researchers and practitioners working on energy systems, networks, or geospatial data;
* Transmission System Operators (TSOs) seeking to consolidate or benchmark their internal datasets;
* Governments and public institutions supporting energy planning and territorial diagnostics;
* Engineering and installation companies in early stage studies or market exploration;
* NGOs and international development actors identifying priority areas for intervention;
* OpenStreetMap contributors, to understand where their efforts will have the greatest impact.

Designing for this diversity strongly influenced the choice of indicators and the way results are presented.

### <div class="tools-header"> What GridInspector measures? </div>
GridInspector goes beyond counting line kilometers. It aggregates eleven indicators, grouped into two complementary categories. The first focuses on internal consistency. These indicators assess whether power grids are logically and structurally sound, including connectivity between lines and substations, the presence of key attributes such as voltage, number of cables and circuits, the use of circuit relations, and the continuity of the electrical graph.

The second focuses on completeness against reference data. When official datasets are available, GridInspector compares OpenStreetMap with these sources and highlights gaps between declared and mapped line lengths by voltage level. All reference datasets used are documented transparently, in our [Global Grid Data list](https://mapyourgrid.org/global-grid-data/), as well as in the [Global Transmission Length Index](https://docs.google.com/spreadsheets/d/1qmVIQ2_ynVVfbTWcMXJQWb4Sq0Dq-1fu8zgZ9J_0cZI/edit?usp=sharing). 

Some indicators are derived from [Osmose](https://osmose.openstreetmap.fr), the native OpenStreetMap quality assurance tool, while others were developed specifically for this project. 

The rules underlying GridInspector were defined and stabilized progressively over several months, through iteration and confrontation with real world use cases. All of them are documented on [this Wiki Page](https://wiki.openstreetmap.org/wiki/Power_networks/Quality_Assurance). Some indicators evolved as we tested them across diverse national contexts, adjusted thresholds, and aligned them with established practices within the OpenStreetMap community.
This iterative process was essential to ensure that indicators remained meaningful, comparable, and robust.

### <div class="tools-header"> What GridInspector changed for MapYourGrid? </div>
For us, GridInspector is a decision making instrument, rather than a simple analysis tool. It enabled us to prioritize countries and regions where mapping efforts would deliver the most value, track the effectiveness of contributions over time, objectively measure progress, and structure related projects such as Podoma.

Concrete results illustrate this impact. Coverage increased from 69.4 percent to 98.3 percent in Bulgaria, and from 66.5 percent to 82.8 percent in Colombia. Overall data quality improved by 10 to 20 points in these countries. Many other territories show significant progress, documented on our [Progress page](https://mapyourgrid.org/progress/).

<div style="max-width: 1200px; margin: 2rem auto;">
  <img 
    src="/images/blog-illustrations/GridInspector-Americas-Colombia.png" 
    alt="Screenshot of Quality indicators in Colombia" >
   <div style="text-align: center; font-style: italic; color: #036d7a; margin-top: 0.5rem; margin-bottom: 1.5rem;">
    A screenshot from GridInspector showing Quality indicators for Colombia.
    </div>
</div>

These outcomes confirm that focused contributions guided by clear indicators are far more effective than unguided mapping efforts.

<div style="max-width: 1200px; margin: 2rem auto;">
  <img 
    src="/images/blog-illustrations/GridInspector-Josm-QualityChecks-Mapping.png" 
    alt="JOSM screenshot showing missing attributes identified using GridInspector" >
   <div style="text-align: center; font-style: italic; color: #036d7a; margin-top: 0.5rem; margin-bottom: 1.5rem;">
    GridInspector helped us double-check data quality against our mapping experience and identify priority tagging attributes.
    </div>
</div>

### <div class="tools-header"> What do the results teach us? </div>
One of the most counterintuitive findings is that the **quality** of OpenStreetMap data is not always correlated with the level of power grid development, but depends on the strength of the OpenStreetMap community in a given country. While well-structured datasets exist in [Mexico](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=MX), [Brazil](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=BR), [Thailand](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=TH), [Egypt](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=EG), countries such as [Canada](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=CA), [Spain](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=ES), and [Italy](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=IT) still show substantial room for improvement.

Globally, the main weakness is the lack of information regarding line voltage, the number of cables and the number of circuits across many parts of the network. It is challenging to derive these attributes from aerial imagery alone, and they require either local knowledge or an advanced understanding of power grid mapping. Most general OpenStreetMap contributors are not necessarily familiar with how to reliably derive and tag them.

In terms of completeness, several Sub Saharan African countries now reach very good **coverage** levels, including [Tanzania](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=TZ), [Zambia](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=ZM), [the Democratic Republic of Congo](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=CD), [Kenya](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=KE), [Namibia](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=NA), [Mozambique](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=MZ), and [Ethiopia](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=ET). 

By contrast, [China](https://apps.dynartio.com/mapyourgrid/gridinspector.html?country=CN) represents the largest blind spot in global coverage. A significant share of its transmission network is missing from OpenStreetMap. Given the scale of the Chinese grid, this strongly affects global figures. Overall OpenStreetMap power grid completeness is currently around 76 %, and would be at around 85 % if we exclude China from the equation.

### <div class="tools-header"> How we made this possible? </div>
These insights are the result of several months of technical work. Building GridInspector required collecting and harmonizing heterogeneous data sources, constructing country level connectivity graphs, automating indicator computation through Python scripts, and publishing results via an interactive Mapbox map.

The platform also orchestrates interactions with other tools such as [Osmose](https://osmose.openstreetmap.fr), [Overpass](https://overpass-turbo.eu/), [Podoma](https://mapyourgrid.infos-reseaux.com/dashboard/), [WikiData](https://www.wikidata.org/wiki/Wikidata:Main_Page) and [OpenInfraMap](https://openinframap.org). This work involved multiple iterations and technical trade offs to ensure reproducibility and scalability. All indicators were compared qualitatively and quantitatively with the mapping experience in different countries.

All processing code is open source and publicly available on [GitHub](https://github.com/ben10dynartio/gridinspector/)

### <div class="tools-header"> What comes next and why further funding matters now ? </div>
While the core components of GridInspector are now in place, many extensions are possible. Further developments include:

* Adding new indicators derived from additional power grid validation rules;
* Analyzing substation completeness including names, identifiers, operator and Wikidata IDs;
* Analyzing the recent active power mapping community and the number of mappers compared to the size of the national grid;
* Integrating and assessing power generation facilities issues from osmose and issues created by [OSM Power Plants](https://github.com/open-energy-transition/osm-powerplants);
* Producing regional level analyses at state or provincial scale;
* Improving UX and UI, as well as developing a mobile version;
* Exploring image processing to detect substations and lines, and estimate the accuracy of geographic mapping;
* Using the voltage for dynamic threshold and dynamic health score weighting; 
* Integrating and cross-validating completeness values from [ohsome](https://stats.now.ohsome.org/dashboard#hashtag=&start=2025-01-05T00:00:00Z&end=2026-01-05T11:09:33Z&interval=P1M&active_topic=contributor&countries=&topics=contributor,edit,building,road).

But, sustaining and expanding GridInspector requires resources. Maintaining data pipelines, refining indicators, improving usability, and validating the tool through real world applications are ongoing efforts.

At this stage, external use cases, institutional partnerships, and dedicated funding would allow GridInspector to move from a promising prototype to a widely adopted reference tool for open power grid data.
Like everything we do, GridInspector is intended as a shared resource, shaped collectively by those who rely on open energy data. We are now actively looking for users, researchers, institutions, and partners interested in testing GridInspector, providing feedback, contributing ideas, or co developing new use cases.

### <div class="tools-header"> In a nutshell</div>
GridInspector offers a structured, comparative, and actionable way to assess OpenStreetMap power grid data quality. It helps identify where data is robust enough to be used directly,
and where mapping efforts should be focused to improve it. It is a tool designed for the community, researchers, grid operators, and anyone aiming to build solid energy analyses on top of open data.

More broadly, it demonstrates how open data quality can be assessed transparently and collaboratively. The foundation is in place. The next step is to prove its value at scale, together.

    


