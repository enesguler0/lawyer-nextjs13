import React from 'react'
import Link from 'next/link';
import getPostMetadata from '@/components/getPostMetadata'
import PostPreview from '@/components/PostPreview';
import Footer from '@/components/Footer';




export default function Blog() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post)=>(
        <PostPreview key={post.slug} {...post}/>
    ))
  return (
    <div className='px-4'>
        <div className='bg-white rounded-lg mx-auto max-w-3xl m-10 pb-20'>
            <h1 className='bg-slate-800 rounded-t-md text-4xl font-bold text-gray-300 text-center p-10 '>Yazılarımız</h1>
            <div className='grid grid-cols-1  gap-3'> {postPreviews} </div>
          
        </div>
        <div className='border-t border-gray-300'>
            <Footer/>
        </div>
        
    </div>
  )
}
