import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../States/StateProvider';
import { auth } from '../../firebase'
function Header() {
  const [{ basket, user }, dispatch] = useStateValue()

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }
  return (
    <div className="header">
      <Link to={'/'}>
        <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>
      <div className="header__search">
        <input className='header__searchInput' type="text" />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className="header__nav">
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">
            Hello {user ? user?.email : 'Sign In'}
          </span>
          <Link to={!user && '/login'}>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </Link>

        </div>
        <div className="header__option">
          <span className="header__optionLineOne">
            Returns
          </span>
          <span className="header__optionLineTwo">
            Orders
          </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">
            Your
          </span>
          <span className="header__optionLineTwo">
            Prime
          </span>
        </div>
        <div className="header__basket">
          <Link to={'/checkout'}>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount' >{basket.length}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header