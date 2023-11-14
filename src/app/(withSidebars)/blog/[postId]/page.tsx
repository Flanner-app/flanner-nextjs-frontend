import BlogPost from '@/components/blog/BlogPost'
import BlogPostSidebar from '@/components/blog/BlogPost/BlogPostSidebar'

const BlogPostPage = () => {
  return (
    <div className="flex grow">
      <div className="grow lg:pr-80 xl:pr-96">
        <BlogPost />
      </div>
      <BlogPostSidebar />
    </div>
  )
}

export default BlogPostPage
