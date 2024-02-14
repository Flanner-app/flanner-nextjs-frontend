import type { Meta, StoryObj } from '@storybook/react'
import RecipeCard from '@/components/shared/cards/RecipeCard'

const meta: Meta<typeof RecipeCard> = {
  title: 'Blog/Recipe Card',
  component: RecipeCard,
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

type Story = StoryObj<typeof RecipeCard>

export const RegularRecipeCard: Story = {
  args: {
    title: 'How to hold a knife? Did you know that? Its actually very easy',
    tags: [
      { _id: '1', label: 'Lunch' },
      { _id: '1', label: 'Beginner' },
      { _id: '1', label: 'Dinner' },
      { _id: '1', label: 'Lunch' },
      { _id: '1', label: 'Beginner' },
      { _id: '1', label: 'Dinner' },
    ],
    imgSrc:
      'https://www.tastingtable.com/img/gallery/12-basic-knife-skills-and-techniques-you-need-to-know/intro-1672793068.jpg',
    viewsAmount: 15627,
    likesAmount: 5769,
  },
}
