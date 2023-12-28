import { BlogPost } from '@/types/recipes'
import BlogCard from './BlogCard'

const BlogPageContent = ({ posts }: { posts: Array<BlogPost> }) => {
  return (
    <div className="grid gap-4 p-4 pt-10 sm:grid-cols-2 sm:p-6 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((item) => (
        <BlogCard
          key={item._id}
          href={`/blog/${item._id}`}
          title={item.title}
          tags={item.tags}
          imgSrc={item.coverSrc}
          viewsAmount={item.numberOfViews}
          likesAmount={item.numberOfLikes}
          totalCookingTime={item.totalCookingTime}
        />
      ))}
    </div>
  )
}

export default BlogPageContent
