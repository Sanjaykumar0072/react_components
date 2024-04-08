import React, { Component } from 'react';
import videoData from '../assets/json/yt_embed.json';
import Menu from '../componentMenu';

class VideoPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainVideoUrl: 'https://www.youtube.com/embed/9hQZCiZ21fk',
      mainVideoTitle: 'House Flood Animation',
      currentVideo: null,
    };
  }

  handleVideoClick = (video) => {
    this.setState({
      mainVideoUrl: video.url,
      mainVideoTitle: video.title,
      currentVideo: video,
    });
  };

  render() {
    const { mainVideoUrl, mainVideoTitle, currentVideo } = this.state;

    return (
        <>
        <Menu />
        <h1>YouTube Video PlayList</h1>
        <div className="container">
            <div className="main-video-container">
            <iframe
                src={mainVideoUrl}
                className="main-video"
                title={mainVideoTitle}
                allowFullScreen=""
            ></iframe>
            <h3 className="main-vid-title">{mainVideoTitle}</h3>
            </div>
            <div className="video-list-container">
            {videoData.map((video,index) => (
                <div
                className= {currentVideo === video ? 'list active' : 'list'}
                key={video.id} // Change this to match your video data property
                onClick={() => this.handleVideoClick(video,index)}
                >
                <img
                    src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`} // Change this to match your video ID property
                    alt={video.title}
                    className="list-video-thumbnail"
                />
                <h3 className="list-title">{video.title}</h3>
                </div>
            ))}
            </div>
        </div>
      </>
    );
  }
}

export default VideoPlaylist;
