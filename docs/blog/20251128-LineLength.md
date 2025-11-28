<div class="blog-headers">
<h1> Global Transmission Length Index, world's first open line length database</h1>
</div>
:octicons-calendar-24: November 28, 2025 by Andreas Hernandez Denyer<br>

The world’s first open and free database which tracks the high-voltage line length of almost every country’s grid is finished, which shows a significant underestimation of global line lengths. 

MapYourGrid and Open Energy Transition developed a bottom-up approach by going through reports, datasets, geospatial files, and websites of every country’s transmission system operator (TSO), electricity regulator, ministry of energy or other sources. 

**Why?**

:arrow_right: Data such as these are locked behind large paywalls, which means that the “6 million kilometres” of global transmission grid stated in the IEA’s 2025 World Energy Outlook cannot be easily verified or understood. Furthermore, our approach allows for people to add to the open database, comment if there are mistakes, update the data, and validate it since all sources are indicated. Open data and Open Source allows for stringent validation, and can guarantee higher levels of quality.

:arrow_right: We wanted to know how much of the grid is mapped in OpenStreetMap, globally, per country and per voltage level. Being able to compare this with official data, now allows the community and MapYourGrid to see the coverage missing (or not!) in detail, and to attribute a quality score to a country’s grid. 

So, in total this gives us a high-voltage grid estimate of at least 7.3 million circuit kilometres. Thus, we now estimate that around 75% of the world’s high-voltage grid is mapped in OpenStreetMap. This calculation can be done by looking at the total length in OpenStreetMap (50kv+) on [OpenInfraMap](https://openinframap.org/stats).

**Scope:**<br>
The scope of the database is high-voltage lines, with an emphasis on transmission. However, we do include high-voltage distribution lines in some countries (eg. 132kv). Definitions and standards of “transmission”, “distribution”, “high-voltage” differ between countries, which can complicate analyses and comparisons.

Indeed, for some  countries, particularly developing countries, certain high-voltage (which we define in our spreadsheet as 50kv+) will be operated and reported by the transmission system operator (TSO), such as 66kv or 115kv lines. In other countries, this will fall under high-voltage or extra high-voltage distribution. Furthermore, it is possible for distribution system operators (DSO) to operate 220kv lines, and in contrast some lines (although in terms of kilometres this will be small) at quite low voltage will be operated by the TSO. Moreover, in the International Energy Agency’s “Electricity Grids and Secure Energy Transitions” report, on page 51 you can find that transmission includes 36kv+, not 50kv+ as we do. However, in the IEA's "Building the Future Transmission Grid" report, the scope of transmission is 66kv+ for example.

In a few high-income countries, numbers for 50kV-132kV lines were hard to find. In those cases, the 50kV+ number in our database is an under-estimate (eg. US, Canada, Brazil). 
In contrast, other countries, such as China, published a high-voltage line length for all 35kV+ lines. In that case, our database may include numbers for lines below 50kV. 

Finally, we concentrated on circuit line length and not route line length. However, many countries do not specify if their reported numbers are circuit or route length, and some only disclose route lengths.

In the future, a separate sheet tab could be created to measure distribution lengths, and a clear distinction between distribution and transmission should be made in the long-term. As of now, our database includes some high-voltage distribution, but this is always indicated in the notes or calculations (if known).


**Methodology:**<br>
The workflow developed was: <br>
First, go through the transmission system operator’s (TSO) website and find the numbers there. Dedicated pages, annual reports, and network development plans were generally the best places to find the data. ‘Open data’ pages were useful too.

For many countries though this strategy did not work, so going through the ministry of energy’s reports sometimes worked, or the energy/electricity regulator too. Electricity regulators in certain cases can even be better, as many countries have multiple TSOs, which means it is faster to find the aggregated numbers in their websites/reports.

In terms of formats, some included digital atlas’ or open data (csv, geojson,shp), so numbers could be extracted there too. However, in certain cases some data processing in QGIS to calculate circuit line lengths, or to calculate line lengths per voltage level was needed (eg. UK and the numerous distribution system operators (DSO) that operate 132kv).

For most countries where needed and where possible, extra steps were taken to include high-voltage lines operated by DSOs such as Spain, Czech Republic and the UK. The ‘notes’ or ‘calculations’ section will give insights on if a country’s line length includes high-voltage distribution.

One important potential caveat, is how countries themselves measure line lengths, as incorporating the sag of the line or not can have a large impact. In the case of this spreadsheet, these potential details and distinctions per country have not been made, but could be of interest in the future.

Another important note is direct current and alternating current. For most DC voltages, a column was created. However, for 500kv both 500kv AC and DC were included in the same column. 

The operating voltage was ideally used instead of the design voltage. However, in some cases this information was not reported so it is possible that the length of one voltage range should be placed in another. Where this is the case, some notes have been written such as Malaysia, which has some 500kv operated at 275kv.

A VPN was needed for certain countries, and speaking multiple languages helps save a lot of time, but browser translations are also useful. Searching for keywords such as ‘km’, ‘kilometre’, ‘length’, ‘kv’ will be useful. However, certain reports are not text, or have a different way of typing ‘km’ for example so it would not appear in a search. Learning the short words for high voltage or extra-high voltage like ‘VVN’ in some Eastern European countries, can also save time.


**OpenStreetMap as a way to cross-validate:**<br>
Using OpenStreetMap, and particularly our quality grid health score, was a very good way to validate: the correct voltage level if a range is given by the official data, find cases where high-voltage is operated by DSOs too, validate if the numbers given are route-km or circuit-km, and see if the official data makes sense or is outdated. An example is India, where its official data lumped 220kv and 230kv together, but almost all lines mapped in OpenStreetMap have been tagged as 220kv. I also managed to find mistakes in the reporting of the official data (double counting) for certain countries.

**Interpretation of the coverage quality health score:**<br>
In our [globe health score](https://mapyourgrid.org/quality/), we include the coverage score which compares circuit length of OpenStreetMap data and the official data present in the spreadsheet, per country and per voltage if available.

One important thing to keep in mind is that we are measuring circuit line length, not just route. This means that in the health score, many kilometres of lines seemingly might be missing, but this could just be that lines are not tagged with the appropriate ‘circuit’ tag. A good example is when the quality score says exactly 50% for a given voltage. Here it is likely that all the lines in terms of coverage have been mapped, but that all these lines have 2 circuits in reality, and have not been tagged. So simply tagging the lines with ‘circuits=2’, would double the circuit line length, and reach a 100% quality score.

Another important thing to consider is the voltage tag, as lines not tagged with voltage, will obviously not be compared with the length of the official data. Therefore, it is possible that lines have physically been mapped, but due to a missing voltage tag, the coverage score will be much lower.

What can help to see if the issue is just tagging, or the actual coverage of lines is missing, is by looking at the ‘quality’ score, specifically the proportion of lines missing voltage tags and circuit tags. If this score is high, but coverage is low, then it is clear that lines are missing and need to be mapped.


**You can contribute!**<br>
The [database](https://docs.google.com/spreadsheets/d/1qmVIQ2_ynVVfbTWcMXJQWb4Sq0Dq-1fu8zgZ9J_0cZI/edit?usp=sharing) is fully open and under a CC BY 4.0 License. Which means you can add comments for any country, with a link or a number and its source if you have better and more updated numbers. Other comments can be made, if a mistake was made. 

Find it [here](https://mapyourgrid.org/global-grid-data/#__tabbed_1_5).

**Sources mentioned** <br>
1. IEA 2023: [Electricity Grids and Secure Energy Transitions](https://iea.blob.core.windows.net/assets/ea2ff609-8180-4312-8de9-494bcf21696d/ElectricityGridsandSecureEnergyTransitions.pdf) <br>
2. IEA 2025: [World Energy Outlook 2025](https://iea.blob.core.windows.net/assets/0a7a40a4-5dcb-4d6e-a7ad-76a1c90ec8eb/WorldEnergyOutlook2025.pdf) <br>
3. IEA 2025: [Building the Future Transmission Grid](https://iea.blob.core.windows.net/assets/744ff0bb-905a-4f9f-83e3-2d04ce99e09c/BuildingtheFutureTransmissionGrid.pdf)