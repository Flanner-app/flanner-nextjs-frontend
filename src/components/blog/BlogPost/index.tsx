import clsx from 'clsx'
import Image from 'next/image'
import { Clock, Eye, Heart } from 'react-feather'
import { v4 as uuidv4 } from 'uuid'
import { formatNumberToSmall } from '@/utils/numbers'
import IngredientCard from '@/components/shared/IngredientCard'
import { NutritionTable } from '@/components/shared/types/recipes'
import Heading from '@/components/shared/typography/Heading'
import BlogPostHeader from './BlogPostHeader'
import { PLACEHOLDER_INGREDIENT } from './BlogPostSidebar'
import NutritionalTable from './NutritionalTable'
import RecipeStep from './RecipeStep'
import BlogCard from '../BlogCard'
import Tag from '../Tag'

const FIVE = 5
const SIX = 6
const TWO = 2

type BlogPostProps = {
  title: string
  banner: string
  numberOfLikes: number
  numberOfViews: number
  tags: Array<string>
  totalCookingTime: string
  servings: number
  nutritionalInfo: NutritionTable
  ingredients: any
  prerequisites: string
  finishingText: string
  steps: Array<{
    id: string
    title: string
    ingredients: any
    imgSrc: string
    text: string
  }>
}

const PLACEHOLDER: BlogPostProps = {
  title: 'Savor the Spice: Mastering Homemade Kimchi Dumplings',
  banner: '/images/fridge-placeholder.webp',
  numberOfLikes: 1354,
  numberOfViews: 12354,
  tags: ['Lunch', 'Spicy', 'Winter', 'Slow Cooked'],
  totalCookingTime: '30 minutes',
  servings: 8,
  nutritionalInfo: {
    servingSize: 1,
    servedIn: 'bowl',
    calories: 153,
    totalFat: { quantity: 12, dailyRecommended: 150 },
    saturatedFat: { quantity: 120, dailyRecommended: 350 },
    transFat: { quantity: 3, dailyRecommended: null },
    cholesterol: { quantity: 12, dailyRecommended: 50 },
    sodium: { quantity: 122, dailyRecommended: 170 },
    totalCarbs: { quantity: 12, dailyRecommended: 30 },
    fibers: { quantity: 2, dailyRecommended: 10 },
    totalSugars: { quantity: 2, dailyRecommended: null },
    addedSugars: { quantity: 12, dailyRecommended: 15 },
    protein: { quantity: 1, dailyRecommended: null },
    micros: {
      vitaminA: {
        label: 'Vitamin A',
        quantity: 12,
        measuredIn: 'mg',
        dailyRecommended: 50,
      },
      vitaminC: {
        label: 'Vitamin C',
        quantity: 650,
        measuredIn: 'mg',
        dailyRecommended: 50,
      },
      vitaminD: {
        label: 'Vitamin D',
        quantity: 155,
        measuredIn: 'mg',
        dailyRecommended: 50,
      },
    },
  },
  ingredients: PLACEHOLDER_INGREDIENT,
  prerequisites:
    'This dish is both comforting and EXTREMELY TASTY!! Its great for a family dinner',
  finishingText:
    'This is a finishin text, it probably will say something like this dish is very tasty bla-bla',
  steps: [
    {
      id: uuidv4(),
      title:
        'Cook it Cook it Cook it Cook it Cook it Cook it Cook it Cook it Cook it ',
      ingredients: PLACEHOLDER_INGREDIENT.slice(0, SIX),
      imgSrc: '/images/fridge-placeholder.webp',
      text: `Some ultra long text with no purpose to it Some ultra long text with no purpose to it 
      Some ultra long text with no purpose to it 
      Some ultra long text with no purpose to it`,
    },
    {
      id: uuidv4(),
      title: 'Cook it',
      ingredients: PLACEHOLDER_INGREDIENT.slice(0, FIVE),
      imgSrc: '/images/fridge-placeholder.webp',
      text: 'text',
    },
    {
      id: uuidv4(),
      title: 'Cook it',
      ingredients: PLACEHOLDER_INGREDIENT.slice(0, FIVE),
      imgSrc: '/images/fridge-placeholder.webp',
      text: 'text',
    },
    {
      id: uuidv4(),
      title: 'Cook it',
      ingredients: PLACEHOLDER_INGREDIENT.slice(0, FIVE),
      imgSrc: '/images/fridge-placeholder.webp',
      text: 'text',
    },
    {
      id: uuidv4(),
      title: 'Cook it',
      ingredients: PLACEHOLDER_INGREDIENT.slice(0, FIVE),
      imgSrc: '/images/fridge-placeholder.webp',
      text: 'text',
    },
  ],
}

const BlogPost = () => {
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
            {formatNumberToSmall(PLACEHOLDER.numberOfViews)}
            <Eye size={16} />
          </Tag>
          <Tag type="info">
            {formatNumberToSmall(PLACEHOLDER.numberOfLikes)}
            <Heart size={16} />
          </Tag>
        </div>
        <Image
          src={PLACEHOLDER.banner}
          fill
          sizes="1240px"
          className="object-cover"
          alt={PLACEHOLDER.title}
        />
      </div>
      <div className="px-6 py-4 lg:px-10 xl:max-w-7xl">
        <Heading as="h1" type="display" className="mb-4">
          {PLACEHOLDER.title}
        </Heading>

        <div className="mb-2 flex flex-wrap items-center gap-2">
          {/* todo: split tags into categories, each of which will have it's bg
          color */}
          {PLACEHOLDER.tags.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
        <div className="mb-5 flex items-center gap-4">
          <Tag
            type="info"
            className="inline border-2 border-black-default bg-yellow-regular shadow-brutalism"
          >
            <Clock size={16} />
            {PLACEHOLDER.totalCookingTime}
          </Tag>
          <span className="font-rubik font-medium leading-none opacity-50">
            {PLACEHOLDER.servings} x servings
          </span>
        </div>

        <p className="mb-6 text-lg">{PLACEHOLDER.prerequisites}</p>

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
            {PLACEHOLDER.ingredients.map((item: any) => (
              <IngredientCard
                key={item.id}
                label={item.label}
                iconSrc="/images/cards/appliances/grill.webp"
                measurement={item.measurement}
                quantity={item.quantity}
                className={clsx(
                  PLACEHOLDER.ingredients.length % TWO !== 0 &&
                    'last:col-span-2',
                )}
              />
            ))}
          </div>
        </div>
        {PLACEHOLDER.steps.map((step, i) => (
          <div key={step.id} className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <RecipeStep step={i + 1} className="shrink-0" />
              <Heading as="h3" type="headline">
                {step.title}
              </Heading>
            </div>
            <div
              className={clsx(
                'relative aspect-video rounded-2xl border-2 border-black-default',
                'mb-4 overflow-hidden shadow-brutalism',
              )}
            >
              <Image
                fill
                src={step.imgSrc}
                sizes="1280px"
                className="object-cover"
                alt={step.title}
              />
            </div>
            {step.ingredients.length && (
              <div
                className={clsx(
                  'mb-4 grid grid-cols-2 gap-2 rounded-xl border-2 border-black-default',
                  'bg-tones-lavender p-2 shadow-brutalism sm:grid-cols-3 md:grid-cols-4',
                  'lg:grid-cols-5',
                )}
              >
                {step.ingredients.map((ingredient: any) => (
                  <IngredientCard
                    key={ingredient.id}
                    label={ingredient.label}
                    iconSrc="/images/cards/appliances/grill.webp"
                    measurement={ingredient.measurement}
                    quantity={ingredient.quantity}
                  />
                ))}
              </div>
            )}
            <p className="text-lg">{step.text}</p>
          </div>
        ))}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-4">
            <RecipeStep step={PLACEHOLDER.steps.length} className="shrink-0" />
            <Heading as="h3" type="headline">
              Enjoy!
            </Heading>
          </div>
          <p className="mb-4">{PLACEHOLDER.finishingText}</p>
          <NutritionalTable
            servings={PLACEHOLDER.servings}
            {...PLACEHOLDER.nutritionalInfo}
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
        </div>
      </div>
    </>
  )
}

export default BlogPost
