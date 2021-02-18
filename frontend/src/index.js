import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {PetfulProvider} from './context/petfulcontext';
import App from './components/app/app';
import './index.css';

ReactDOM.render(
	<BrowserRouter>
		<PetfulProvider>
			<App />
		</PetfulProvider>
	</BrowserRouter>,
	document.getElementById('root')
);

serviceWorker.unregister();