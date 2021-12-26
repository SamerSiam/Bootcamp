import React from 'react';
import items from '../../Store';
import { Link } from 'react-router-dom';

class Products extends React.Component {

    state = { itemsList: items}

    componentDidMount() {
        
        console.log(this.itemsList)
    }
    displayProducts=()=>{
        return this.state.itemsList.map((prod)=>{
           
            return <Link key={prod.id} to={`/ProductDetails/${prod.id}`}> {prod.title} </Link>
            
            
        })
    }

    render() {
        console.log(this.state)
        return (

            <div>
                {this.displayProducts()} 

            </div>
        );
    }
}

export default Products;