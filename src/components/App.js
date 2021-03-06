import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import messages from './messages';

import Buttons from './Buttons';
import Text from './Text';
import FileCounter from './FileCounter';

const msg = defineMessages({
    hello: 'Hello everyone!',
    goodbye: 'Goodbye',
});

const App = () => (
    <div>
        <h1><FormattedMessage {...msg.hello} /></h1>

        <Text name="Fred" number="123456" />

        <FileCounter numFiles={0} />
        <FileCounter numFiles={1} />
        <FileCounter numFiles={2} />
        <FileCounter numFiles={10} />

        <Buttons />

        <p><FormattedMessage {...msg.goodbye} /></p>
    </div>
);

export default App;
