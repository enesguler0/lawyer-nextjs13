import React from 'react'
import fs from "fs"
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata'

const getPostContent = (slug) =>{
    const folder = "posts/";
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content);
    return matterResult;
}
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function BlogPage(props) {
    const slug =props.params.slug;
    const post = getPostContent(slug);
  return (
    <div className='bg-white mx-auto max-w-5xl '>
        <Link href={"/posts"}>
        <h1 className='bg-slate-800  text-4xl font-bold text-gray-300 text-center p-10 '>Yazılarımız</h1>
        </Link>
        <div className='px-4'>
          <h2 className='text-3xl font-semibold pt-4 px-10 text-slate-900 m-6 ' >{post.data.title}</h2>
          <article className="prose lg:prose-xl pt-4">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
        
        
    </div>
  )
}
