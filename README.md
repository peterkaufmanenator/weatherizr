# Weatherizr

This is a web app that I am working on, called Weatherizr.  You can see a live demo of the web app here:

https://peterkaufmanenator.github.io/weatherizr/index.html

The user searches for cities, and adds them to a convenient list that the user can later refer back to get weather information in their chosen cities.  It uses just HTML5/CSS3/javascript and uses npm+webpack+scss+babel as build tools.  It also utilizes react.js as the frontend view library and material-ui as a component library.  

For this project, I spent roughly 7 hours on development, to show what I could accomplish in a relatively short timeframe.

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

Browser Support
-----------

The app works in the following browsers:

* IE11
* Chrome
* Firefox
* Safari

iOS and most Android phones would work but some of the styling is a bit off and the interactions are awkward, especially the autocomplete.

The autocomplete issue is a known issue, here: https://github.com/callemall/material-ui/issues/4499

To-do
-----------

With a little bit more time, here's some things that would help this project:

* A bit better styling.
* Use a different widget for autcomplete for mobile.
* Add in the ability to reorder cities.
* Add in Japanese or other language translations.
* Having actual weather maps would be cool.
* Currently there is no linting or unit tests (in particular the icon selection could use a unit test).

Data
-----------

Data is read in from the Open Weathermap API:

https://openweathermap.org/api

We use a subset of the available cities, which is specified in src/js/weatherizr/city.list.