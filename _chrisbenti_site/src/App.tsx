import * as React from "react";
import "./App.css";

import cx from "classnames";

const SEATTLE_LINK =
  "https://www.google.com/maps/place/Seattle,+WA/data=!4m2!3m1!1s0x5490102c93e83355:0x102565466944d59a?sa=X&ved=2ahUKEwjhu_nA2ffcAhUD3Z8KHdR1BQYQ8gEwGHoECAsQCw";

interface IAppState {
  hover: string | null;
}

class App extends React.Component<{}, IAppState> {
  public state = {
    hover: null
  };

  public render() {
    const { hover } = this.state;
    return (
      <div
        className={cx({
          app: true,
          appHovered: hover
        })}
      >
        <div>Hello, my name is Chris</div>
        <div>I live in {this.getLink(SEATTLE_LINK, "Seattle, WA")}</div>
        <div>
          For {this.getLink('https://www.linkedin.com/in/chrisbenti/', 'work')}, I code at {this.getLink("https://www.lyft.com", "Lyft")}
        </div>
        <div>
          Get a hold of me at{" "}
          {this.getLink("mailto:chrisbenti.com", "chris@chrisbenti.com")} 
        </div>
        <div>
          Or check out my Twitter,{" "}
          {this.getLink('https://twitter.com/chrisbenti', '@chrisbenti')}
        </div>
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

  private getLink(href: string, text: string) {
    const { hover } = this.state;
    const appHovered = hover && hover !== href;
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

export default App;
