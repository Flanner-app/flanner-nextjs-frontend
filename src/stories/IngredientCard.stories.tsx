import type { Meta, StoryObj } from '@storybook/react'
import IngredientCard from '@/components/shared/IngredientCard'

const meta: Meta<typeof IngredientCard> = {
  title: 'Basic components/GroceryCard',
  component: IngredientCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="max-w-96 p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof IngredientCard>

export const RegularIngredientCard: Story = {
  args: {
    label: 'Grounded pork',
    iconSrc: 'https://cdn-icons-png.flaticon.com/512/823/823215.png',
    measurement: 'grams',
    quantity: 120,
  },
}
