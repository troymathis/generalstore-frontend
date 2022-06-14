// component libraries
import { Route } from 'react-router-dom';

// page components
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = () => {
    return (
        <main>
            <Route exact path='/'>
                <Index />
            </Route>
            <Route path='/show'>
                <Show />
            </Route>
        </main>
    )
}

export default Main;