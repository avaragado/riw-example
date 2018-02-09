import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

const msg = defineMessages({
    // User presses button to take an action
    press: 'Press me',
    // User presses button to cancel action
    cancel: 'Cancel',
});

const Buttons = () => (
    <div>
        <button><FormattedMessage {...msg.press} /></button>
        <button><FormattedMessage {...msg.cancel} /></button>
    </div>
);

export default Buttons;
