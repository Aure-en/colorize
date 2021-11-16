# Colorize

Find the next palette for your new project! Whether you want to renovate your house, start painting or simply explore colorful worlds, Colorize is there to inspire you. Explore thousand of palettes generated from popular images, or create your own palette easily thanks to our palette generator, image picker, color chart and previews.

## Features
* Thousands of palettes generated from popular images.
* Palette extraction from an user upload.
* Palette generator from random images.
* User authentification with JWT and password encryption.
* Palette creation page with previews and a color chart.
* Creation, deletion and update of user made palettes.
* Ability to save, like and explore palettes created by users.
* Easy copy paste of colors or entire palettes, in any format (hex, rgb, cmyk, hsl, hsv).
* Save palettes in collections to find them with ease.
* Search for specific palettes.
* Filter palettes by themes.
* Sort palettes by popularity or date of creation.

## Preview

Try out Colorize with a sample account by using the following credentials: anonymous@colorize.com / colorize.

![colorize](https://user-images.githubusercontent.com/68861848/141996499-605c8d40-e190-4418-b4f1-4f897feead5b.gif)


## Installation

### Requirements
* [Colorize API](https://github.com/O-clock-Valkyrie/projet-o-en-couleurs)

### Clone the repository
```
$ git clone https://github.com/O-clock-Valkyrie/projet-o-en-couleurs-front
$ cd projet-o-en-couleurs-front
$ npm install
```

### Set up environment variables
Create an .env.local file in the root directory and set the following variable.
```
REACT_APP_UNSPLASH_API=Your [Unsplash](https://unsplash.com/) API Key.
```

### Start

#### Development
```
$ npm run start
```
#### Production
```
$ npm run build
$ npm install -g serve
$ serve -s build
```

### Dependencies
* React
* React Router
* Styled-components
* Color
* Colorthief
* View more in the [package.json](https://github.com/O-clock-Valkyrie/projet-o-en-couleurs-front/blob/main/package.json)
