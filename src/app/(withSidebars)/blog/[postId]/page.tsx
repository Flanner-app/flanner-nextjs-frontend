import BlogPost from '@/components/blog/BlogPost'
import BlogPostSidebar from '@/components/blog/BlogPost/BlogPostSidebar'

const BlogPostPage = () => {
  return (
    <div className="flex grow overflow-hidden">
      <div className="grow">
        <BlogPost />
      </div>
      <BlogPostSidebar />
    </div>
  )
}

export default BlogPostPage
