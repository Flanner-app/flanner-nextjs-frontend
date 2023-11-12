import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Input, { InputProps } from '@/components/shared/Input'

const meta: Meta<typeof Input> = {
  title: 'Basic components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
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
