import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './component/home';
import Shop from './component/shop';
import Addcart from './component/addcart';
import Inc from './component/inc';

class Hello extends React.Component{
    render(){
        return(
            <div>
                <Home/>
                <Shop/>
                {/* <Addcart/> */}
                <Inc/>
            </div>
        )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
