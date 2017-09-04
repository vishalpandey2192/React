
// Create a new compenent to produce HTML

import React from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyB6nQcZ4t4jS2XxOEMPADnBYr2CsE2M1AE';

const App = function () {
    return <div>
        <SearchBar/>
    </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));