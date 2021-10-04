# What's in my Smart Fridge?

 `Let’s say you’re building an app for your smart fridge, and you want it to be able to tell you which ingredients you have could go into a salad?`

## Step by step

1. Fork this repo to your account

1. Clone down the repo:

    ```bash
        git clone <YOUR_BRANCH_URL>
    ```

2. Open the repo in you terminal:

    ```bash
        cd fridge-exercise
    ```

3. Install the project:

    ```bash
    npm i # shorter version of npm install
    ```

4. Create a solution branch:
    ```bash
    git checkout -b solution
    ```

5. Run the tests:

    ```bash
    npm test # they will fail to run. We haven't written any code yet.
    ```

6. Open VSCode by typing `code .` or by opening it mannually and navigating to the kata folder/directory

7. In `fridge.js`, declare a function called `findIngredients`. Leave the function body empty for now. `Export` your function at the bottom of the file with:

    ```js
    module.exports = findIngredients;
    ```

8. Commit and push your work to github

9. Look at `test/fridge.test.js`, what is the first test expecting? - can you write it in `pseudocode`? Which steps would it take?

10. Write the code to pass the first test. Keep a terminal window open and run your test by doing `npm test` or `npm t`

11. Things to nose at:
    * Jest: https://jestjs.io/
    * Test driven development (TDD): https://medium.com/javascript-scene/tdd-changed-my-life-5af0ce099f80 AND https://www.freecodecamp.org/news/  an-introduction-to-test-driven-development-c4de6dce5c/
    * Git ignore: https://git-scm.com/docs/gitignore
    * package.json: https://flaviocopes.com/package-json/
    * module.exports and require: https://www.sitepoint.com/understanding-module-exports-exports-node-js/

