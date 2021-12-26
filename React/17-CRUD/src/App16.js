
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import HomePage from './Components/Ecommerce/HomePage'
import Products from './Components/Ecommerce/Products'
import Header from './Components/Ecommerce/Header'
import ProductDetails from './Components/Ecommerce/ProductDetails'
import NotFound from './Components/Ecommerce/NotFound';


const App = () => {

    return (
        <div className="ui container">
            
            <BrowserRouter>
            <Header/>
                <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" exact component={Products} />
                <Route path="/ProductDetails/:id" exact component={ProductDetails} />
                <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    );

}
export default App;
