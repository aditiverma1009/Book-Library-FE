import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default ReactDOM.render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('root'));

