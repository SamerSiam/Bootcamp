import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>{ 
return (

    <div className="ui secondary pointing menu"> 
    <Link to="/" className="item">Home Page</Link>
    <Link to="/products" className="item">Products</Link>
    </div>
);
};

export default Header;