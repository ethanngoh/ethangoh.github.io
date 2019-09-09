import { DiceColor, Roll, Dice } from "../data/dice";
import mem from "mem";

export interface PermutedDice {
  colors: DiceColor[];
  rolls: Roll[];
}

const combineRolls = mem((roll1: Roll, roll2: Roll) => {
  return {
    damage: roll1.damage + roll2.damage,
    surge: roll1.surge + roll2.surge,
    accuracy: roll1.accuracy + roll2.accuracy,
    damageResist: roll1.damageResist + roll2.damageResist,
    surgeResist: roll1.surgeResist + roll2.surgeResist,
    evade: roll1.evade + roll2.evade
  };
});

const combineRollsGroups = mem((rolls1: Roll[], rolls2: Roll[]) => {
  const rolls: Roll[] = Array(rolls1.length * rolls2.length);
  let place = 0;
  for (var i = 0; i < rolls1.length; i++) {
    for (var j = 0; j < rolls2.length; j++) {
      rolls[place] = combineRolls(rolls1[i], rolls2[j]);
      place++;
    }
  }
  return rolls;
});

export const permuteDice = mem((dice: Dice[]) => {
  const colors = dice.map(d => d.color);
  const rolls = dice
    .map(d => d.rolls)
    .reduce((a, b) => combineRollsGroups(a, b));

  return { colors, rolls };
});
