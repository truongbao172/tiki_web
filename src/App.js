import './App.scss';
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Home from './pages/HomePage';
import MyAccount from './pages/MyAccount';
import Layout from './HOCs/layout';
import CreateAccount from './pages/CreateAccount';
import { createBrowserHistory } from "history";
import TikiIdeas from './pages/TikiIdeas';
import ProductPage from './pages/ProductPage';
export const history = createBrowserHistory();
function App() {

  return ( 
    <div>
      <main>
        <Router history={history}>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/customer' element={<MyAccount />} />
                <Route path='/customer/account/create/' element={<CreateAccount />}/>
                <Route path='/ideas/' element={<TikiIdeas />}/>
                <Route path='/product/' element={<ProductPage />}>
                  <Route path=":nameId" element={<ProductPage />} />
                </Route>
            </Route>
          </Routes>
        </Router>
      </main>
    </div>)
}

export default App;
