import React from 'react'
import { Link } from 'react-router-dom'

export const PopularPosts = ({ post }) => {
  return (
    <div className='bg-green-600 my-1'>
      <Link
        to={`${post._id}`}
        className='flex text-xs p-2 text-gray-100 hover:bg-green-800 hover:text-white'
      >
        {post.title}
      </Link>
    </div>
  )
}
