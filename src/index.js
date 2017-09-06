
// Create a new compenent to produce HTML

import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyB6nQcZ4t4jS2XxOEMPADnBYr2CsE2M1AE';

class App extends Component{



    constructor(props){
        super(props);
        this.state = {videos: [] };
        console.log(this.state);

        YTSearch({key:API_KEY, term: 'surfboards'}, (videos) => {

            this.setState({videos});
            console.log(videos);
        });
    }



    render(){
        return (<div>
            <SearchBar/>
        </div>);
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));