import React from "react";
import ReactDOMClient from 'react-dom/client';

const root = document.getElementById('root');
const rootElemnet = ReactDOMClient.createRoot(root);

const h1 = React.createElement('h1',{},"Hello,React!!!");
const p = React.createElement('p',{},'this is React sample application.');
const div = React.createElement('div',{},[h1,p]);

rootElemnet.render(div);