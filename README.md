# riw example

This project demonstrates how [riw](https://github.com/avaragado/riw) integrates with a React app that uses `react-intl` and `babel-plugin-react-intl-auto`.

With this example, riw was added globally (`yarn global add riw`) so riw doesn't appear in `package.json`. You can add riw as a local dependency if you want.

This example doesn't demonstrate locale selection in UI or dynamic loading of locale data: those are outside the scope of riw.


## To run

```bash
$ git clone git@github.com:avaragado/riw-example.git
$ cd riw-example
$ yarn install
$ yarn start
```

Then open [localhost:9000](http://localhost:9000) in your browser.


## Acknowledgements

`riw-example` is derived from https://github.com/thejameskyle/react-loadable-example.
