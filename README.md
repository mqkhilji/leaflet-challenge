# USGS Earthquake Data Visualization Tool

## Background
I am excited to introduce a visualization tool developed for the United States Geological Survey (USGS). The USGS has been a primary source of data on the various natural phenomena that affect our planet, including natural hazards, ecosystem health, and the impacts of climate and land-use change. As part of their mission, they continuously collect vast amounts of earthquake data from around the globe.

Recognizing the need for a robust visualization tool that can represent this data effectively, I was tasked with creating a solution that would allow the USGS to present their earthquake data in an informative and engaging manner. This tool aims to not only educate the public and government organizations but also to support USGS in securing additional funding for their critical work.

## Visualization Task
The primary objective was to create a visualization of an earthquake dataset, showcasing the magnitude and depth of seismic events worldwide. Here's how I approached the task:

### Data Acquisition
I sourced the dataset directly from the USGS's GeoJSON Feed, selecting the "Past 7 Days - All Earthquakes" dataset. This data is updated every minute and is publicly available on the [USGS GeoJSON page](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).

### Implementation
Utilizing Leaflet, a leading open-source JavaScript library for interactive maps, I developed a map that plots each earthquake according to its geographical coordinates. The markers on the map represent the earthquakes, with their size proportional to the earthquake's magnitude, and the color indicating the depth:

- Larger markers signify higher magnitudes.
- Darker colors represent greater depths.

Each marker is interactive and, when clicked, displays a popup containing detailed information about the earthquake, including its magnitude, depth, and location.

### Legend Creation
To provide context for the visualization, I included a legend that explains the color coding related to the earthquake depths. This legend helps users understand the visual cues used on the map.

## Conclusion
The resulting tool serves as an educational and informative resource that visually communicates the data collected by the USGS. It's my hope that this visualization tool will play a part in raising awareness about seismic activity and contribute to the important conversations about our planet's health and safety.

## Data Source
The earthquake data visualized in this tool was obtained from the "Past 7 Days - All Earthquakes" dataset provided by the USGS, which can be accessed [here](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).
