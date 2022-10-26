import type { ComponentStory, ComponentMeta } from '@storybook/react'

// import { Button } from './Button'
import Button from '../src/button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Button',

  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// : ComponentStory<typeof Button>
const Template: ComponentStory<typeof Button> = args => <Button {...args} />
// function Template (args) {
//   return <Button {...args} />
// }

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  theme: 'default',
  children: 'Button',
}
