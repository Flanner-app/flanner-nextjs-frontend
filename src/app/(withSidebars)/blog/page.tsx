import { getAllTags } from '@/services/tags'
import BlogFilters from '@/components/blog/BlogFilters'
import BlogHero from '@/components/blog/BlogHero'
import BlogPageContent from '@/components/blog/BlogPageContent'

const BlogPage = async () => {
  const tags = await getAllTags()

  return (
    <div className="grow overflow-x-hidden">
      <BlogHero />
      <div className="relative">
        <BlogFilters tags={tags || []} />
      </div>
      <BlogPageContent />
    </div>
  )
}

export default BlogPage
