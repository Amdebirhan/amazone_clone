import Header from './components/Header/Header';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path={'/checkout'}>
            <Checkout />
          </Route>
          <Route path={'/'}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
