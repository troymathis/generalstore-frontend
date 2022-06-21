import { Link } from 'react-router-dom';
import { login, logout } from '../services/firebase';

const Header = (props) => {
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
        <ul>
          {
            props.user 
            ? 
              (
                <>
                  <li className='greeting-list-item'>Welcome, {props.user.displayName} 
                    <Link to='/account'>
                      <img 
                        style={photoStyles}
                        src={props.user.photoURL} 
                        alt={props.user.displayName}
                      />
                    </Link>

                  </li>
                  <li onClick={logout}>Logout</li>
                </>
              )
            : <li onClick={login}>Login</li> 
          }
        </ul>
      </nav>
  );
};

export default Header;
