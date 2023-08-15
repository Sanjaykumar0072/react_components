import { useState } from 'react';
import video from '../assets/json/yt_embed.json';


function Video_playlist() {
    const[src, setSrc] = useState('');

    const handleclick = (e) => {
        let src = e.target;
        console.log(src);
    }
  
    return (
      <>
        <div className="container">
            <div className="main-video-container">
                <iframe src="https://www.youtube.com/embed/9hQZCiZ21fk" className="main-video" allowFullScreen=""></iframe>
                <h3 className="main-vid-title">house flood animation{src.title}</h3>
            </div>
            <div className="video-list-container">
                {video.map(video => (
                    <div className="list" onclick = {setSrc => (video.url, video.title)}>
                        <iframe src={video.url} className="list-video" onClick={handleclick} disabled></iframe>
                        <h3 className="list-title">{video.name}</h3>
                    </div>
                ))}
            </div>
        </div>
      </>
    )
  }
  
  export default Video_playlist