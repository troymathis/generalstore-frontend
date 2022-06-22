import { Link } from 'react-router-dom';
import { logout } from '../services/firebase';

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
                        src={props.user.photoURL} 
                        alt={props.user.displayName}
                      />
                    </Link>

                  </li>
                  <li onClick={logout}>Logout</li>
                </>
              )
            : 
            <Link to='/login'>
              <li> Login </li> 
            </Link>
              
          }
        </ul>
      </nav>
  );
};

export default Header;
