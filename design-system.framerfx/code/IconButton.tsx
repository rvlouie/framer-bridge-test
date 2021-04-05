import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"


type IconButtonProps = System.ButtonProps & {
  icon: string
}

export class IconButton extends React.Component {
  render() {
    return <System.IconButton {...this.props} />
  }

  static defaultProps: IconButtonProps = {
    icon: 'play'
  }

  static propertyControls: PropertyControls<IconButtonProps> = {
    icon: {
      type: ControlType.Enum,
      options: ["play", "context", "download"],
      optionTitles: ["Play", "Context", "Download"]
    }
  }

}

