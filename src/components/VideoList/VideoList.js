import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import './VideoList.css';

const VideoList=(props)=>{
const renderedVideos=props.videos.map((video)=>{
    return <VideoItem onVideoSelect={props.onVideoSelect} video={video} key={video.id.videoId}/>
})
return(
<div className={"video-list"}>{renderedVideos}</div>
)}

export default VideoList;