import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

const msg = defineMessages({
    press: {
        id: 'Buttons.press',
        description: 'User presses button to take an action',
        defaultMessage: 'Press me',
    },
    cancel: {
        id: 'Buttons.cancel',
        description: 'User presses button to cancel action',
        defaultMessage: 'Cancel',
    },
});

const Buttons = () => (
    <div>
        <button><FormattedMessage {...msg.press} /></button>
        <button><FormattedMessage {...msg.cancel} /></button>
    </div>
);

export default Buttons;
