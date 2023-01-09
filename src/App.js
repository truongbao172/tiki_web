import './App.scss';
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Home from './pages/HomePage';
import MyAccount from './pages/MyAccount';
import Layout from './Template/layout';
import CreateAccount from './pages/CreateAccount';
import { createBrowserHistory } from "history";
import TikiIdeas from './pages/TikiIdeas';
import ProductPage from './pages/ProductPage';
import { useSelector } from 'react-redux';
import CustomerService from './pages/CustomerService';
import BuyersGuide from './pages/BuyersGuide';
import FAQs from './pages/FAQs';
import SignupCustomer from './pages/SignupCustomer';
import DetailProduct from './pages/DetailProduct';
export const history = createBrowserHistory();

function App() {
  
  const getAllProduct = useSelector((state) => state.ProductReducer.getAllProduct);
  console.log("getAllProduct", getAllProduct)
  
  return (
    <div>
      <main>
        <Router history={history}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/customer' element={<MyAccount />} />
              <Route path='/customer/account/create/' element={<CreateAccount />} />
              <Route path='/ideas/' element={<TikiIdeas />} />
              <Route path='/product/' element={<ProductPage getAllProduct={getAllProduct} />}>
                <Route path=":nameId/" element={<ProductPage />}/>
              </Route>
              <Route path=":id/" element={<DetailProduct />} />
              <Route path='/customer-service/' element={<CustomerService />}/>
              <Route path='/customer-service/signup' element={<SignupCustomer/>}></Route>
              <Route path='/buyersguide/' element={<BuyersGuide/>} />
              <Route path='/faqs/' element={<FAQs/>} />
            </Route>
          </Routes>
        </Router>
      </main>
    </div>)
}

export default App;
