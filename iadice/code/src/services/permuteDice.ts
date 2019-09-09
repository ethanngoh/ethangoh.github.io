import { DiceColor, Roll, Dice } from "../data/dice";

export interface PermutedDice {
  colors: DiceColor[];
  rolls: Roll[];
}

function combineRolls(roll1: Roll, roll2: Roll): Roll {
  return {
    damage: roll1.damage + roll2.damage,
    surge: roll1.surge + roll2.surge,
    accuracy: roll1.accuracy + roll2.accuracy,
    damageResist: roll1.damageResist + roll2.damageResist,
    surgeResist: roll1.surgeResist + roll2.surgeResist,
    evade: roll1.evade + roll2.evade
  };
}

function combineRollsGroups(rolls1: Roll[], rolls2: Roll[]): Roll[] {
  const rolls: Roll[] = [];
  rolls1.forEach(d1R => {
    rolls2.forEach(d2R => {
      rolls.push(combineRolls(d1R, d2R));
    });
  });
  return rolls;
}

export function permuteDice(dice: Dice[]): PermutedDice {
  const colors = dice.map(d => d.color);
  const rolls = dice
    .map(d => d.rolls)
    .reduce((a, b) => combineRollsGroups(a, b));

  return { colors, rolls };
}
