import BlogCard from './BlogCard'

const BlogPageContent = () => {
  return (
    <div className="grid gap-4 p-4 pt-10 sm:grid-cols-2 sm:p-6 lg:grid-cols-3 xl:grid-cols-4">
      <BlogCard
        href="/blog/1"
        title="Similar post"
        tags={['Asian']}
        imgSrc="/images/fridge-placeholder.webp"
        viewsAmount={1350}
        likesAmount={150}
      />
      <BlogCard
        href="/blog/1"
        title="Similar post"
        tags={['Asian']}
        imgSrc="/images/fridge-placeholder.webp"
        viewsAmount={1350}
        likesAmount={150}
      />
      <BlogCard
        href="/blog/1"
        title="Similar post"
        tags={['Asian']}
        imgSrc="/images/fridge-placeholder.webp"
        viewsAmount={1350}
        likesAmount={150}
      />
      <BlogCard
        href="/blog/1"
        title="Similar post"
        tags={['Asian']}
        imgSrc="/images/fridge-placeholder.webp"
        viewsAmount={1350}
        likesAmount={150}
      />
      <BlogCard
        href="/blog/1"
        title="Similar post"
        tags={['Asian']}
        imgSrc="/images/fridge-placeholder.webp"
        viewsAmount={1350}
        likesAmount={150}
      />
      <BlogCard
        href="/blog/1"
        title="Similar post"
        tags={['Asian']}
        imgSrc="/images/fridge-placeholder.webp"
        viewsAmount={1350}
        likesAmount={150}
      />
    </div>
  )
}

export default BlogPageContent
