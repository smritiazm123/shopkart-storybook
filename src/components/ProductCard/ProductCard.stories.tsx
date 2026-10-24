import {Meta, StoryObj} from '@storybook/react';
import {ProductCard} from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Running Shoes',
    price: 2499,
    imageUrl: 'https://picsum.photos/seed/shoes/400/300',
    rating: 4.5,
    inStock: true,
  },
  argTypes: {
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 0.1 },
    },
    price: {
      control: { type: 'number', min: 0, step: 100 },
    },
    onAddToCart: {table: {category: 'Events'}},
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InStock: Story = {};

export const OutOfStock: Story = {
  args: {
    inStock: false,
  },
};

export const LongTitle: Story = {
  args: {
    title: 'Ultra Comfortable Running Shoes with Extra Cushioning and Support for Long Distances',
  },
};

export const LowRating: Story = {
  args: {
    rating: 2.0,
  },
};

export const ExpensiveProduct: Story = {
  args: {
    price: 5999,
    title: 'Gaming Laptop',
    imageUrl: 'https://picsum.photos/seed/laptop/400/300',
  },
};

export const BrokenImage: Story = {
  args: {
    imageUrl: 'https://invalid-url.com/image.jpg',
  },
};


export const EmptyImageUrl: Story = {
  args: {
    imageUrl: '',
  },
};


export const DarkMode: Story = {
    globals: {
        theme: 'dark',
    },
};