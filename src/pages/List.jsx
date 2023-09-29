import React from 'react'

import { BiEditAlt } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'

const List = ({id, task, setUpdateUI, updateMode}) => {
  return (
    <li className='items'>
        {task}
        <div className='icon_holder'>
            <BiEditAlt className='icon' />
            <BsTrash className='icon' />
        </div>
    </li>
  )
}

export default List