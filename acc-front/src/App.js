import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.js';
import Home from './Home.js';
import Footer from './components/Footer/Footer.js';
import Form from './components/Form/Form.js';
import Product from './components/Product.js';
import Shop from './Shop.js';
import Contact from './Contact.js';
import AdminDashboard from './admin/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import ManageProducts from './admin/ManageProducts';
import ManageCategories from './admin/ManageCategories';
import UpdateProduct from './admin/UpdateProduct';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/product/:productId" exact component={ Product } />
          <Route path="/shop" component={ Shop } />
          <Route path="/form" component={ Form } />
          <Route path="/contact" component={ Contact } />
          <Route path='/admin/dashboard/Canvas@123' exact component={ AdminDashboard } />
          <Route path='/create/category' exact component={ AddCategory } />
          <Route path='/create/product' exact component={ AddProduct } />
          <Route path='/admin/products' exact component={ ManageProducts } />
          <Route path='/admin/categories' exact component={ ManageCategories } />
          <Route path='/admin/product/update/:productId' exact component={ UpdateProduct } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
