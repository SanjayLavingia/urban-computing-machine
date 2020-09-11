import React from 'react'; 
import { render } from 'react-dom'; 
import App from './App.jsx'; 
import Styles from './styles.scss'

render(
  <div>
    <App/>
  </div>, 
  document.getElementById('root')
)