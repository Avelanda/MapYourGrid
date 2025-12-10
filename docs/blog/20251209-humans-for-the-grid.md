<div class="blog-headers">
<h1> Humans for the Grid</h1>
</div>

### Why data on the electrical grid still demands actual human labor

:octicons-calendar-24: December 9, 2025 by Tobias Augspurger<br>

It has now been one year since I started mapping the electrical grid and we began planning the MapYourGrid initiative to support the OpenStreetMap (OSM) community in closing the remaining 25% of the global coverage gap. The learning curve during this year has been intense.

Coming from 15 years in logistics automation, test bench automation, and remote sensing, people were surprised that I’d devote myself to a project where **every edit must be made manually by a human**, using OpenStreetMap’s official editors. Bulk uploads aren’t allowed, except in rare cases approved by the community. Every edit must be verifiable by other mappers using publicly available imagery.

To many, this feels outdated, especially at a time when almost everyone is talking about removing humans from labor-intensive knowledge work. But over the past year, working alongside OpenStreetMap global power infrastructure community, I learned just how wrong these assumptions are. Below are the **four misconceptions** I hear most often about transmission grid mapping, the role of AI and what the past year taught me:


<div style="max-width: 800px; margin: 2rem auto;">
  <figure style="margin: 0; border: 2px solid black; display: inline-block;">
    <img 
      src="/images/MYG-JOSM.gif" 
      alt="The Electrical Grid Across India and South East Asia" 
      style="width: 100%; display: block;">
    <figcaption style="text-align: center; margin-top: 0.5rem; font-size: 0.9rem; color: #333;">
      This is a typical transmission line task: searching for the next tower. Many thanks to Sam Colchester of the Humanitarian OpenStreetMap Team for creating this GIF. <a href="https://openinframap.org/#4.7/21.08/92.05/N,P"> Open Infrastructure Map </a>
    </figcaption>
  </figure>
</div>
<br>

### **Misconception 1: “OpenStreetMap is just a giant data lake”**

OpenStreetMap is 20 years old and one of the largest citizen-driven data creation projects ever attempted. Its success is not an accident. It is the result of a unique, distributed model of data governance built around one key principle:

[**Verifiability**](https://wiki.openstreetmap.org/wiki/Verifiability): Every piece of data in OpenStreetMap must be **verifiable against open aerial or satellite imagery.** 

This means OpenStreetMap is not a dumping ground for arbitrary geospatial data. Instead, each mapping action is treated as an **independent observation and measurement**. This is what makes OpenStreetMap’s power data integrated, consistent, and usable at scale.

Allowing unverified, AI-generated data to flow freely into OpenStreetMap would quickly flood the map with low-quality, inconsistent datasets that could never be harmonised with existing data. In other words, the principles that make OpenStreetMap seem “old-fashioned” are the same principles that make its data so valuable.

### **Misconception 2: “OpenStreetMap’s power infrastructure data is of low quality”**

When we started MapYourGrid, I had my doubts too. I expected large amounts of the data to require re-mapping. For years, OpenStreetMap's power data underwent the same standard verification and quality control processes as the rest of the OpenStreetMap data. Apart from [Bobby Xiong’s 2024](https://www.nature.com/articles/s41597-025-04550-7) comparison of OpenStreetMap data and the European Network of Transmission System Operators for Electricity's official data, few large-scale assessments have evaluated its quality in a systematic way. But when we began mapping intensively, country after country, my perspective on this data drastically changed. Nearly everything that was already mapped could be verified using satellite imagery. The main issues we still can find are: 

* Gaps in lines and missing lines in regions with outdated imagery. This has been one of the main challenges we have encountered in low-income countries, particularly in Africa and Asia.  
* Missing critical attributes for energy system modelling such as voltages or number of circuits. These values are missing because they require specialised training and tools to map via imagery.

But the fundamental geometry and asset mapping? Surprisingly consistent. Our quality assurance work at the end of the year confirmed this. Using the [**Omose** QA platform](https://wiki.openstreetmap.org/wiki/Osmose), we checked for rule-based issues like voltage inconsistencies, missing tags, and mismatched substation names. [The results showed](https://mapyourgrid.org/quality/) a dataset that was already far more complete and internally consistent than most people expect it to be. And the strongest proof of quality comes from an unexpected direction: Most AI models use OpenStreetMap as ground truth.

From [satellite-based solar asset detection](https://blog.transitionzero.org/hubfs/Data%20Products/TZ-SAM/tz-sam-scientific-methodology-Q12024.pdf) to [global renewable energy monitoring](https://arxiv.org/abs/2503.14860), OpenStreetMap’s data enables AI to distinguish between true and false information about power infrastructure, including [wind turbines](https://essd.copernicus.org/articles/14/4251/2022/) and [substations](https://arxiv.org/abs/2409.17363). As part of the AI training process, existing data is re-detected by the AI and compared with OpenStreetMap data for validation purposes. Therefore, each new training set further demonstrates the high quality of OSM's data. This is the main problem we are facing. While AI developments are important for detecting and locating new and missing data, most of these developments release new datasets without contributing to the training datasets from which they have benefited. At MapYourGrid, our key role is fill this gap: To harmonise this data and return it to OpenStreetMap. We also support the community by providing [better tools and automation to help them do it](https://mapyourgrid.org/map-it/). 

<div style="max-width: 800px; margin: 2rem auto;">
  <figure style="margin: 0; border: 2px solid black; display: inline-block;">
    <img 
      src="/images/bangladesh-quality.jpg" 
      alt="The Electrical Grid Across India and South East Asia" 
      style="width: 100%; display: block;">
    <figcaption style="text-align: center; margin-top: 0.5rem; font-size: 0.9rem; color: #333;">
      <a href="https://openinframap.org/#4.7/21.08/92.05/N,P">Our Quality Dashboard</a> provides OpenStreetMap mappers and data users a global overview of the data quality. 
    </figcaption>
  </figure>
</div>
<br>

###  **Misconception 3: “Transmission grid mapping can be fully automated”**

Many have tried to fully automate power grid mapping. All have failed. After investigating hundreds of datasets around the world, we found that the most reliable sources by far are OpenStreetMap and the derived exports from [**Open Infrastructure Map**](https://openinframap.org/#3.99/20.06/94.38/N,P). Contrary to what many claim publicly, these are the only global, interregional geospatial datasets on the transmission grid that are accessible and consistently structured. Why? Because mapping the grid requires **context awareness**. Even sophisticated AI models can reliably detect only a small set of features like substations and power plants. But the rest of the essential attributes require human interpretation: Routing of circuits, number of circuits per line, voltage levels, substation and line names, relations between assets and confirmation against multiple imagery sources and documents. This dataset is simply too important and too complex to be built from unverified AI outputs.

Automation and AI is undoubtedly helpful and we rely on it heavily to provide support for mappers, detect issues and speed up workflows. But our goal at MapYourGrid is clear: **Automation should empower the local community in creating this data, not replace it.** Human-in-the-loop mapping is not a weakness; it is the only way to ensure global consistency and high-quality grid data.

### **Misconception 4: “Transmission grid mapping is dumb work”**

Early in the project, people asked if we “walk transmission lines with torches at night” or if the work could be done by unskilled turk worker. Then I began learning from transmission grid mapping experts like **François Lacombe** and **Russ Garret** what is needed for technical mapping and realized how wrong that assumption is.
Mapping the transmission grid requires:

1. Technical understanding of grid construction  
2. Local and regional context awareness  
3. The ability to interpret multiple imagery sources  
4. Domain knowledge of power systems  
5. Familiarity with industrial, renewable, and energy infrastructure

So, does this mean that inexperienced mappers cannot contribute to transmission grid mapping? No, beginners can help with the 'heavy lifting': They can trace unmapped power towers and find missing lines and power plants, but harmonising the dataset and adding the technical context requires real expertise and training. Mapping the grid is like taking a guided tour through your country’s energy system. You map dams, solar farms, rooftop solar, substations, industrial zones, and dozens of related assets along the way. 

The demand for this expertise is clear. Organizations such as DVLP.energy, Humanitarian OpenStreetMap Team, Canadian Open-source Database for Energy Research and Systems-Modelling, Western African Power Pool, Myanmar local communities, YouthMappers, The World Bank, Global Energy Monitor, World Resources Institute, PyPSA-Earth and [many more](https://mapyourgrid.org/impact/)...

...have shown strong interest in our training and OpenStreetMap’s high-quality open power data. Even in my home country, Germany, early-stage infrastructure planning provided by startups like [dvlp.energy](https://www.dvlp.energy/) depends mainly [on OpenStreetMap, simply because it’s the only comprehensive, high-quality dataset available.](https://www.pv-magazine.de/2025/01/17/start-up-des-monats-dvlp-energy-hilft-bei-der-entwicklung-grosser-photovoltaik-und-batteriespeicherprojekte/)


###  **A year in: what I’ve learned**

This year taught me that **humans are not the bottleneck** in grid mapping, they are the cornerstone. OpenStreetMap’s rules, its governance model, and its human-in-the-loop approach are not barriers to progress. They are the reason we can build a global, integrated, high-quality map of one of the world’s most complex infrastructures. The industry has failed to fill the gap and similar to the Linux Kernel we are placing a community driven approach at one of the most relevant fundamental technologies of our time. Automation will continue to help us work faster and better. But it’s people in the form of mappers, software developers, analysts, engineers, and volunteers who make the data trustworthy.

