import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: string
    text: string
}

const Button = ({text}:ButtonProps) => {
  return (
    <button>{text}</button>
  )
}

export default Button