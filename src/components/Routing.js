import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Housing from './Housing';

const Routing = ({ setLoading }) => {
    const [housingsData, setHousingsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/housings.json')
            .then(response => response.json())
            .then(data => setHousingsData(data['housings']))
    }, []);

    return (
        <Router forceRefresh={true}>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home housingsData={housingsData} setLoading={setLoading} />
                </Route>
                <Route path="/housing/:index" exact>
                    <Housing housingsData={housingsData} setLoading={setLoading} />
                </Route>
                {/* <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/error" exact>
                    <Error />
                </Route> */}
            </Switch>
        </Router>
    )
};

export default Routing