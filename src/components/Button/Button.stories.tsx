import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {fn} from "storybook/test";
import {Button} from "./Button";


const meta={
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        label: "Add to Cart",
        onClick: fn(),
    },
argTypes: {
    variant: {
        control: { type: "radio" },
        options: ["primary", "secondary", "danger"],
        description: "Visual style of the button, Use dander only for destrictive actions",
        table: {catergory: "Appearance"},
    },
    size: {
        control:"inline-radio",
        options: ["small", "medium", "large"],
        table: {category: "Appearance"},
    },
    disabled: {
    table: {category: "State"},
    },
    loading: {
        table: {category: "State"}, 
        if: { arg: "disabled", truthy: false },
    },
    onClick: {
        table: {category: "Events"},
    },
     
}





} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: "primary"},
};

export const Secondary: Story = {
    args: {
        variant: "secondary",label: "Cancel"},
};

export const Danger: Story = {
    args: {
        variant: "danger",label: "Delete Account"},
};

export const Small: Story = {
    args: {
        size: "small"},
};

export const Large: Story = {
    args: {
        size: "large"},
};

export const Disabled: Story = {
    args: {
        disabled: true},
};

export const Loading: Story = {
    args: {
        loading: true},
};

export const VeryLongLabel: Story = {
    args: {
        label: "This is a very long label that should be truncated or wrapped properly in the button"},
};

export const DangerLarge: Story = {
    args: {
        size: "large",
        ...Danger.args,
    },
};


export const AllVariants: Story = {
    render: (args) => (
        <div style={{ display: "flex", gap: "1rem" }}>
            <Button {...args} variant="primary" label="Primary" />
            <Button {...args} variant="secondary" label="Secondary" />
            <Button {...args} variant="danger" label="Danger" />
        </div>
    ),
};