## ScrollToEndDetector
Triggers an event or sets a boolean when the widget's DIV is scrolled into view. This can be used to detect when a user has scrolled to the end of the terms and conditions form. 

## Features
Trigger a Mendix event when the widget is scrolled into view
Sets a Mendix boolean to true when the widget is scrolled into view

## Usage
If you have a very long text, like terms and conditions, and you need a way of knowing when the user has reached the end of the form before allowing them to continue with a Wizard.

Could be used to prevent data on a page from loading until it has been scrolled into view. Do this by having the data view’s visibility disabled by a boolean and having the widget set the boolean blocking the date view to true when scrolled into view.

## Demo project
https://widgettesting105-sandbox.mxapps.io/p/scroll-into-view-detector

## Issues, suggestions and feature requests
https://github.com/bsgriggs/mendix-scroll-into-view-detector/issues

## Development and contribution
Benjamin Griggs