import type { Meta, StoryObj } from '@storybook/react'
import EnergyBar from '@/components/shared/stats/EnergyBar'

const meta: Meta<typeof EnergyBar> = {
  title: 'Stats/EnergyBar',
  component: EnergyBar,
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

export default meta

type Story = StoryObj<typeof EnergyBar>

export const EnergyBlock: Story = {
  args: {
    currentEnergy: 3,
    maxEnergy: 5,
  },
}
