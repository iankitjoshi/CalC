import React from "react";
import ReactPlayer from 'react-player';
import '../../../assets/youtube.scss';


class ViewVideo extends React.Component{
    render(){
        return (
            <div className="video-player">
                <ReactPlayer className="viewvideo" url={`${this.props.url}`} />
            </div>
        )
    }
}

export default ViewVideo