import * as React from "react"
// import { theme } from "../theme"
import Play from '../Icons/Play'
import Context from '../Icons/Context'
import Download from '../Icons/Download'
import './Button.css'

// Types
export type ButtonProps = {
  /** Optional string that can be used to set the button value */
  text?: string | any

  /** Disable button */
  disabled?: boolean

  children?: any

  /** Button kind */
  kind?: "primary" | "secondary" | "danger" | "icon"

  /** Button content type */
  contentType?: "icon" | "default"

}

export type IconProps = {
  icon?: React.ReactNode
}

// Component
export const Button = ({
  text,
  disabled,
  children,
  kind,
  contentType
}: ButtonProps) => (
  <button className={`button ${disabled ? "disabled" : ""} ${kind ? kind : ""} ${contentType ? contentType : ""}`}>
    {text || children}
  </button>
)

export const IconButton = ({ icon }: IconProps) => ( // this is dumb, do this better
  <Button kind="secondary" contentType="icon">
    {icon === "play" &&
      <Play />
    }
    {icon === "context" &&
      <Context />
    }
    {icon === "download" &&
      <Download />
    }
  </Button>
)

// // Styles
// const StyledButton = styled.button`
//   background: ${theme.color.paneBg};
//   border-radius: 4px;
//   border: none;
//   box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
//   color: ${theme.color.body};
//   font-family: ${theme.font};
//   font-size: 15px;
//   font-weight: 600;
//   letter-spacing: -0.2px;
//   line-height: 1.1;
//   margin: 0;
//   padding: ${theme.space[3]};
//   text-align: center;
//   &:hover {
//     color: ${theme.color.bodyLight};
//     transition: box-shadow 0.2s, color 0.2s, background-color 0.2s;
//     box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),
//       0px 1px 1px 0px rgba(0, 0, 0, 0.05);
//   }
//   &:active {
//     transition: none;
//     color: ${theme.color.bodyLighter};
//     background-color: ${theme.color.paneBgDark};
//     box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
//       inset 0px 0px 0px 1px hsla(0, 0%, 0%, 0.05);
//   }
//   &.fluid {
//     width: 100%;
//   }
//   &.disabled {
//     color: ${theme.color.bodyLightest};
//     pointer-events: none;
//   }

//   /* Primary styles */
//   &.primary {
//     background: #242424;
//     color: #fff;
//   }
//   &.primary:hover {
//     color: rgba(255, 255, 255, 0.8);
//     box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),
//       0px 1px 1px 0px rgba(0, 0, 0, 0.15);
//   }
//   &.primary:active {
//     color: rgba(255, 255, 255, 0.7);
//     background: ${theme.color.primaryDark};
//     box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
//       inset 0px 0px 0px 1px hsla(0, 0%, 0%, 0.05);
//   }

//   /* Danger styles */
//   &.danger {
//     background: ${theme.color.danger};
//     color: #fff;
//   }
//   &.danger:hover {
//     color: rgba(255, 255, 255, 0.8);
//     box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),
//       0px 1px 1px 0px rgba(0, 0, 0, 0.15);
//   }
//   &.danger:active {
//     color: rgba(255, 255, 255, 0.6);
//     background: ${theme.color.dangerDark};
//     box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
//       inset 0px 0px 0px 1px hsla(0, 0%, 0%, 0.05);
//   }
// `
