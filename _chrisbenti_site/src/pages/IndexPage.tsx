import * as React from "react";

import HoverablePage from "../common/HoverablePage";

const SEATTLE_LINK =
  "https://www.google.com/maps/place/Seattle,+WA/data=!4m2!3m1!1s0x5490102c93e83355:0x102565466944d59a?sa=X&ved=2ahUKEwjhu_nA2ffcAhUD3Z8KHdR1BQYQ8gEwGHoECAsQCw";

export class IndexPage extends HoverablePage {
  public render() {
    return super.containerRender(
      <>
        <div>Hello, my name is Chris</div>
        <div>I live in {this.getLink(SEATTLE_LINK, "Seattle, WA")}</div>
        <div>
          For {this.getLink("https://www.linkedin.com/in/chrisbenti/", "work")},
          I code at {this.getLink("https://www.lyft.com", "Lyft")}
        </div>
        <div>
          And check out my{" "}
          {this.getLink("/contact", "contact info", true)}
        </div>
      </>
    );
  }
}
