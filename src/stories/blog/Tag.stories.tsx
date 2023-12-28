import type { Meta, StoryObj } from '@storybook/react'
import Tag from '@/components/blog/Tag'

const meta: Meta<typeof Tag> = {
  title: 'Blog/Tag',
  component: Tag,
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

type Story = StoryObj<typeof Tag>

export const RegularBlogTag: Story = {
  args: {
    type: 'regular',
    children: 'Skills',
  },
}
