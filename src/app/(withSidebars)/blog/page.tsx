import { getAllTags } from '@/services/tags'
import BlogFilters from '@/components/blog/BlogFilters'
import BlogHero from '@/components/blog/BlogHero'
import BlogPageContent from '@/components/blog/BlogPageContent'

const BlogPage = async () => {
  const tags = await getAllTags()
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogPost`).then(
    (res) => res.json(),
  )
  console.log(posts)

  return (
    <div className="grow overflow-x-hidden">
      <BlogHero />
      <div className="relative">
        <BlogFilters tags={tags || []} />
      </div>
      <BlogPageContent posts={posts.data || []} />
    </div>
  )
}

export default BlogPage
