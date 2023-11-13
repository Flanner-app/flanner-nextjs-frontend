import Heading from '@/components/shared/typography/Heading'
import BlogPostHeader from './BlogPostHeader'

const BlogPost = () => {
  return (
    <div>
      <BlogPostHeader title="Savor the Spice: Mastering Homemade Kimchi Dumplings" />
      <div className="px-6 py-4">
        <Heading as="h1" type="display">
          Savor the Spice: Mastering Homemade Kimchi Dumplings
        </Heading>
      </div>
    </div>
  )
}

export default BlogPost
