import React from 'react';
import { FaUser } from "react-icons/fa";


const Comment = ({ commentData }) => {
    const { username, comment } = commentData;
    return (
        <div className='flex flex-col'>
            <div className='flex items-center gap-4 p-2 my-2 border-amber-50'>
                <FaUser />
                <div className='flex-col '>
                    <p className='font-bold'>{username}</p>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;