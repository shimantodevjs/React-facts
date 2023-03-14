import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/nav';
import Main from './components/main';



function App(){
  return <div className="app">
            <Nav />
            <Main />
         </div>
}

ReactDOM.render(<App />,document.getElementById('root'))
