// component libraries
import { Route } from 'react-router-dom';

// page components
import Index from "../pages/Index";
import Show from "../pages/Show";
import About from '../pages/About';
import Home from '../pages/Home';
import Account from '../pages/Account';

const Main = () => {
    return (
        <main>
            <Route exact path='/'>
                <Home />
            </Route>
            <div className='products'>
            <Route path='/products'>
                <Index />
            </Route>
            </div>
            <Route path='/show'>
                <Show />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/account'>
                <Account />
            </Route>
        </main>
    )
}

export default Main;