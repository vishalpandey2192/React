
// Create a new compenent to produce HTML

import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyD1EE9cb8MDt08KPuSK2pBkfqZmk4WpwCw';

class App extends Component{



    constructor(props){
        super(props);
        this.state = {videos: [] };
        //console.log(this.state);

        YTSearch({key:API_KEY, term: 'surfboards'}, (videos) => {

            this.setState({videos});
            console.log(videos);
        });
    }



    render(){
        return (<div>
            <SearchBar/>
            <videoDetail video={this.state.videos[0]}/>
            <VideoList videos={this.state.videos}/>
        </div>);
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));