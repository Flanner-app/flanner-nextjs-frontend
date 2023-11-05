import type { Meta, StoryObj } from '@storybook/react'
import SelectionCard from '@/components/shared/SelectionCard'

const meta: Meta<typeof SelectionCard> = {
  title: 'Basic components/Selection Card',
  component: SelectionCard,
  // this component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // more on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
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

type Story = StoryObj<typeof SelectionCard>

export const ApplianceSelectionCard: Story = {
  args: {
    label: 'Microwave',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/2040/2040071.png',
    isSelected: true,
  },
}
