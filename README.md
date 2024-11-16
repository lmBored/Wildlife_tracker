# Desc

🔎 The challenge: Forest rangers at Natuurmonumenten currently monitor various animal species using traditional methods like pen and paper. This process can be streamlined and improved. Your task is to collaborate with your team to create an app that enables forest rangers to input data directly in the field, from identifying animal species to recording their locations and numbers.

🐾 Your mission: Assist Natuurmonumenten in modernizing their nature management practices. Develop an app that simplifies the process of counting animal species, analyzing populations, and logging disturbances. By standardizing this data collection, we aim to provide forest rangers and ecologists with enhanced insights into nature management in the Netherlands.

# Requirements
## Functional Requirements
### Must have
1. Input of Observations:
The application must allow users to input observations with the following fields:
* ﻿﻿Animal species
    * ﻿﻿Fallow deer (damhert)
    * Red deer (edelhert)
    * Roe deer (ree)
    * ﻿﻿Wild boar
    * Scottish Highlander
    * ﻿﻿Wolf
* ﻿﻿Number of animals
* ﻿﻿Gender (female, male, unknown)
* ﻿﻿Age (young, adolescent, adult, unknown)
* ﻿﻿Health (score from 1 to 5, unknown)
* ﻿﻿Location based on a list of sub-areas
* ﻿﻿Date and time of observation (auto-filled but adjustable)
* ﻿﻿Username (automatically retrieved from user profile)
* ﻿﻿Remarks (a free text field for additional information)
  
### Should-have
2. Location Services:
+ The app can capture the current GPS location. If this is implemented, the location based on the list of sub-areas in the must-haves is no longer necessary.

### Could-have

3. Data Storage:
+ The data must be storable locally in case of no or poor network connection. Once a connection is re-established, the data should automatically sync to the cloud.

4. Quick Input of Observations:
* ﻿﻿The application should offer an intuitive and fast entry feature, allowing large numbers of animals to be quickly recorded.
* ﻿﻿When entering multiple animals, the user should be able to switch easily between species, ages, genders, and health scores.

5. Overview of Previous Observations:
+ Users should be able to view a summary of all observations entered at the same location to avoid duplicate entries.

### Would-have
6. Photo upload:
+ Ability to add photos to an observation, but this functionality is not mandatory.

## Non-functional Requirements
1. User-friendliness:
* ﻿﻿The solution will be evaluated on ease of use, so it must be accessible to people without technical backgrounds.
* ﻿﻿You can earn bonus points for good performance because animals can disappear quickly, so the user needs to be able to enter information swiftly.
  
2. Offline Availability:
+ It would be ideal if the solution is available offline, with the ability to store data locally until network connectivity is restored.

3. Correction:
+ Any synchronization errors should be clearly displayed and easy for the user to correct.

### Analyse & Rapportage Requirements
1. Data Model for BI (Business Intelligence):
* ﻿﻿The data model should provide the ability to export data to Excel, making it easy to analyze numbers by species, location, health score, etc.
* ﻿﻿Time series must be supported to track changes in populations and migration patterns over time.
  
2. Location Data:
+ The data should provide insights into the movement and migration of animals between sub-areas and nature reserves.

# Plan

## Setup
- FE: React Native (js)
- BE: FastAPI + Flask(or Django) (py)
- DB: Firestore
- Hosting: Heroku
- Dashboard: React Web App + Leaflet.js

<!---
### Tech stack
- FE: React Native (js) / Flutter (Dart)
- BE: Node.js/Python
- DB:
    - SQLite + PostgreSQL with PostGIS (geospatial analysis)
    - Firestore (simple and realtime sync, firestore has offline storage already)
- Hosting: Firebase hosting/Heroku
- Dashboard: React Web App
- Tools: ggmapAPI + Leaflet.js + Tensorflow Lite/YOLO
--->

## Ideas

- Rangers will have a lightweight Android/IOS app for monitoring and reporting wildlife activities.
- The app’s UI includes:
    - A map showing the real-time locations of all rangers (marked blue and the current ranger is marked red).
        - Map also visualizes wildlife sightings and hotspots. It will then generate simple analytics, including population trends, species distribution patterns, and regional hotspots.
    - A button to quickly record species observations, the location of species will be updated via GPS. Population counts will be updated automatically.
        - An option to add notes and upload photos for detailed documentation.
    - A button to record/capture pictures of incidents such as invasive species, damaged habitats, or other ecological disruptions.
    - Support for offline data recording, with automatic synchronization to the server when back online.
<!---
    - A red alert button for emergencies like suspected or detected poaching activity.
- When a ranger presses the red button:
    - The app sends the ranger's GPS coordinates (longitude and latitude) to the central server.
    - The server updates all rangers' apps to display the shortest path to the danger location (highlighted in red), calculated using Dijkstra’s algorithm for navigating jungle paths.
- Additional environmental details, such as temperature and humidity.
--->

## Current Implementation

- Functionalities:
   - Add observations of animals
   - View data
   - View map with current location
   - Login
   - etc.

## YOLO

Use [YOLOv11](https://docs.ultralytics.com/models/yolo11/) trained on [cocodataset](cocodataset.org) and [image-net](https://www.image-net.org/). For the framework, we use [Ultralytics](https://github.com/ultralytics/ultralytics). 

## API

[BoswachterApp]([https://github.com/thomaskamps/BoswachterApp])

## Guide

```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

```
npx expo start --tunnel
```


