import React from 'react'

export default function ConfirmDeletion({ setShowWrning , handleDelete }) {
  return (<div className="full-body">
    <div className='delete-cant'>
        <p>Are you sure , You wanna delete this task</p>
        <div className="confirm">
            <button className='task-delete' onClick={() => { setShowWrning(false) ; handleDelete() }}>Yes</button>
            <button onClick={() => setShowWrning(false)} className='task-not-delete'>No</button>
        </div>
    </div>
</div>
  )
}
