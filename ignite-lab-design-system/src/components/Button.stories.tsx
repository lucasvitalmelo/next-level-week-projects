import { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonPorps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create account",
  },
  argTypes: {}
} as Meta<ButtonPorps>

export const Default: StoryObj<ButtonPorps> = {}

