import React from 'react'
//importing images...
import Server from './assets/server.png'
import DashboardIcon from './assets/dashboard-icon.png'
import ProjectIcon from './assets/project.png'
import TaskListIcon from './assets/checklist.png'
import ServiceIcon from './assets/services.png'
import NotificationIcon from './assets/notification.png'
import ChatIcon from './assets/chat.png'
import Avatar from './assets/customer.png'
import Search from './assets/search.png'
import Download from './assets/downloads.png'

import { Link } from 'react-router-dom'
import StyledDatePicker from '../../components/DatePicker/DatePicker'
import TaskListCards from '../../components/TaskLists/TaskListCards' 

const Dashboard = () => {
  return (
    <div>
        <section className="w-screen h-screen bg-blue-200 flex justify-center items-center">
            <section className="w-[95%] h-[95%] flex gap-4">
            {/*1st horizontal */}
                <div className="h-full w-1/5 rounded-2xl bg-white flex p-6 flex-col gap-2 relative">
                    <Link className="flex gap-2 ml-4">
                        <img src={Server} alt="server logo" className="h-6 w-6" />
                        <a href className="font-bold">ServerDB</a>
                    </Link>

                    <div className="h-[0.5px] w-[80%] bg-slate-400 mt-4"></div>
                    
                    <Link className="flex gap-2 items-center hover:bg-gray-200 rounded-full h-[8%] hover:invert p-4 ">
                        <img src={DashboardIcon} alt="dashboard icon" className="h-4 w-4 " />
                        <a href className="font-medium text-bold text-sm">Dashboard</a>
                    </Link>

                    <Link className="flex gap-2 items-center hover:bg-gray-200 rounded-full h-[8%] hover:invert p-4 -mt-2">
                        <img src={ProjectIcon} alt="Project icon" className="h-4 w-4" />
                        <a href className="font-medium text-bold text-sm">Projects</a>
                    </Link>

                    <Link className="flex gap-2 items-center hover:bg-gray-200 rounded-full h-[8%] hover:invert p-4 -mt-2">
                        <img src={TaskListIcon} alt="Task List icon" className="h-4 w-4" />
                        <a href className="font-medium text-bold text-sm">Task List</a>
                    </Link>

                    <Link className="flex gap-2 items-center hover:bg-gray-200 rounded-full h-[8%] hover:invert p-4 -mt-2">
                        <img src={ServiceIcon} alt="Service icon" className="h-4 w-4" />
                        <a href className="font-medium text-bold text-sm">Services</a>
                    </Link>

                    <Link className="flex gap-2 items-center hover:bg-gray-200 rounded-full h-[8%] hover:invert p-4 -mt-2">
                        <img src={NotificationIcon} alt="Notification icon" className="h-4 w-4" />
                        <a href className="font-medium text-bold text-sm">Notifications</a>
                    </Link>

                    <Link className="flex gap-2 items-center hover:bg-gray-200 rounded-full h-[8%] hover:invert p-4 -mt-2">
                        <img src={ChatIcon} alt="Chat icon" className="h-4 w-4" />
                        <a href className="font-medium text-bold text-sm">Chat</a>
                    </Link>

                    <div className="w-full flex flex-col justify-center items-center absolute mx-auto -ml-6 bottom-6">
                        <img src={Avatar} alt="profile-pic" className="h-16 w-16 rounded-full" />
                        <strong>Your name</strong>
                        <small>yourname@gmail.com</small>
                    </div>
                </div>

                <div className="w-4/5 flex flex-col gap-4 ">
                    {/* rest vertical */}
                    <div className="h-[20%] w-full p-6 -gap-2 bg-white rounded-2xl flex justify-between items-center">
                        <div className="w-full flex items-center  gap-4">
                            <div className="w-1/3 h-10 flex justify-around items-center bg-slate-200 rounded-full border-2 border-transparent hover:border-slate-400">
                                <input type="text" placeholder="Search" className="outline-none bg-slate-200 rounded-full font-medium"/>
                                <button><img src={Search} alt="search-icon" className="h-5 w-5" /></button>
                            </div>
                            <div><StyledDatePicker/></div>
                        </div>
                        <button className="flex items-center justify-center bg-slate-200 hover:bg-slate-300 h-10 w-36 gap-4 my-auto rounded-full">
                            <span>Download</span>
                            <img src={Download} alt="download-icon" className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="h-full w-full bg-white rounded-2xl p-6">
                        <section className="w-full flex justify-between">
                            <div>
                                <h1 className="text-5xl font-medium mb-2">Last tasks</h1>
                                <small className="font-medium"><strong>117 total, </strong>proceed to resolve them</small>
                            </div>
                            <div className="flex justify-center items-center gap-6">
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-5xl font-medium mb-2">94</h1>
                                    <small className="font-medium">Done</small>
                                </div>
                                <div className="w-[1px] h-[90%] bg-slate-200"></div>
                                <div>
                                    <h1 className="text-5xl font-medium mb-2">23</h1>
                                    <small className="font-medium">In progress</small>
                                </div>
                            </div>
                        </section>

                        <div className="w-9/10 h-[1px] bg-slate-200 mt-4"></div>
                        <div className="my-4 flex gap-2">
                            <input type="checkbox" />
                            <span className="ml-[2%] w-[17%] ">Name</span>
                            <span className="ml-[2%] w-[17%] ">Company</span>
                            <span className="ml-[2%] w-[17%] ">Email</span>
                        </div>
                        <div className="w-9/10 h-[1px] bg-slate-200"></div>
                        <div className=''> <TaskListCards /> </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
  )
}

export default Dashboard