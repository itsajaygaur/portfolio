import { getAllBlogSlug, getBlogBySlug } from "@/lib/blogs"
import { notFound } from "next/navigation"

export async function generateMetadata({params}: {params: {slug: string}}){
    const blog = await getBlogBySlug(params.slug)
    if(!blog) return {}
    return{
        title: blog.frontmatter.title,
        description: blog.frontmatter.summary
    }
}



export async function generateStaticParams() {
    return getAllBlogSlug()
  }


export default async function BlogPage({params}: {params: {slug: string}}){
    const blog = await getBlogBySlug(params.slug)
    if(!blog) return notFound()
    return(
        <main>
            <h2 className="text-4xl font-semibold mb-4" >{blog.frontmatter.title}</h2>
            <article className="prose dark:prose-invert" >{blog.content}</article>
        </main>
    )
}