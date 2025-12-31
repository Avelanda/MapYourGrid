<div class="page-headers">
<h1>Frequently Asked Questions</h1>
</div>

Here is a compilation of the most frequently asked questions we receive. 

<div class="starter-kit-buttons">
  <a href="#general-questions" class="btn btn-primary"> General Questions</a>
  <a href="#contribution-in-openstreetmap" class="btn btn-secondary"> Contribution in OpenStreetMap</a>
  <a href="#power-grid-mapping" class="btn btn-secondary"> Power Grid Mapping</a>
</div>

If you have further questions or inquiries you can directly contact <a href="mailto:MapYourGrid@openenergytransition.org" target="_blank" rel="noopener">us via email</a>.

---

## <div class="stradegy-header">General Questions</div></h3>

### <div class="tools-header">Who are you? What is MapYourGrid?</div>

MapYourGrid is an open, collaborative initiative that aims to map electricity grids around the world, focusing on high-voltage transmission lines, substations, power plants, and major energy consumers. The initiative is contributing all its data to [OpenStreetMap](https://www.openstreetmap.org/) to make it globally accessible and verifiable.

### <div class="tools-header">What is included in the Scope of the Project?</div>

Our main focus is mapping transmission power grids, primarily power lines and cables, and connecting them to substation perimeters. We map transmission lines that link cities. The transmission grid infrastructure is so large that it can be traced and mapped using open satellite images. However, the distribution grid cannot be mapped sufficiently well using open satellite images alone and therefore requires strong collaboration with local communities and authorities. For this reason, this is not currently our main focus.

### <div class="tools-header">Won't all of this be solved by AI soon?</div>
To ensure data quality, each data point in OpenStreetMap must be set and validated by a human. This prevents OpenStreetMap from becoming flooded with synthetic, unvalidated data that would not be suitable as ground truth in the long term. Furthermore, there are currently no detection methods that can accurately identify power towers and the course of transmission lines using classic RGB satellites alone. Grid mapping is a task that requires a high degree of expertise and contextual understanding. Due to the high relevance of this data, stochastic generation of the grid by AI is also not recommended. To validate this data, specialists must perform active grid mapping. However, we are currently evaluating the use of [open-source substation detection based on Sentinel 2 data](https://github.com/Lindsay-Lab/substation-seg) to provide another hint layer of substations for the mappers. 


### <div class="tools-header">Does Publishing this Data Create a Security Risk?</div>

No, publishing grid data through MapYourGrid does not meaningfully increase security risks. This concern is understandable because electrical grids are critical infrastructure. However, multiple studies and real-world practices show that open grid data does not elevate threat levels, for several key reasons:

* Much of the grid is already visible and documented. Transmission lines are easily observable in satellite imagery and by anyone on the ground. Most substations are already in platforms like Google Maps. Major institutions, including government agencies, have publicly shared detailed grid data for decades.

* Sophisticated actors already have better data. State-sponsored or malicious actors do not rely on OpenStreetMap. They have access to more advanced tools, commercial imagery, or even insider or cyber channels. Blocking public access doesn’t prevent their activity, but it hinders legitimate use.

* Open data helps defenders more than attackers. Transparency allows utilities, researchers, and planners to spot weaknesses, model failures, and improve resilience. Public access to routing data supports cross-border planning and faster emergency response.

* “Security through obscurity” doesn’t work. Hiding infrastructure details often impedes innovation and risk mitigation. As noted by the U.S. National Institute of Standards and Technology (NIST), obscurity is not a reliable security strategy.

MapYourGrid builds on a decade of public infrastructure mapping, including global comparisons showing alignment with government datasets. Our mission is to democratize access for resilience, transparency, and innovation, not to expose anything adversaries don’t already know. Our [Mapping good practices](mapping-good-practices.md) outlines the shared values, responsibilities, and safe practices for individuals and organizations participating in grid mapping activities in OpenStreetMap. It is designed to safeguard communities, promote transparency, and protect sensitive areas while enabling open data for global development and energy resilience.

Read more on responsible grid mapping and understanding risks and mitigation on our [Impact Page](impact.md/#responsible-grid-mapping-understanding-risks-and-mitigation).


### <div class="tools-header">How is Data Quality and Validation Assured?</div>

MapYourGrid builds on OpenStreetMap’s principle of [verifiability](https://wiki.openstreetmap.org/wiki/Verifiability), meaning all data must be observable and confirmable by others. Quality is ensured through:

* Automated checks using tools like [JOSM Validator](https://josm.openstreetmap.de/wiki/Help/Dialog/Validator) and [Osmose](https://wiki.openstreetmap.org/wiki/Osmose).
* Visual and tagging guidelines for consistent mapping.
* Optional human reviews via the `#MapYourGrid` tag in OSM.
* Analysis tools like [ohsome stats](https://stats.now.ohsome.org/) to detect gaps or anomalies.
* Expert validation and random sample checks.

Together, these methods help maintain a reliable, crowdsourced electrical grid dataset. [Read more about our Quality Assurance and Validation](strategies.md/#quality-assurance-and-validation).


### <div class="tools-header"> What are the Roles of the Team Members? </div>

We are developers, data scientists, power grid experts, cartographers and OpenStreetMap contributors. Our roles range from software development and data modelling to community coordination and field knowledge. The core MapYourGrid team sees itself as a fertiliser for the community. We build bridges between individuals and organisations, create mapping tools, document strategies and good practices, and develop training materials. In order to test our own material and gather experience, we map all around the world in order to understand the needs of the diverse community.

### <div class="tools-header"> What is the Business Model of the Project? </div>

MapYourGrid is a non-profit initiative funded by several smaller organisations that use this data for other open-source tools, making further contributions in OSM easier and helping maintain data quality over time. 

### <div class="tools-header"> What is the Governance of MapYourGrid? </div>

MapYourGrid is led by [Open Energy Transition](https://openenergytransition.org/), a non-profit, and supported by [Datactivist](https://datactivist.coop/en/), [Jungle Bus](https://junglebus.io/en), [Dynartio](https://dynartio.com/) and [Infogeomatics](https://www.infrageomatics.com/). We are aligned with the values of OpenStreetMap's ecosystem and we act for a shared governance of the project within the community. The establishment of an official MapYourGrid governance board is planned for late 2025. Would you like to join or support us? Contact <a href="mailto:MapYourGrid@openenergytransition.org" target="_blank" rel="noopener">us via email</a>. 

### <div class="tools-header"> Why do we prioritize Transmission Lines?  </div>

The fastest way to broaden our impact right now is to map transmission power grids. Many aspects like the distribution grid substations will be added later to make the data more detailed and actionable.

### <div class="tools-header"> Why do you do this? Why does this matter?  </div>

Transparent, accurate data on energy infrastructure is essential for climate resilience, energy planning and equity. In low and middle-income countries, most of this data is locked or missing. We aim to change that. Read more about the impact we are creating on our [Impact](impact.md) page. 

### <div class="tools-header"> Who are you doing this for ? Who is using this Data ?  </div>

Everyone can use the data and tools we are creating.

In particular, transmission grid open data can be used by governments, utilities, energy modelers, researchers, companies and non-profits, individuals, and so on. If you're interested in concrete examples of how OSM grid data is being used, check out the dedicated section on our [Impact](https://mapyourgrid.org/impact/#who-is-using-openstreetmap-grid-data) page.


### <div class="tools-header"> How is this Project helping with Decarbonation ? </div>

Decarbonisation relies on renewables like wind, solar, hydro, etc. These technologies can be land-intensive and require large areas for generation sites. Those sites are often far from where electricity is actually consumed : cities, industries, and households. To integrate renewables at scale, energy planners need to know where new lines can connect generation to demand, where the grid must be reinforced, and where investment will deliver the biggest impact.

Thus, by mapping today’s infrastructure in a consistent, global format, we aim to enable better planning of renewable deployment, electrification strategies, and long-term investment decisions that are essential for decarbonisation.

### <div class="tools-header"> What Countries are covered by the Project?  </div>

Our project is global. Currently, we mainly focus on low and middle-income countries where public data may be scarce and energy planning needs are high. 

### <div class="tools-header"> Why would we need to map the Power Grid? Don't Governments and/or Utilities already have Maps that show exactly where their Infrastructure is ?</div>

Not always. In many low- and middle-income countries, up-to-date and accessible grid maps simply do not exist. Even in some high-income regions, the information can be fragmented, outdated, or hard to access.

For utilities and governments, compiling comprehensive maps is often a major challenge. Data is scattered across multiple private and public actors, and many organisations still rely on expensive proprietary datasets just to get a basic picture of their own infrastructure.

This is why open, standardised transmission grid data is so important. By making the grid accessible through OpenStreetMap, it creates a global, consistent reference that anyone can use, from policymakers and researchers to local planners and citizens.

### <div class="tools-header"> How do you map all those Power Grids? </div>

We use a variety of sources, primarily satellite imagery, as well as other open data, academic articles and crowdsourced information from OpenStreetMap, to enhance our knowledge. 
We are also building a 100% Open Source Toolchain to map the global electrical grid using:

1. [OpenStreetMap](https://www.openstreetmap.org/) as a database.
2. [JOSM](https://josm.openstreetmap.de/) as a OpenStreetMap editor.
3. [Open Infrastructure Map](https://openinframap.org/#2/26/12) for visualisation of utilities infrastructure data from OSM.
4. [Osmose](https://wiki.openstreetmap.org/wiki/Osmose) for validation and quality assurance.
5. [mkdocs material](https://squidfunk.github.io/mkdocs-material) for the website.
6. [Leaflet](https://github.com/Leaflet/Leaflet) for the interactive map.

Find out more on all tools and repositories that we have integrated on [GitHub - open-energy-transition/MapYourGrid: We empower individuals, communities and nations around the world to map the electrical grid.](https://github.com/open-energy-transition/MapYourGrid)

We are actively working on developing and integrating other existing Open Source tools to enhance the toolchain.

### <div class="tools-header">There are already many Grid Datasets out there; why not just use those? </div>

It’s true that many grid datasets exist, but they are rarely harmonised and most are locked behind proprietary licences, which means they cannot be reused freely without explicit permission.

OpenStreetMap provides high-quality, globally consistent grid data that follows common data standards. This consistency is essential when modelling large-scale energy systems across regions.

On top of that, OpenStreetMap data is published under the Open Database Licence (ODbL), which allows sharing, adapting, and building upon the data, as long as attribution is given, derivative data is shared alike, and everything remains open.

### <div class="tools-header">Isn’t it easier if Governments and/or Utilities just integrated their Grid Data into OSM, instead of re-mapping everything by hand? </div>

OpenStreetMap is not a simple data repository where files can be uploaded. Large-scale imports are generally discouraged by the community because of concerns about data quality, licensing restrictions, and long-term maintenance.

Every element in OSM must be verifiable, accurately located, and integrated consistently with existing map features. That requires human verification, which is why the role of mappers is so important.

That said, utilities and governments are welcome to collaborate: if their datasets are compatible with OSM’s licence and standards, they can be used as reference material by volunteers, helping speed up the mapping process while ensuring the data remains open, accurate, and community-maintained.

### <div class="tools-header">Why would Individual Volunteers do this ? </div>

OpenStreetMap volunteers have been mapping the world’s power grid for almost 20 years. Thanks to millions of contributors, around 70% of the global grid is already in OSM. MapYourGrid is here to support the community with even better tools and clearer documentation to help complete the remaining 30%, which is the most challenging part.

---

## <div class="stradegy-header">Contribution in OpenStreetMap </div></h3>

### <div class="tools-header"> How can I join the Project? </div>

Start by contributing to OpenStreetMap (OSM). Additionally, you can get involved in local OSM communities, join our free mapping workshops and connect with us on [Discord](https://discord.gg/a5znpdFWfD). 

### <div class="tools-header"> What Skills do I need to Contribute? </div>

For general mapping, you need basic mapping skills and understanding of OSM, the ability to read and map over satellite images. Local knowledge and/or language skills with regards to the country/area you would like to map are much appreciated. 

If you are a developer, you can also help us improve mapping and quality assessment tools.  

An understanding of the energy context and power grid composition is a strong asset, that can be acquired. 

We also host regular training sessions in order to help contributors develop their skills and feel more confident.

### <div class="tools-header"> I have Information about my Country's Power Grid, but I'm not sure if it's Open Data. Can I use it for grid mapping ? </div>

Check the credibility of the source and the licensing terms before using it as a source in OpenStreetMap. Some sources may be inaccurate, outdated, or incompatible with OSM’s licensing. Whenever possible, it's best to ask the data provider for explicit permission to use or reference their data, especially if the licensing is unclear. When in doubt, discuss with the local OSM community before using or referencing external data. 

### <div class="tools-header"> I have found open data regarding my country. How can I share it?</div>

Check out the relevant [Country page on the OSM Wiki](https://wiki.openstreetmap.org/wiki/Power_networks#Local_projects). We've reported all data sources there we're aware of there. Help us enrich and verify existing information.


### <div class="tools-header"> Is open data always reliable? </div>

Open data quality varies. Cross-check it when possible. If you're local, field verification can be a great way to do so.

### <div class="tools-header"> Can I import any Data into OpenStreetMap? </div>

Bulk imports are strongly discouraged and must follow strict OSM guidelines. Contact your local OSM communities before attempting imports.  

### <div class="tools-header"> What is the Licence of the Data you are creating and using ?</div>

We're co-creating and using OpenStreetMap data. OSM data is under the licence Open DataBase Licence (OBDL) that you can find more information and official sources on here : [Open Database License — OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Open_Database_License)

The MapYourGrid website, documentation and tools are licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/).

### <div class="tools-header"> Can I reuse OpenStreetMap data?</div>

Yes, as long as you credit OSM properly. Note that if you improve OSM data, you need to publish the improvements with the appropriate licence so that they can profit the OSM community. For more information, refer to the OSM Foundation attribution guidelines on the [OSM Foundation website](https://osmfoundation.org/wiki/Licence/Attribution_Guidelines).

### <div class="tools-header"> What are you doing with the Data you've created ? What Product is the Data fueling ?</div>

Everything mapped goes directly into OpenStreetMap. From there, the data is used in open tools like [Open Infrastructure Map](https://openinframap.org/#2/26/12) and open-source modelling frameworks such as [PyPSA](https://pypsa.org/#home) for large-scale energy system planning.

The purpose of creating this data is not to fuel a single product, but to support local and regional planning, provide a solid foundation for scientific research, and feed into open-source tools that make contributing easier while helping to maintain data quality over time.

### <div class="tools-header"> What are iD, JOSM and Osmose you talk about? </div>

These are tools for editing and validating data in OSM:

* [iD](https://openstreetmap.org): browser-based and beginner-friendly editor. It is the editor available when you click on "edit" on the OSM website. 
* [JOSM](https://josm.openstreetmap.de/): advanced OpenStreetMap editor.
* [Osmose](https://osmose.openstreetmap.fr): quality assurance tool that detects OpenStreetMap data issues.

### <div class="tools-header"> What is a Changeset? </div>

It's a group of edits submitted to OSM at once. It also includes the time and purpose of your edits. It’s best to keep changesets small and focused. For example, limit your edits to one geographic area or one type of object (for instance power lines or substations). This makes it easier for others to understand and review your work. It also helps avoid conflicts with other contributors editing the same area.

### <div class="tools-header"> How do I credit my Contributions in OpenStreetMap for MapYourGrid?</div>

Add the hashtag **#MapYourGrid** to the comment field in your changeset. This helps us track and showcase the community's work.

### <div class="tools-header"> Who fixes Errors I might make while Mapping? </div>

OpenStreetMap relies on community editing and review. Not every edit is systematically checked by another contributor, so contributors are expected to act responsibly. Mistakes can happen, but the OSM community trusts all contributors to map far beyond their knowledge and skill level, in order not to create extra work for others in the community.

### <div class="tools-header"> How will I know if I've made Mistakes? </div>

Before uploading your edits in JOSM, you may get validation errors and warnings, with a short explanation on what is the problem. You should resolve most (if not all) issues before finishing your upload to OSM. 

OSM tools like [Osmose](https://osmose.openstreetmap.fr/) flag potential errors. You might receive suggestions to fix or review them afterwards.

---

## <div class="stradegy-header">Power Grid Mapping </div></h3>

### <div class="tools-header"> How can I find the Voltage of a Power Line in my Country? </div>

Start with searching for official datasets published by the national grid operator. Some countries provide voltage maps or technical reports as open data.

If the data is not publicly available, consider contacting the national operator or regulatory authority to request more information.

Investigate on the ground, but always follow strict safety rules. Never approach high-voltage infrastructure or enter restricted areas.

Ask local experts. Electrical engineers, technicians, or people working in the energy sector may be able to provide reliable information based on local standards and practices.

### <div class="tools-header"> Can I get a List of all Substations in my Country to check if some are missing from OSM? </div>

You can start by investigating existing online sources, especially open data published by your country’s power grid operator. If you can’t find what you’re looking for, consider contacting the operator directly to request the release of this information as open data. Depending on national laws, legal precedents, and local practices, this may be possible. Always make sure to check the licensing and terms of use before using or sharing any data.

### <div class="tools-header"> What Details and Attributes do you expect Contributors to map?</div>

The most important elements are the lines, towers, substations perimeters and power plants.

As an extra, key attributes for power lines include voltage, number of cables, circuits, wires per bundle and operator. 

You can find an extensive documentation about which attributes to use about power features on the [OpenStreetMap wiki's Category:Power Infrastructure Guidelines](https://wiki.openstreetmap.org/wiki/Category:Power_Infrastructure_Guidelines).

### <div class="tools-header"> How much Time will it take to Contribute?</div>

You can make quick edits in minutes (add a power tower here or there, add attributes on already mapped infrastructure). However, if you would like to map in detail, you'll need more time and a deeper understanding of the matter, so consider it a long-term contribution.

### <div class="tools-header"> While on the Field, do I need to get close to Electric Infrastructure to map it? </div>

No, never approach high-voltage infrastructure like substations, lines, power towers. They can be extremely dangerous and pose risks of falling objects or people, fire, toxic exposure, electrocution and even death. Always observe from a safe distance and never trespass on private property or restricted areas under any circumstances.

### <div class="tools-header"> Are there Apps I can use while Surveying in the Field? </div>

Yes, try [Vespucci](https://vespucci.io/) (Android), [GoMap](https://apps.apple.com/us/app/go-map/id592990211) (iOS), [Panoramax](https://gitlab.com/panoramax/clients/mobile-app/) or [Baba](https://gitlab.com/ravenfeld/baba) for capturing geolocated photos. [StreetComplete](https://streetcomplete.app/) offers simple mapping quests on the field. While it doesn't include energy-related tasks, you can still use it to leave notes on the map. For example, you can flag a power tower or a substation for later editing from a desktop tool. [Organic Maps](https://organicmaps.app/) or [CoMaps](https://www.comaps.app/) mobile apps can also be used to leave notes on the map. Don't forget to add #MapYourGrid in your text note.
