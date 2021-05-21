import React from 'react';
import ReactDOM from 'react-dom';
import AppSuku from './AppSuku';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppSuku />, document.getElementById('root'));

serviceWorker.unregister();
