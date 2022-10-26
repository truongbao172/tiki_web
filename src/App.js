import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/HomePage';
import MyAccount from './pages/MyAccount';
import Layout from './HOCs/layout';
function App() {
  return (
    <div>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/customer' element={<MyAccount />} />
            </Route>
          </Routes>
        </Router>
      </main>
    </div>)
}

export default App;
