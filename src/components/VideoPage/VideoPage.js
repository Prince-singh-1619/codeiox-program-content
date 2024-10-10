import React, { useState } from "react";
import "./VideoPage.css";
import Syllabus from "../Syllabus/Syllabus";
import { useLocation } from "react-router-dom";

const VideoPage = () => {
  const location = useLocation()
  const { url, title, imageLink, description, videos } = location.state || {};

  //state for the current video and title
  const [currentVideo, setCurrentVideo] = useState({
    url: url || "https://www.youtube.com/embed/_-qJAlfwtOQ?si=IYb9H4121PZ9wbUx",
    title: title ||  "Introduction to learning",
    description: description || "This is an introductory video about learning concepts."
  });

  const extractVideoID = (videoLink) => {
    if (videoLink.includes('youtu.be')) {
      return videoLink.split('youtu.be/')[1].split('?')[0]; // Get video ID from youtu.be URL
    } else if (videoLink.includes('youtube.com/watch?v=')) {
      return videoLink.split('v=')[1].split('&')[0]; // Get video ID from youtube.com/watch?v= URL
    }
    return null; // In case it's not a recognizable YouTube link
  };

  const handleVideoChange = (videoLink, title, description) => {
    let orgLink = extractVideoID(videoLink)
    if(orgLink){
       const baseURL = "https://www.youtube.com/embed/"
       setCurrentVideo({
        url: baseURL+orgLink,
        title: title,
        description: description,
      });
    }else{
      console.error("Invalid YouTube URL");
    }
  };

  return (
    <section className="w-full p-4">
      <div className="flex">
        <iframe className=" border-[1px] border-black"
          key={currentVideo.url} //Adding key to force re-render
          width="70%"
          height="full"
          src={currentVideo.url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <Syllabus onVideoChange={handleVideoChange} />
      </div>
      <div className="w-[70%] mt-14">
        <h1 className="text-4xl">{currentVideo.title}</h1> <br />
        <p className="text-lg mt-4">{currentVideo.description}</p>
      </div>
    </section>
  );
};

export default VideoPage;
