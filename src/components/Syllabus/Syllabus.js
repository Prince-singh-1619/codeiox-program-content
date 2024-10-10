import React, { useEffect } from "react";
import SyllabusCard from "./SyllabusCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Syllabus = ({onVideoChange}) => {
  const navigate = useNavigate();
  const SyllabusDataArray = useSelector((state) => state.items)
  const SyllabusData = Array.isArray(SyllabusDataArray) && SyllabusDataArray.length > 0 ? SyllabusDataArray[0] : [];
  
  useEffect(() => {
    if (SyllabusDataArray.length === 0) {
      navigate('/'); // Redirect to home page
    }
  }, [SyllabusDataArray, navigate]); 
  console.log("syllabus data: ", SyllabusDataArray)

  return (
    <div className="h-[80vh] w-[30%] overflow-y-scroll bg-slate-100 border-[1px] border-l-0 border-black text-2xl p-4">
      {SyllabusData.length > 0 ? (
        SyllabusData.map((data, index) => (
          <SyllabusCard
            key={index}
            title={data.title}
            onClick={() => onVideoChange(data.videoLink, data.title, data.description)} //pass URL and topic on click
            // description={data.description}
          />
        ))
      ) : (
        <div>No any syllabus topic found</div>
      )}
    </div>
  );
};

export default Syllabus;





// [
// {_id: '6704f378686d0d4336994fc7', title: 'How does the Internet work?', videoLink: 'https://youtu.be/YtxLexm-9pI?si=MyXkFFddnUsE9a3i', description: 'An explanation of how the Internet functions and how data is transmitted across networks.', course: '6704514783bc26e78c757e9d', …}

// {_id: '6704f378686d0d4336994fc8', title: 'A Big Picture of Web Application', videoLink: 'https://youtu.be/l1EssrLxt7E?si=QpvL43VrAm-4SkdH', description: 'An overview of how frontend, backend, and databases work together in web applications.', course: '6704514783bc26e78c757e9d', …}

// {_id: '6704f378686d0d4336994fc9', title: 'Frontend, Backend, and APIs', videoLink: 'https://youtu.be/W1T0rLGz9Jw?si=pROVfZTeLzmRgrng', description: 'A deep dive into the roles of frontend, backend, and APIs in web development.', course: '6704514783bc26e78c757e9d', …}
// ]






// const SyllabusData = [
  //   {
  //     topic: "topic1",
  //     url: "https://www.youtube.com/embed/_-qJAlfwtOQ?si=IYb9H4121PZ9wbUx",
  //     description: "Learning is a lifelong journey that expands beyond the confines of formal education. It encompasses every experience, conversation, and challenge we face, shaping our understanding of the world and ourselves. Whether it's acquiring new skills or gaining deeper insights into familiar topics, learning constantly fuels personal and professional growth. The curiosity to explore, question, and discover new knowledge helps people adapt to an ever-changing world and encourages them to reach their full potential.",
  //   },
  //   {
  //     topic: "topic2",
  //     url: "https://www.youtube.com/embed/roz9sXFkTuE?si=tgdbhQsyEsPVJs6b",
  //     description: "One of the most powerful aspects of learning is its ability to break down barriers and foster connections between people. By learning about different cultures, perspectives, and ideas, individuals can become more empathetic and understanding of those around them. This helps to build more inclusive communities, where knowledge is shared and diverse viewpoints are valued. The more we learn, the more we realize how interconnected the world is, and this understanding drives us toward collaboration and progress.",
  //   },
  //   {
  //     topic: "topic3",
  //     url: "https://www.youtube.com/embed/hPxLWO8eva4?si=Ry2kFyvsaziwqiXD",
  //     description: "In the digital age, the accessibility of learning has dramatically increased, offering countless opportunities for self-improvement. With the internet at our fingertips, anyone can access courses, tutorials, and resources on virtually any subject. This democratization of knowledge allows individuals to pursue passions, switch careers, or simply stay informed about the latest developments in various fields. As learning becomes more personalized and convenient, people can tailor their education to suit their interests and goals, ensuring that learning is not only beneficial but also enjoyable.",
  //   },

  //   {
  //     topic: "topic4",
  //     url: "https://www.youtube.com/embed/D5gIZLRV_qY?si=5Dp8qarJmErxfC-S",
  //     description: "description4",
  //   },
  //   {
  //     topic: "topic5",
  //     url: "https://www.youtube.com/embed/_MQGh2Ey8H8?si=WUEYPJ0rowlIxJc3",
  //     description: "description5",
  //   },
  //   {
  //     topic: "topic6",
  //     url: "",
  //     description: "description6",
  //   },
  //   {
  //     topic: "topic7",
  //     url: "",
  //     description: "description7",
  //   },
  //   {
  //     topic: "topic8",
  //     url: "",
  //     description: "description8",
  //   },
  //   {
  //     topic: "topic9",
  //     url: "",
  //     description: "description9",
  //   },
  //   {
  //     topic: "topic10",
  //     url: "",
  //     description: "description10",
  //   },
  //   {
  //     topic: "topic11",
  //     url: "",
  //     description: "description11",
  //   },
  //   {
  //     topic: "topic12",
  //     url: "",
  //     description: "description12",
  //   },
  //   {
  //     topic: "topic13",
  //     description: "description13",
  //   },
  //   {
  //     topic: "topic14",
  //     description: "description14",
  //   },
  //   {
  //     topic: "topic15",
  //     description: "description15",
  //   },
  //   {
  //     topic: "topic16",
  //     description: "description16",
  //   },
  //   {
  //     topic: "topic17",
  //     description: "description17",
  //   },
  //   {
  //     topic: "topic18",
  //     description: "description18",
  //   },
  //   {
  //     topic: "topic19",
  //     description: "description19",
  //   },
  //   {
  //     topic: "topic20",
  //     description: "description20",
  //   },
  //   {
  //     topic: "topic21",
  //     description: "description21",
  //   },
  // ];
