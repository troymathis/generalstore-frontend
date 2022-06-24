import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <div className='Home'>
        <h1>Welcome to the General Store</h1>
        <h4>Your home for everything general!</h4>
        <div>
            <h2 id='feat'>Featured Products!</h2>
        </div>
        <section id='featured'>
        <div className='prdct'>
            <Link to={`/products/62b4a29a45c15448ec8a60d2/`}>
            <h1>Persian Cat</h1>
          </Link>
            <img src='https://azure.wgp-cdn.co.uk/app-yourcat/posts/iStock-174776419-1.jpg?&format=webp&webp.quality=40&scale=both' alt="" />
            <span id="price"><h2>$560</h2></span>
          </div>
          <div className='prdct'>
            <Link to={`/products/62b3c70f921c06e25715d5b4/`}>
            <h1>Pepperoni Stuffed Crust Pizza</h1>
          </Link>
            <img src='https://fastfoodnutrition.org/item-photos/full/162264063183429.png' alt="" />
            <span id="price"><h2>$25</h2></span>
          </div>
          <div className='prdct'>
            <Link to={`/products/62b3c553921c06e25715d5ab/`}>
            <h1>Bufo Alvarius Toad</h1>
          </Link>
            <img src='https://thumbs.dreamstime.com/b/bufo-alvarius-toad-white-background-aka-colorado-river-sitting-side-ways-looking-ahead-golden-eyes-isolated-221626351.jpg' alt="" />
            <span id="price"><h2>$450</h2></span>
          </div>
          </section>
          
    </div>)
};

export default Home;