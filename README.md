# Desc

🔎 The challenge:  forest rangers of Natuurmonumenten monitor all kinds of animal species, but this is still often done with pen and paper. This can be done faster and smarter. You will work with your team to develop an app that allows forest rangers to enter data directly in the field: from spotting animal species to recording locations and numbers.

🐾 Your mission: Help Natuurmonumenten modernize their nature management. Develop an app that makes counting animal species, analyzing populations, and registering nuisance easier and more efficient. Together we will harmonize this registration, so that forest rangers and ecologists gain more insight into nature management in the Netherlands.

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

- Rangers will have a lightweight Android app for monitoring and reporting wildlife activities.
- The app’s UI includes:
    - A map showing the real-time locations of all rangers (marked blue and the current ranger is marked red).
        - Map also visualizes wildlife sightings and hotspots. It will then generate simple analytics, including population trends, species distribution patterns, and regional hotspots.
    - Additional environmental details, such as temperature and humidity.
    - A button to quickly record species observations, the location of species will be updated via GPS. Population counts will be updated automatically.
        - An option to add notes and upload photos for detailed documentation.
    - A button to record/capture pictures of incidents such as invasive species, damaged habitats, or other ecological disruptions.
    - Support for offline data recording, with automatic synchronization to the server when back online.
    - A red alert button for emergencies like suspected or detected poaching activity.
- When a ranger presses the red button:
    - The app sends the ranger's GPS coordinates (longitude and latitude) to the central server.
    - The server updates all rangers' apps to display the shortest path to the danger location (highlighted in red), calculated using Dijkstra’s algorithm for navigating jungle paths.

## YOLO

Use [YOLOv11](https://docs.ultralytics.com/models/yolo11/) trained on [cocodataset](cocodataset.org) and [image-net](https://www.image-net.org/). For the framework, we use [Ultralytics](https://github.com/ultralytics/ultralytics). 

