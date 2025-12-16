import { getBlogs } from "@/lib/blogs"
import { Link } from "@heroui/react";

export const metadata = {
    title: 'Blog',
    description: 'Read my thoughts on web development, design and more.',
  };



export default async function Blog(){
    const blogs = await getBlogs()

    return(
        <section >
            <h2 className="text-xl font-semibold mb-8" >Read my blogs</h2> 

            <div className="flex flex-col gap-4" >

            {
                blogs.map(blog => (
                    <div key={blog?.slug} >

                    <Link color="foreground" underline="hover" href={`/blog/${blog?.slug}`} key={blog?.slug} className="" >
                        <h3 className="text-lg font-semibold" >{blog?.frontmatter.title}</h3>
                    </Link>
                        <p>{blog?.frontmatter.summary}</p>
                    </div>
                ))
            }
            </div>
        </section>
    )
}