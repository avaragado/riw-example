import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

import FileCounter from './FileCounter';

const msg = defineMessages({
    intro: {
        id: 'Text.intro',
        defaultMessage: 'This is some interesting text related to {name}.',
    },
    thanks: {
        id: 'Text.thanks',
        defaultMessage: 'Thank you.',
    },
});

const Text = ({ name, number }) => (
    <div>
        <p><FormattedMessage {...msg.intro} values={{ name }} /></p>

        <FileCounter numFiles={number} />

        <p><FormattedMessage {...msg.thanks} /></p>
    </div>
);

export default Text;
