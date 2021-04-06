import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls, Frame } from "framer"

type Props = System.ButtonProps & {
  width: number
  height: number
  top: number
}

const style = { // Framer <Frame> overrides
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.5rem",
  width: "auto",
  height: "auto",
  background: "transparent"
}

export class Button extends React.Component<Props> {
  render() {
    return (
      <Frame style={style} center>
        <System.Button {...this.props} />
      </Frame>
    )
  }

  static defaultProps: Props = {
    width: 114,
    height: 35,
    top: 0,
    text: "Button",
    kind: "primary",
    contentType: "default"
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
    kind: {
      type: ControlType.Enum,
      options: ["secondary", "primary", "danger"],
      optionTitles: ["Secondary", "Primary", "Danger"]
    },
    contentType: {
      type: ControlType.Enum,
      options: ["icon", "default"],
      optionTitles: ["Icon", "Default"]
    },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
  }
}
