import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Input, { InputProps } from '@/components/shared/Input'

const meta: Meta<typeof Input> = {
  title: 'Basic components/Input',
  component: Input,
  // this component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // more on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
}

const InputWrapper = ({ ...args }: InputProps) => {
  const [value, setValue] = useState('')

  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  )
}

export default meta

type Story = StoryObj<typeof Input>

export const RegularInput: Story = {
  args: {
    label: 'Label',
    placeholder: 'What to cook?',
    type: 'regular',
  },
  render: ({ ...args }: InputProps) => <InputWrapper {...args} />,
}
