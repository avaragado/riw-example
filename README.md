# riw example

This project demonstrates how [riw](https://github.com/avaragado/riw) integrates with a React app that uses `react-intl`.

The commit history for the project shows how to add `react-intl` to a React app, and then how to use riw with the app to simplify the localisation workflow.

Apart from `master` this repository has three branches:

- At the head of the `react` branch is a React app before i18n, with component strings hardcoded.
- At the head of the `react-intl` branch is the same app, but internationalised with react-intl.
- At the head of the `riw` branch is the internationalised app making use of riw.

Step through the commits on the `riw` branch to see how easy it is to use riw. For this branch riw was added globally (`yarn global add riw`) so riw doesn't appear in `package.json`.

This example doesn't demonstrate locale selection in UI or dynamic loading of locale data: those are outside the scope of riw.

## To run

```bash
$ git clone git@github.com:avaragado/riw-example.git
$ cd riw-example
$ # optionally: git checkout <branch> to see the app at different stages
$ yarn install
$ yarn start
```

Then open [localhost:9000](http://localhost:9000) in your browser.


## Acknowledgements

`riw-example` is derived from https://github.com/thejameskyle/react-loadable-example.
