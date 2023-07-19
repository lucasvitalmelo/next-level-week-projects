import { Meta, StoryObj } from "@storybook/react"
import { Text, TextPorps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem ipsum",
    size: "md"
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: "inline-radio"
      }
    }
  }
} as Meta<TextPorps>

export const Default: StoryObj<TextPorps> = {}

export const Small: StoryObj<TextPorps> = {
  args: {
    size: "sm"
  }
}

export const Large: StoryObj<TextPorps> = {
  args: {
    size: "lg"
  }
}

export const CustomComponent: StoryObj<TextPorps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with P tag</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}