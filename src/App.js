import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Banner from './Component/Banner.js/Banner';
import Products from './Component/Products/Products';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';
import BestSeller from './Component/Products/BestSeller/BestSeller';
import NewArrival from './Component/Products/NewArrival/NewArrival';
import SectionA from './Component/SectionA/SectionA';
import Subscribe from './Component/Subscribe/Subscribe';
import SectionB from './Component/SectionB/SectionB';
import Categories from './Component/Categories/Categories';
import Carousel from './Component/Carousel/Carousel';
import Rings from './Component/Products/Rings/Rings';
import ProductDetails from './Component/Products/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Carousel></Carousel>
            <BestSeller></BestSeller>
            <SectionB></SectionB>
            <NewArrival></NewArrival>
            <Categories></Categories>
            <SectionA></SectionA>
            <Subscribe></Subscribe>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Carousel></Carousel>
            <BestSeller></BestSeller>
            <Banner></Banner>
            <SectionB></SectionB>
            <NewArrival></NewArrival>
            <Categories></Categories>
            <SectionA></SectionA>
            <Footer></Footer>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/productDetails">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/rings">
            <Rings></Rings>
            <Footer></Footer>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
