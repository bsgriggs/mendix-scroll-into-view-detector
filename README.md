## Scroll Into View Detector
Triggers an event or sets a boolean when the widget's DIV is scrolled into view.

## Features
- Trigger a Mendix event when the widget is **scrolled into view**
- Sets a Mendix **boolean** to true when the widget is scrolled into view
- Trigger a Mendix event when the widget is **scrolled out of view**

## Use cases
- Have very long text, like terms and conditions, and need a way of knowing when the user has reached the end of the form before allowing them to continue with a Wizard.
- In combination with a [Custom Grid](https://medium.com/@benjaminsgriggs/what-is-a-mendix-custom-grid-and-when-should-i-use-one-5ccb8c7dfbd4) to add virtual scrolling
- Prevent data on a page from loading until that section of the page has been scrolled into view.

## Usage
1. Add the widget onto the page **in the location that needs to be detected**
2. Decide if the event should be allowed to trigger multiple times. Set the Allow Re-Run expression accordingly
3. Set any combination of the 'Boolean to Set' attribute, 'Into View Action', or 'Out of View Action'.

## Demo project
https://widgettesting105-sandbox.mxapps.io/p/scroll-into-view-detector

## Issues, suggestions and feature requests
https://github.com/bsgriggs/mendix-scroll-into-view-detector/issues

## Development and contribution
Benjamin Griggs 2023-2025
