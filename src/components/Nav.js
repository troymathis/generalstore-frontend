import { Link } from 'react-router-dom';
import { logout } from '../services/firebase';
import { useLocation } from 'react-router-dom';

{/* <li onClick={logout}>LOGOUT</li> */}
const Header = (props) => {
  const location = useLocation();
  const handleLogout = () => {
    logout();
    props.history.push('/');
  }
  return (
      <nav className='nav'>
        <Link to='/'>
          <div>HOME</div>
        </Link>
        <Link to='/about'>
          <div>ABOUT</div>
        </Link>
        <Link to='/products'>
          <div>PRODUCTS</div>
        </Link>
        <Link to='/cart'>
          <div>CART</div>
        </Link>
        <ul>
        {
          location.pathname === "/account" && props.user
          ? <div onClick={handleLogout}>LOGOUT</div> 
          : !(location.pathname === "/account") && props.user
            ? 
              <Link to='/account'>
                YOUR ACCOUNT
              </Link> 
            :
              <Link to='/login'>
                <li> LOGIN </li> 
              </Link> 
          }
        </ul>
      </nav>
  );
};

export default Header;
