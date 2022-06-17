import { Link } from 'react-router-dom';

const Header = (props) => {
  //inline style for the nav tag
  const navStyle = {
    display:"flex",
    justifyContent:"space-around",
    border:"3px solid black",
    padding:"8px",
    width:"90%",
    margin:"auto",
};

  return (
      <nav className='nav' style={navStyle}>
        <Link to='/'>
          <div>HOME</div>
        </Link>
        <Link to='/about'>
          <div>ABOUT</div>
        </Link>
        <Link to='/products'>
          <div>PRODUCTS</div>
        </Link>
      </nav>
  );
};

export default Header;
