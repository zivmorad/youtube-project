import React from 'react';
import './VideoDetail.css';

const VideoDetail=(props)=>{
    if(!props.video){
    return <h4>This page Copyright &copy; 2020 by Ziv Morad</h4>
    }

    const videoSrc=`https://www.youtube.com/embed/${props.video.id.videoId}`

    return (
        <div>
            <iframe title="video-player" className="video" src={videoSrc}/>
            <div className="item-selected">
                <div className="title-selected">
                    <h4>{props.video.snippet.title}</h4>
                </div>
                <p className="description-selected">{props.video.snippet.description}</p>
            </div>
        </div>)
}

export default VideoDetail;