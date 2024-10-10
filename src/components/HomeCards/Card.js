import React from 'react'
import { useNavigate } from 'react-router-dom'
// import 

const Card = ({banner, title, desc, videos}) => {
    console.log("video list: ", videos)

    const navigate = useNavigate();
    // const goToLearn = (videos) =>{
    //     navigate('/learn', { state: { SyllabusData: videos } })
    // }
  return (  
    <div className="p-4 md:w-[32.5%] sm:mb-0 mb-6 border rounded-xl shadow-lg ">
        <div className="rounded-lg h-64 overflow-hidden">
            <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={banner}
            />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            {title}
        </h2>
        <p className="text-base leading-relaxed mt-2">
            {desc}
        </p>
        {/* <button onClick={goToLearn(videos)} className="text-indigo-500 inline-flex items-center mt-3">
            Learn More
            <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </button> */}
    </div>
  )
}

export default Card







// import React from 'react';
// import './Card.css';

// const Card = ({ banner, title, desc, link, onClick }) => {
//     return (
//         <div className="card-container" onClick={onClick} style={{ cursor: 'pointer' }}>
//             <img src={banner} alt={title} className="card-image" />
//             <div className="card-content">
//                 <h2>{title}</h2>
//                 <p>{desc}</p>
//                 {/* You can display the link as text or a button as well */}
//                 <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }} className="card-link">
//                     View Syllabus
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Card;
