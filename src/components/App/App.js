import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import youtube from '../../api/youtube';
import VideoList from '../VideoList/VideoList'
import './App.css';
import VideoDetail from '../VideoDetail/VideoDetail';


class App extends Component{
    state={
        videos:[],
        selectedVideo:null,
    }

    //get the user input from the search bar component and fech from youtube
    onSearchBarSubmit= async (userInput) => {
        const res= await youtube.get('/search',{
          params:{
             q: userInput
        }})
        this.setState({
            videos:res.data.items,
            selectedVideo:res.data.items[0]
        }) 
    }
    //set the state: selectedVideo to the video that we click on
    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
    }

    render(){
        return(
            <div className="container">
                <SearchBar onSubmit={this.onSearchBarSubmit}/>
                <div className="row">
                    <div className="col1">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="col2">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;