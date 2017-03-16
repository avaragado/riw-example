import React from 'react';

import FileCounter from './FileCounter';

const Text = ({ name, number }) => (
    <div>
        <p>This is some boring text related to {name}.</p>

        <FileCounter numFiles={number} />

        <p>Thank you.</p>
    </div>
);

export default Text;
