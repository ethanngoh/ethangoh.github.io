import React from "react";
import { Card, HTMLTable } from "@blueprintjs/core";

import { permuteDice, PermutedDice } from "./services/permuteDice";
import { DiceColor, DICE_BY_COLOR, Dice, Roll } from "./data/dice";

import "./App.css";
import { CONSOLE } from "@blueprintjs/icons/lib/esm/generated/iconContents";

export const PermutationResults = ({ colors }: { colors: DiceColor[] }) => {
  const filteredColors: DiceColor[] = colors.filter(
    color => color !== DiceColor.NONE
  );
  if (filteredColors.length === 0) {
    return <i>Select some dice first, my people</i>;
  }
  const colorsAsDice: Dice[] = filteredColors.map(
    color => DICE_BY_COLOR[color]
  );

  const hasAttack =
    colors.filter(
      x =>
        x === DiceColor.RED ||
        x === DiceColor.GREEN ||
        x === DiceColor.BLUE ||
        x === DiceColor.YELLOW
    ).length > 0;

  const hasDefence =
    colors.filter(x => x === DiceColor.BLACK || x === DiceColor.WHITE).length >
    0;

  const permutedDice = permuteDice(colorsAsDice);
  let max = 0;
  permutedDice.rolls.forEach(rolls => {
    max = Math.max(
      max,
      rolls.accuracy,
      rolls.damage,
      rolls.damageResist,
      rolls.evade,
      rolls.surge,
      rolls.surgeResist
    );
  });
  const possibleValues = Array.from(new Array(max), (x, i) => i + 1);

  return (
    <>
      <HTMLTable bordered condensed striped>
        <thead>
          <tr>
            <th />
            {possibleValues.map(x => (
              <th key={x}>{x}+</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <PermuteRowForRollType
            permuteDice={permutedDice}
            feature="damage"
            possibleValues={possibleValues}
          />
          <PermuteRowForRollType
            permuteDice={permutedDice}
            feature="surge"
            possibleValues={possibleValues}
          />
          <PermuteRowForRollType
            permuteDice={permutedDice}
            feature="accuracy"
            possibleValues={possibleValues}
          />
          <PermuteRowForRollType
            permuteDice={permutedDice}
            feature="damageResist"
            possibleValues={possibleValues}
          />
          <PermuteRowForRollType
            permuteDice={permutedDice}
            feature="surgeResist"
            possibleValues={possibleValues}
          />
          <PermuteRowForRollType
            permuteDice={permutedDice}
            feature="evade"
            possibleValues={possibleValues}
          />
          {hasAttack && hasDefence && (
            <>
              <RealizedAttack
                permutedDice={permutedDice}
                possibleValues={possibleValues}
              />
              <RealizedSurge
                permutedDice={permutedDice}
                possibleValues={possibleValues}
              />
            </>
          )}
        </tbody>
      </HTMLTable>
      {/* <p style={{ marginTop: "1em" }}>
        <i>
          This table shows you the likelihood of having at least x of a result.
          For example, the <b>2+</b> column for the <b>damage</b> row shows you
          the probability of having at least 2 damage in your roll.
        </i>
      </p>
      {hasAttack && hasDefence && (
        <p>
          <i>
            You've selected both attacking and defensive dice. While the we'll
            show you each individual roll type's probability (I.E damage,
            defence, etc), we also show you a computed value (I.E "damage -
            dr"). What this functionally means is "If you roll the selected
            dice-set, this is the probability of having at least R damage/surge
            in your roll, accounting for the defensive roll"{" "}
          </i>
        </p>
      )} */}
    </>
  );
};

function heatMapColorForValue(value: number) {
  var h = (1.0 - value) * 240;
  return "hsl(" + h + ", 100%, 50%)";
}

const PercentageTR = ({
  extractedRolls,
  values,
  title
}: {
  extractedRolls: number[];
  values: number[];
  title: string;
}) => {
  return (
    <tr>
      <td style={{ textAlign: "right" }}>{title}</td>
      {values
        .map(min => {
          let passCount = 0;
          for (var i = 0; i < extractedRolls.length; i++) {
            if (extractedRolls[i] >= min) {
              passCount += 1;
            }
          }
          return passCount / extractedRolls.length;
        })
        .map((value, i) => (
          <td
            key={i}
            style={{
              backgroundColor: heatMapColorForValue(value),
              textAlign: "right"
            }}
          >
            {Math.round(value * 100)}%
          </td>
        ))}
    </tr>
  );
};

const RealizedSurge = ({
  permutedDice,
  possibleValues
}: {
  permutedDice: PermutedDice;
  possibleValues: number[];
}) => {
  const attackRolls = permutedDice.rolls.map(roll => {
    if (roll.evade) {
      return 0;
    }
    return Math.max(roll.surge - roll.surgeResist, 0);
  });

  return (
    <PercentageTR
      extractedRolls={attackRolls}
      values={possibleValues}
      title={"surge - sr"}
    />
  );
};

const RealizedAttack = ({
  permutedDice,
  possibleValues
}: {
  permutedDice: PermutedDice;
  possibleValues: number[];
}) => {
  const attackRolls = permutedDice.rolls.map(roll => {
    if (roll.evade) {
      return 0;
    }
    return Math.max(roll.damage - roll.damageResist, 0);
  });

  return (
    <PercentageTR
      extractedRolls={attackRolls}
      values={possibleValues}
      title={"damage - dr"}
    />
  );
};

const PermuteRowForRollType = ({
  permuteDice,
  feature,
  possibleValues
}: {
  permuteDice: PermutedDice;
  feature: keyof Roll;
  possibleValues: number[];
}) => {
  const featureExtracted = permuteDice.rolls.map(x => x[feature]);
  const featureUnique = Array.from(new Set(featureExtracted));
  const featureMax = Math.max(...featureUnique);
  if (featureMax === 0) {
    return null;
  }

  return (
    <PercentageTR
      extractedRolls={featureExtracted}
      values={possibleValues}
      title={feature}
    />
  );
};
