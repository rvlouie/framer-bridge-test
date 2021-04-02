import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.ButtonProps & {
  width: number
  height: number
}

export class Button extends React.Component<Props> {
  render() {
    return <System.Button {...this.props} />
  }

  static defaultProps: Props = {
    width: 150,
    height: 48,
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
