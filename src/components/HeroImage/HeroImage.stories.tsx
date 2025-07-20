import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    backgroundImage: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    backgroundImage: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80',
    title: 'Welcome to UI Garden',
    subtitle: 'Build beautiful components with ease',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    backgroundImage: 'https://placehold.co/1200x500?text=Disabled+Hero+Image',
    title: 'Access Restricted',
    subtitle: "You can't interact with this section",
    disabled: true,
  },
};
