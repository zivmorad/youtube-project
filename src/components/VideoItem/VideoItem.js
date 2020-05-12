import React from 'react';
import './VideoItem.css'


const VideoItem=(props)=>{
return(
    <div className="item" onClick={()=>props.onVideoSelect(props.video)}>
        <img alt={props.video.snippet.title} src={props.video.snippet.thumbnails.medium.url}/>
       <div className="title">{props.video.snippet.title}</div>
    </div>
)}

export default VideoItem;