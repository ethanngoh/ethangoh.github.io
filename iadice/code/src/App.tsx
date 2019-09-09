import React, { useState, useCallback } from "react";
import { Select, IItemRendererProps } from "@blueprintjs/select";
import { Button, MenuItem, Navbar } from "@blueprintjs/core";

import { ALL_COLORS, DiceColor } from "./data/dice";

import "./App.css";
import { PermutationResults } from "./PermutationResults";
import { ALIGNMENT_BOTTOM } from "@blueprintjs/icons/lib/esm/generated/iconNames";

function renderSelectOption(item: DiceColor, itemProps: IItemRendererProps) {
  return (
    <MenuItem
      text={item}
      onClick={itemProps.handleClick}
      key={itemProps.index}
    />
  );
}

const App: React.FC = () => {
  const [color1, setColor1] = useState(DiceColor.NONE);
  const [color2, setColor2] = useState(DiceColor.NONE);
  const [color3, setColor3] = useState(DiceColor.NONE);
  const [color4, setColor4] = useState(DiceColor.NONE);
  const [color5, setColor5] = useState(DiceColor.NONE);
  const [color6, setColor6] = useState(DiceColor.NONE);
  const [color7, setColor7] = useState(DiceColor.NONE);
  const [color8, setColor8] = useState(DiceColor.NONE);

  return (
    <div style={{ maxWidth: "100vw", width: "100vw" }}>
      <Navbar fixedToTop className="bp3-dark">
        <Navbar.Group align={"left"}>
          <Navbar.Heading>I.A. Dice Rolls</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={"right"}>
          <Button
            text="Clear"
            onClick={useCallback(() => {
              setColor1(DiceColor.NONE);
              setColor2(DiceColor.NONE);
              setColor3(DiceColor.NONE);
              setColor4(DiceColor.NONE);
              setColor5(DiceColor.NONE);
              setColor6(DiceColor.NONE);
              setColor7(DiceColor.NONE);
              setColor8(DiceColor.NONE);
            }, [
              setColor1,
              setColor2,
              setColor3,
              setColor4,
              setColor5,
              setColor6,
              setColor7,
              setColor8
            ])}
          />
        </Navbar.Group>
      </Navbar>
      <div style={{ padding: "1em", width: "100vw", marginTop: "50px" }}>
        <h5 style={{ margin: 0, marginBottom: ".5em" }}>Dice</h5>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "1em"
          }}
        >
          <Select
            itemRenderer={renderSelectOption}
            onItemSelect={color => setColor1(color)}
            items={ALL_COLORS}
          >
            <Button rightIcon="caret-down" text={color1} />
          </Select>
          <Select
            itemRenderer={renderSelectOption}
            onItemSelect={color => setColor2(color)}
            items={ALL_COLORS}
          >
            <Button rightIcon="caret-down" text={color2} />
          </Select>
          <Select
            itemRenderer={renderSelectOption}
            onItemSelect={color => setColor3(color)}
            items={ALL_COLORS}
          >
            <Button rightIcon="caret-down" text={color3} />
          </Select>
          <Select
            itemRenderer={renderSelectOption}
            onItemSelect={color => setColor4(color)}
            items={ALL_COLORS}
          >
            <Button rightIcon="caret-down" text={color4} />
          </Select>
          <Select
            itemRenderer={renderSelectOption}
            onItemSelect={color => setColor5(color)}
            items={ALL_COLORS}
          >
            <Button rightIcon="caret-down" text={color5} />
          </Select>
          <Select
            itemRenderer={renderSelectOption}
            onItemSelect={color => setColor6(color)}
            items={ALL_COLORS}
          >
            <Button rightIcon="caret-down" text={color6} />
          </Select>
          <Select
            itemRenderer={renderSelectOption}
            onItemSelect={color => setColor7(color)}
            items={ALL_COLORS}
          >
            <Button rightIcon="caret-down" text={color7} />
          </Select>
          <Select
            itemRenderer={renderSelectOption}
            onItemSelect={color => setColor8(color)}
            items={ALL_COLORS}
          >
            <Button rightIcon="caret-down" text={color8} />
          </Select>
        </div>
        <h5 style={{ margin: 0, marginBottom: ".5em" }}>Results</h5>
        <PermutationResults
          colors={[
            color1,
            color2,
            color3,
            color4,
            color5,
            color6,
            color7,
            color8
          ]}
        />
      </div>
    </div>
  );
};

export default App;
