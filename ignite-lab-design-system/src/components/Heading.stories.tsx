import { Meta, StoryObj } from "@storybook/react"
import { Heading, HeadingPorps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
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
} as Meta<HeadingPorps>

export const Default: StoryObj<HeadingPorps> = {}

export const Small: StoryObj<HeadingPorps> = {
  args: {
    size: "sm"
  }
}

export const Large: StoryObj<HeadingPorps> = {
  args: {
    size: "lg"
  }
}

export const CustomComponent: StoryObj<HeadingPorps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with h1</h1>
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