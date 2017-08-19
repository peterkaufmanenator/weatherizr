# Weatherizr

This is an app that I am working on, called Weatherizr.  The user searches for cities, and adds them to a convenient list that the user can later refer back to get weather information in their chosen cities.  It uses just HTML5/CSS3/javascript and uses npm+webpack+scss+babel as build tools.  It also utilizes react.js as the frontend view library and material-ui as a component library.  For this project, I spent less than 8 hours on development, to show what I could accomplish in a relatively short timeframe.

For the weather icons, I used:

https://erikflowers.github.io/weather-icons/

It's a font library with font icons specifically for weather.

Dependencies
------------

This project has the following dependencies:

* node
* npm

Basic Usage
-----------

To get it up and running using webpack's web server, just:

* Clone the repository & cd into it
* npm install
* npm run start

Data
------------------

Data is read in from the Open Weathermap API:

https://openweathermap.org/api

We use a subset of the available cities, which is specified in src/js/weatherizr/city.list.