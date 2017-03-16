import 'intl';

import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider, addLocaleData } from 'react-intl';

// add locale data statically: could be done dynamically, eg see react-intl-loader
import 'intl/locale-data/jsonp/en-GB';
import 'intl/locale-data/jsonp/pt-BR';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';

import messages from './locale/pt-BR.json';

import App from './components/App';

addLocaleData(en);
addLocaleData(pt);

ReactDOM.render(
    <IntlProvider key="pt-BR" locale="pt-BR" messages={messages}>
        <App/>
    </IntlProvider>,
    document.getElementById('root')
);
