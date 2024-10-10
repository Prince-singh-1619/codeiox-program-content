import React, { useEffect, useState } from 'react'
import './Card.css'
import banner from '../../dummy-assets/study.jpg'
import Card from './Card'
import { Navigate, useNavigate } from 'react-router-dom'
import Syllabus from '../Syllabus/Syllabus'
import { useDispatch } from 'react-redux'
import { save } from '../../redux/action'

const HomeCard = () => {

    const [HomeCardData, setHomeCardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const fetchData = async () =>{
        try {
            let url = 'https://link-lib-be.vercel.app/courses'
            const response = await fetch(url);
            const data = await response.json()
            console.log(data);
            setHomeCardData(data);
            setLoading(false);
        } catch (error) {
            console.error("Error while fetching Home card data", error)
            setLoading(false)
        }
    };
    useEffect(() =>{
        fetchData();
    }, []);

    // const handleSyllabusNavigation = (course) =>{
    //     navigate('/VideoPage', { state: {
    //         title: course.title,
    //         imageLink:course.imageLink,
    //         description: course.description,
    //         videos: course.videos
    //     } })
    // }
    const handleAddItem = (item) => {
        dispatch(save(item));  // Dispatching the action with the payload
        navigate('/learn')
      };

    if(loading){
        return <div>Loading...</div>
    }


  return (
    <div className="flex flex-wrap w-full gap-4 p-8">
        {HomeCardData.length >0 ? (
            HomeCardData.map((data, index)=>(
                <div className="p-4 md:w-[32.5%] sm:mb-0 mb-6 border rounded-xl shadow-lg ">
        <div className="rounded-lg h-64 overflow-hidden">
            <img
            alt="content"
            className="object-cover object-center h-full w-full"
            src={data.imageLink}
            />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            {data.title}
        </h2>
        <p className="text-base leading-relaxed mt-2">
            {data.description}
        </p>
        <button onClick={() => handleAddItem(data.videos)} className="text-indigo-500 inline-flex items-center mt-3">
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
        </button>
    </div>
                
            ))
        ) : ( <div>No any Content data available</div> )}
    </div>
  )
}

export default HomeCard






// [
//     {
//         "_id": "6704514783bc26e78c757e9d",
//         "title": "Complete web development course",
//         "imageLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpog_Bsnnq-d8_NTo2ArHQRTk5KjaYC6ssg&s",
//         "description": "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc.",
//         "videos": [
//             {
//                 "_id": "6704f378686d0d4336994fc7",
//                 "title": "How does the Internet work?",
//                 "videoLink": "https://youtu.be/YtxLexm-9pI?si=MyXkFFddnUsE9a3i",
//                 "description": "An explanation of how the Internet functions and how data is transmitted across networks.",
//                 "course": "6704514783bc26e78c757e9d",
//                 "__v": 0
//             },
//             {
//                 "_id": "6704f378686d0d4336994fc8",
//                 "title": "A Big Picture of Web Application",
//                 "videoLink": "https://youtu.be/l1EssrLxt7E?si=QpvL43VrAm-4SkdH",
//                 "description": "An overview of how frontend, backend, and databases work together in web applications.",
//                 "course": "6704514783bc26e78c757e9d",
//                 "__v": 0
//             },
//             {
//                 "_id": "6704f378686d0d4336994fc9",
//                 "title": "Frontend, Backend, and APIs",
//                 "videoLink": "https://youtu.be/W1T0rLGz9Jw?si=pROVfZTeLzmRgrng",
//                 "description": "A deep dive into the roles of frontend, backend, and APIs in web development.",
//                 "course": "6704514783bc26e78c757e9d",
//                 "__v": 0
//             },
//         ],
//         "__v": 0
//     }
// ]









        // const ContentCardData = [
        //     {
        //         image: banner,
        //         title: "Web Development",
        //         description: 
        //         "Learn the fundamentals of web development in this comprehensive course, covering HTML, CSS, JavaScript, and responsive design. Build interactive websites from scratch, understand front-end frameworks, and gain hands-on experience with real-world projects.",
        //         link: "",
        //     },
        //     {
        //         image: banner,
        //         title: "Web Development",
        //         description: 
        //         "Learn the fundamentals of web development in this comprehensive course, covering HTML, CSS, JavaScript, and responsive design. Build interactive websites from scratch, understand front-end frameworks, and gain hands-on experience with real-world projects.",
        //         link: "",
        //     },
        //     {
        //         image: banner,
        //         title: "Web Development",
        //         description: 
        //         "Learn the fundamentals of web development in this comprehensive course, covering HTML, CSS, JavaScript, and responsive design. Build interactive websites from scratch, understand front-end frameworks, and gain hands-on experience with real-world projects.",
        //         link: "",
        //     },
        //     {
        //         image: banner,
        //         title: "Web Development",
        //         description: 
        //         "Learn the fundamentals of web development in this comprehensive course, covering HTML, CSS, JavaScript, and responsive design. Build interactive websites from scratch, understand front-end frameworks, and gain hands-on experience with real-world projects.",
        //         link: "",
        //     },
        //     {
        //         image: banner,
        //         title: "Web Development",
        //         description: 
        //         "Learn the fundamentals of web development in this comprehensive course, covering HTML, CSS, JavaScript, and responsive design. Build interactive websites from scratch, understand front-end frameworks, and gain hands-on experience with real-world projects.",
        //         link: "",
        //     },
        // ]
