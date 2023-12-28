import clsx from 'clsx'
import Image from 'next/image'
import { Clock, Eye, Heart } from 'react-feather'
import { BlogPost } from '@/types/recipes'
import { formatNumberToSmall } from '@/utils/numbers'
import IngredientCard from '@/components/shared/IngredientCard'
import Heading from '@/components/shared/typography/Heading'
import BlogPostHeader from './BlogPostHeader'
import NutritionalTable from './NutritionalTable'
import RecipeStepContent from './RecipeStep'
import RecipeStepNumber from './RecipeStepNumber'
import BlogCard from '../BlogCard'
import Tag from '../Tag'

const BlogPost = ({ blogPost }: { blogPost: BlogPost }) => {
  return (
    <>
      <BlogPostHeader title="Savor the Spice: Mastering Homemade Kimchi Dumplings" />
      <div
        className={clsx(
          'relative aspect-[2.3/1] w-full border-b-2 border-black-default',
          'lg:hidden',
        )}
      >
        <div className="absolute bottom-2 right-2 z-10 flex items-center gap-2 p-2">
          <Tag type="info">
            {blogPost.numberOfViews &&
              formatNumberToSmall(blogPost.numberOfViews)}
            <Eye size={16} />
          </Tag>
          <Tag type="info">
            {blogPost.numberOfLikes &&
              formatNumberToSmall(blogPost.numberOfLikes)}
            <Heart size={16} />
          </Tag>
        </div>
        <Image
          src={blogPost.coverSrc}
          fill
          sizes="1240px"
          className="object-cover"
          alt={blogPost.title}
        />
      </div>
      <div className="px-6 py-4 lg:px-10 xl:max-w-7xl">
        <Heading as="h1" type="display" className="mb-4">
          {blogPost.title}
        </Heading>

        {blogPost.tags && (
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {/* todo: split tags into categories, each of which will have it's bg
          color */}
            {blogPost.tags.map((item) => (
              <Tag key={item._id}>{item.label}</Tag>
            ))}
          </div>
        )}
        <div className="mb-5 flex items-center gap-4">
          <Tag
            type="info"
            className="inline border-2 border-black-default bg-yellow-regular shadow-brutalism"
          >
            <Clock size={16} />
            {blogPost.totalCookingTime}
          </Tag>
          <span className="font-rubik font-medium leading-none opacity-50">
            {blogPost.servings} x servings
          </span>
        </div>

        <p className="mb-6 text-lg">{blogPost.prerequisites}</p>

        <div
          className={clsx(
            'rounded-2xl border-2 border-black-default bg-tones-lavender p-4',
            'mb-16 shadow-brutalism lg:hidden',
          )}
        >
          <Heading as="h2" type="headline" className="mb-4">
            Ingredients:
          </Heading>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {/* todo: add a checkbox */}
            {blogPost.ingredients.map((item) => (
              <IngredientCard
                key={item._id}
                label={item.label}
                iconSrc="/images/cards/appliances/grill.webp"
                measurement={item.measurement}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        {blogPost.steps.map((step, i) => (
          <RecipeStepContent key={step._id} step={step} index={i} />
        ))}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-4">
            <RecipeStepNumber
              number={blogPost.steps.length}
              className="shrink-0"
            />
            <Heading as="h3" type="headline">
              Enjoy!
            </Heading>
          </div>
          <p className="mb-4">{blogPost.finishingText}</p>
          <NutritionalTable
            servings={blogPost.servings}
            {...blogPost.nutritionalInfo}
          />
        </div>
        <div>
          <Heading as="h2" type="display" className="mb-4">
            Similar Recipes
          </Heading>
          <div className="grid items-center gap-4 sm:grid-cols-2 2xl:grid-cols-4">
            <BlogCard
              href="/blog/1"
              title="Similar post"
              tags={[]}
              imgSrc="/images/fridge-placeholder.webp"
              viewsAmount={1350}
              likesAmount={150}
              totalCookingTime="30 min"
            />
            <BlogCard
              href="/blog/1"
              title="Similar post"
              tags={[]}
              imgSrc="/images/fridge-placeholder.webp"
              viewsAmount={1350}
              likesAmount={150}
              totalCookingTime="30 min"
            />
            <BlogCard
              href="/blog/1"
              title="Similar post"
              tags={[]}
              imgSrc="/images/fridge-placeholder.webp"
              viewsAmount={1350}
              likesAmount={150}
              totalCookingTime="30 min"
            />
            <BlogCard
              href="/blog/1"
              title="Similar post"
              tags={[]}
              imgSrc="/images/fridge-placeholder.webp"
              viewsAmount={1350}
              likesAmount={150}
              totalCookingTime="30 min"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPost
