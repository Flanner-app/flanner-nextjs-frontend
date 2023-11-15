import BlogFilters from '@/components/blog/BlogFilters'
import BlogHero from '@/components/blog/BlogHero'
import BlogPageContent from '@/components/blog/BlogPageContent'

const BlogPage = () => {
  return (
    <div className="grow overflow-x-hidden">
      <BlogHero />
      <div className="relative">
        <BlogFilters />
      </div>
      <BlogPageContent />
    </div>
  )
}

export default BlogPage
