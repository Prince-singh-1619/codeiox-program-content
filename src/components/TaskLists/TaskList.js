import React from 'react'

const TaskList = ({firstName, lastName, companyName, email, adminImg}) => {
  return (
        <div className="my-4 flex gap-2">
            <input type="checkbox" />
            <span className="ml-[2%] w-[17%] ">{firstName+" "+lastName}</span>
            <span class="ml-[2%] w-[17%]">{companyName}</span>
            <span class="ml-[2%] w-[17%]">{email}</span>
        </div>
  )
}

export default TaskList