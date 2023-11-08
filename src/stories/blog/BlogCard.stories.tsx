import type { Meta, StoryObj } from '@storybook/react'
import BlogCard from '@/components/blog/BlogCard'

const meta: Meta<typeof BlogCard> = {
  title: 'Blog/Blog Card',
  component: BlogCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="max-w-md p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof BlogCard>

export const RegularBlogCard: Story = {
  args: {
    title: 'How to hold a knife? Did you know that? Its actually very easy',
    tags: [
      'skills',
      'lunch',
      'history',
      'lunch',
      'dinner',
      'knife',
      'japanese',
    ],
    imgSrc:
      'https://www.tastingtable.com/img/gallery/12-basic-knife-skills-and-techniques-you-need-to-know/intro-1672793068.jpg',
    viewsAmount: 15627,
    likesAmount: 5769,
  },
}
