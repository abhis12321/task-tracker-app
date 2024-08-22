import React from 'react'

export default function ConfirmDeletion({ cancelDeleteTask, handleDeleteTask }) {
  return (
    <div className="absolute rounded-lg bg-blue-950/85 w-full h-full flex items-center justify-center text-white">
      <div className='flex flex-col items-center justify-center gap-3'>
        <p className='text-md font-semibold'>Are you sure , You wanna delete this task</p>
        <div className="flex items-center justify-center">
          <button className='font-semibold py-1 px-6 rounded bg-red-800 hover:bg-red-600' onClick={handleDeleteTask}>Yes</button>
          <button onClick={cancelDeleteTask} className='font-semibold py-1 px-6 rounded bg-green-800 hover:bg-green-600'>No</button>
        </div>
      </div>
    </div>
  )
}
