# Wolf, Goat, and Cabbage Interactive Manual Source Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setting Up

1. This project requires [Node.js](https://nodejs.org/). Latest version of Node is recommended.
2. Clone this project with `git clone https://github.com/kavinkul/React-wgc-interactive.git`
3. In the root of the project, run `npm install` to install necessary node packages.
4. To start development server, run `npm start` which will start the server at [http://localhost:3000](http://localhost:3000)
5. You can build the project with `npm run build`. This will create a build folder with main html file at its root. You must start http server at that folder or its parent for the manual to work correctly. If you have python, you can run `python -m http.server`.

## Translation

All the texts in the interactive section of the manual are being fetched from `translation.json` file. You don't need to rebuild the project after translating. To translate this section:

1. In `translation.json`, follow the template of `"en"` language in this file. You can add a new language of your choice by creating a key value pair of language and translation:
    ```json
    {
        "en": {
            English Translation
        },
        "de": {
            German Translation
        }
    }
    ```
    You must give translations to all fields that you see.
2. In html file of your manual locate `div` element with `id` of `root`:
    ```html
    <div id="root" language="en"></div>
    ```
    Change language to the language key that you created in step 1.

Some languages may not work nicely with this manual, most notably in the graph. You may need to review how graph is implemented in [Graph.js](src/components/Graph/Graph.js).
