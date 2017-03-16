import React from 'react';

import Buttons from './Buttons';
import Text from './Text';
import FileCounter from './FileCounter';

const App = () => (
    <div>
        <h1>Hello world!</h1>

        <Text name="Fred" number="123456" />

        <FileCounter numFiles={0} />
        <FileCounter numFiles={1} />
        <FileCounter numFiles={2} />
        <FileCounter numFiles={10} />

        <Buttons />

        <p>The end</p>
    </div>
);

export default App;
