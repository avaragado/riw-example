import 'intl';

import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider, addLocaleData } from 'react-intl';

// add locale data statically: could be done dynamically, eg see react-intl-loader
import 'intl/locale-data/jsonp/en-GB';
import en from 'react-intl/locale-data/en';

import App from './components/App';

addLocaleData(en);

ReactDOM.render(
    <IntlProvider locale="en-GB">
        <App/>
    </IntlProvider>,
    document.getElementById('root')
);
