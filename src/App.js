import './App.scss';
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Home from './pages/HomePage';
import MyAccount from './pages/MyAccount';
import Layout from './HOCs/layout';
import CreateAccount from './pages/CreateAccount';
import { createBrowserHistory } from "history";
import TikiIdeas from './pages/TikiIdeas';
import ProductPage from './pages/ProductPage';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductAction } from './redux/actions';
import { useEffect } from 'react';
export const history = createBrowserHistory();

function App() {
  
  const getAllProduct = useSelector((state) => state.ProductReducer.getAllProduct);
  console.log("getAllProduct", getAllProduct)
  
  const dispatch = useDispatch();
  const action = getAllProductAction();
  useEffect(() => {
    dispatch(action);
  }, [])
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
                <Route path=":nameId" element={<ProductPage />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </main>
    </div>)
}

export default App;
