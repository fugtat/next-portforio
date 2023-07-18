// app/blog/page.js

import Link from 'next/link'
import Image from 'next/image'
import Pagenation from "../../../components/pagenation"
import { getAllBlogs, blogsPerPage } from '../../../utils/mdQueries'

const PagenationPage = async(props) => {
    const { blogs, numberPages } = await getAllBlogs()
    const currentPage = props.params.pagenation
    const limitedBlogs = blogs.slice((currentPage -1) * blogsPerPage, currentPage * blogsPerPage )
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <h1>blog</h1>
                    <p>野生動物の駆除を素手で行っています</p>
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

export default PagenationPage

export async function generateStaticParams(){
    const { numberPages } = await getAllBlogs()
    let paths = []
    Array.from({ length: numberPages }).map((_, index) => paths.push(`/blog/page/${index + 2}`))

    return paths
}