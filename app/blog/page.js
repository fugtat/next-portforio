// app/blog/page.js

import Link from 'next/link'
import Image from 'next/image'
import Pagenation from "../components/pagenation"
import { getAllBlogs, blogsPerPage } from '../utils/mdQueries'

export const metadata = {
    title: "ブログ｜ウッホウホウホハウス",
    description: "ブログ海苔巻きの一大生産地である纒向遺跡では、海苔巻きを今日も剥いています。"
  }
  
const Blog = async() => {
    const { blogs, numberPages } = await getAllBlogs()
    const limitedBlogs = blogs.slice(0, blogsPerPage)
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <h1>blog</h1>
                    <p>野生動物の駆除を素手で行っています。メインはハムスターです。</p>
                    {limitedBlogs.map((blog, index) =>
                        <div key={index} className="blogCard">
                            <div className="cardContainer">
                                <h2>{blog.frontmatter.title}</h2>
                                <p>{blog.frontmatter.excerpt}</p>
                                <p>{blog.frontmatter.date}</p>
                                <Link href={`/blog/${blog.slug}`}>Read More</Link>
                            </div>
                            <div className='blogImg'>
                                <Image src={blog.frontmatter.image} alt="card-image" height={300} width={1000} quality={90} priority={true} />
                            </div>
                        </div>
                    )}
                </div>
                <Pagenation numberPages={numberPages} />
            </div>
        </>
    )
}

export default Blog