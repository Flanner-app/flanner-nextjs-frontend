import type { Meta, StoryObj } from '@storybook/react'
import FilterTag from '@/components/blog/BlogFilters/FilterTag'

const meta: Meta<typeof FilterTag> = {
  title: 'Blog/FilterTag',
  component: FilterTag,
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

type Story = StoryObj<typeof FilterTag>

export const RegularFilterTag: Story = {
  args: {
    children: 'Skills',
  },
}
