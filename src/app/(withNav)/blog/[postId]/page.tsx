import { notFound } from 'next/navigation'
import BlogPost from '@/components/blog/BlogPost'
import BlogPostSidebar from '@/components/blog/BlogPost/BlogPostSidebar'

const BlogPostPage = async ({ params }: { params: { postId: string } }) => {
  const blogPost = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogPost/${params.postId}`,
  ).then((res) => res.json())

  if (!blogPost.data) {
    return notFound()
  }

  return (
    <div className="flex grow">
      <div className="grow lg:pr-80 xl:pr-96">
        <BlogPost blogPost={blogPost.data} />
      </div>
      <BlogPostSidebar />
    </div>
  )
}

export default BlogPostPage
