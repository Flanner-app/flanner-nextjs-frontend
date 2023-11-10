import BlogFilters from '@/components/blog/BlogFilters'
import BlogHero from '@/components/blog/BlogHero'

const BlogPage = () => {
  return (
    <div className="grow overflow-x-hidden">
      <BlogHero />
      <div className="relative">
        <BlogFilters />
      </div>
    </div>
  )
}

export default BlogPage
