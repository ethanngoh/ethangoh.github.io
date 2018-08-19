import * as React from "react";

import cx from "classnames";
import { Link } from "react-router-dom";

interface IHoverablePageState {
  hover: string | null;
}

class HoverablePage extends React.Component<{}, IHoverablePageState> {
  public state = {
    hover: null
  };

  public containerRender(children: React.ReactElement<any>) {
    const { hover } = this.state;
    return (
      <div
        className={cx({
          app: true,
          appHovered: hover
        })}
      >
        {children}
      </div>
    );
  }

  public onMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    this.setState({
      hover: event.currentTarget.id
    });
  };

  public onMouseLeave = () => {
    this.setState({
      hover: null
    });
  };

  protected getLink(href: string, text: string, internal: boolean = false) {
    const { hover } = this.state;
    const appHovered = hover && hover !== href;
    if (internal) {
      return (
        <Link
          className={cx({ appHovered })}
          id={href}
          to={href}
          onMouseLeave={this.onMouseLeave}
          onMouseEnter={this.onMouseEnter}
        >
          {text}
        </Link>
      );
    }
    return (
      <a
        className={cx({ appHovered })}
        id={href}
        href={href}
        onMouseLeave={this.onMouseLeave}
        onMouseEnter={this.onMouseEnter}
      >
        {text}
      </a>
    );
  }
}

export default HoverablePage;
