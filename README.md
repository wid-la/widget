# How to create a new Widget
With Versatile, you can create your own widgets. Here is a starter kit to build one.

## NPM component
Create a new branch in the versatile-frontend for your widget and copy this repo in the /src/components directory.
Rename the widget with the name you want.
Don't forget to declare your new widget in the components/tileTemplate.js :
`export { default as Widget } from './Widget';`
Develop your widget, You can use every React component you want, just install them with
`npm install --save componentName`.

## Default Props
Specify each default props in the defaultProps.js file.

## Styles
Specify style in the style.js file.

## Widget's images
Use the assets/iconGabarit.ai to create the widget icon.
Use the assets/featuredGabarit.ai to create the featured image.
Use the assets/screenShotGabarit.ai to create a screenshot image.

## API declaration
Fill out informations in the /apiConfig/config.json. Some UI element are available like input, colorPicker, slider and toggle.
Fill out the /apiConfig/store.json file for the backend API, like that, your widget will appear in the store. Keys are props which are dynamic in your widget. In the config area, serialize the /apiConfig/config.json (with http://www.freeformatter.com/json-formatter.html#ad-output for example and use JavaScript escaped for Indentation level).

Then, create a new widget in Swagger using the /apiConfig/store.json (must be root).

## Your widget is ready
You can add your widget in a dashboard and link your dynamic data into it. Test it and then, merge the projet on develop.
