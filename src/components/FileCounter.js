import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';

const msg = defineMessages({
    label: {
        id: 'FileCounter.label',
        defaultMessage: 'You have { numFiles, plural, =0 {no files} one {one file} other {# files} }',
    },
});

const FileCounter = ({ numFiles }) => (
    <p><FormattedMessage {...msg.label} values={{ numFiles }} /></p>
);

export default FileCounter;
