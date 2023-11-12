import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Select, { SelectProps } from '@/components/shared/Select'

const meta: Meta<typeof Select> = {
  title: 'Basic components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="h-96 p-8">
        <Story />
      </div>
    ),
  ],
}

const SelectWrapper = ({ ...args }: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState('')

  const valueList = ['grams', 'kg', 'tblsp', 'cup', 'ml', 'pieces', 'items']

  return (
    <Select
      {...args}
      value={selectedValue}
      valueList={valueList}
      onChange={(value) => setSelectedValue(value)}
    />
  )
}

export default meta

type Story = StoryObj<typeof Select>

export const RegularSelect: Story = {
  args: {
    label: 'Label',
    placeholder: 'Select the measurement',
    name: 'measurement select',
  },
  render: ({ ...args }: SelectProps) => <SelectWrapper {...args} />,
}
