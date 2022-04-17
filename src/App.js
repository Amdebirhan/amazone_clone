import Header from './components/Header/Header';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Checkout from './components/Checkout/Checkout';
import Login from './components/login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/States/StateProvider';
import Payment from './components/Payment/Payment'

function App() {
  const [{ }, dispatch] = useStateValue()
  useEffect(() => {
    //run once and every time the user and basket change it run
    auth.onAuthStateChanged(
      authUser => {
        if (authUser) {
          //this means the user was loged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          //the user is not login
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      }
    )
  })
  return (
    <Router>
      <div>
        <Switch>
          <Route path={'/login'}>
            <Login />
          </Route>
          <Route path={'/checkout'}>
            <Header />
            <Checkout />
          </Route>
          <Route path={'/payment'}>
            <Header />
            <Payment />
          </Route>
          <Route path={'/'}>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
