import React, { useEffect, useState } from 'react'
import TaskList from './TaskList'

const TaskListCards = () => {
    const [TaskListData, setTaskListData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () =>{
        try {
            let url = 'https://server-db-be-store.vercel.app/people'
            const response = await fetch(url)
            const data = await response.json();
            console.log(data);
            setTaskListData(data);
            setLoading(false)
        } catch (error) {
            console.error("Error while fetching TaskList data");
            setLoading(false);
        }
    };
    useEffect(() =>{
        fetchData();
    }, []);
    if(loading){
        return <div>Loading...</div>
    }


  return (
    <div className="flex flex-col h-80 overflow-y-scroll">
        {TaskListData.length > 0 ? (
            TaskListData.map((task, index)=>(
                <TaskList 
                    key={index}
                    firstName={task.firstName}
                    lastName={task.lastName}
                    companyName={task.companyName}
                    email={task.email}
                />
            ))
        ): (
            <div>No tasks available</div>   //fallback if no is present
        )}
    </div>
  )
    
    }

export default TaskListCards;