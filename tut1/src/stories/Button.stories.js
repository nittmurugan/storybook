import { fn } from '@storybook/test';
import Button from '../component/Button';

export default {
  title: 'Components/Button',
  component: Button,
  // parameters: {
  //   layout: 'centered',
  // },
  // tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    handleClick: { action: "handleClick" }
  },
  // args: { onClick: fn() },
};

const Template = args => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
}

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
}

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
}

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
}

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: "red",
  label: "Press Me or dont press me or if at all press me do some parkour",
  size: "md",
}


// export const Primary = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
