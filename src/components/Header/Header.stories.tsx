import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { CartProvider } from '@/context/CartContext';

const meta = {
  title: 'Layout/Header',
  component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        cart:{initialCount: 0},
    },
    decorators: [
        (Story,context) => (
            <CartProvider initialCount={context.parameters.cart?.initialCount || 0}>
                <Story />
            </CartProvider>
        ),
    ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyCart: Story = {};

export const WithItems: Story = {parameters: {cart: {initialCount: 3}}};

export const ManyItems: Story = {parameters: {cart: {initialCount: 99}}};

export const customerStoreName: Story = {
    args: {storeName: 'ShopKart Premium Mega Store'},
    parameters: {cart: {initialCount: 5}},
};