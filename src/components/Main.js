// component libraries
import { Route } from 'react-router-dom';

// page components
import Index from "../pages/Index";
import Show from "../pages/Show";
import About from '../pages/About';

const Main = () => {
    return (
        <main>
            <Route exact path='/'>
                <Index />
            </Route>
            <Route path='/show'>
                <Show />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
        </main>
    )
}

export default Main;