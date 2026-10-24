import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {Badge} from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    text: "Badge Text",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    text:"In stock",
    tone: "success",
  },
};

export const Warning: Story = {
  args: {
    text:"Only 2 left",
    tone: "warning",
  },
};

export const Error: Story = {
  args: {
    text:"Out of stock",
    tone: "error",
  },
};

export const Neutral: Story = {
  args: {
    text:"New",
    tone: "neutral",
  },
};