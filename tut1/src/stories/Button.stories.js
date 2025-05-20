import { fn } from '@storybook/test';
import Button from '../component/Button';

export default {
  title: 'Button',
  component: Button,
  // parameters: {
  //   layout: 'centered',
  // },
  // tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // args: { onClick: fn() },
};

export const Red = () => <Button label="Press me" backgroundColor="red" />

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
