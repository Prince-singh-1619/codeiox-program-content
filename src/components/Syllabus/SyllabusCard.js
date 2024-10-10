import React from 'react'

const SyllabusCard = ({title, onClick}) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
        <p className="h-fit bg-slate-200 border-2 rounded mt-3 p-2 cursor-pointer shadow-black drop-shadow-xl shadow-md">{title}</p>
    </div>
  )
}

export default SyllabusCard