export enum DiceColor {
  RED = "RED",
  BLUE = "BLUE",
  GREEN = "GREEN",
  YELLOW = "YELLOW",
  BLACK = "BLACK",
  WHITE = "WHITE",
  NONE = "NONE"
}

export const ALL_COLORS = [
  DiceColor.RED,
  DiceColor.BLUE,
  DiceColor.GREEN,
  DiceColor.YELLOW,
  DiceColor.BLACK,
  DiceColor.WHITE,
  DiceColor.NONE
];

export interface Roll {
  damage: number;
  surge: number;
  accuracy: number;
  damageResist: number;
  surgeResist: number;
  evade: number;
}

export interface Dice {
  rolls: Roll[];
  color: DiceColor;
}

function getDiceRoll(roll: Partial<Roll>): Roll {
  return {
    damage: 0,
    surge: 0,
    accuracy: 0,
    damageResist: 0,
    surgeResist: 0,
    evade: 0,
    ...roll
  };
}

export const RED_DICE: Dice = {
  color: DiceColor.RED,
  rolls: [
    getDiceRoll({ damage: 1 }),
    getDiceRoll({ damage: 2 }),
    getDiceRoll({ damage: 2 }),
    getDiceRoll({ damage: 2, surge: 1 }),
    getDiceRoll({ damage: 3 }),
    getDiceRoll({ damage: 3 })
  ]
};

export const BLUE_DICE: Dice = {
  color: DiceColor.BLUE,
  rolls: [
    getDiceRoll({ accuracy: 2, surge: 1 }),
    getDiceRoll({ accuracy: 2, damage: 1 }),
    getDiceRoll({ accuracy: 3, damage: 2 }),
    getDiceRoll({ accuracy: 3, damage: 1, surge: 1 }),
    getDiceRoll({ accuracy: 4, damage: 2 }),
    getDiceRoll({ accuracy: 5, damage: 1 })
  ]
};

export const GREEN_DICE: Dice = {
  color: DiceColor.GREEN,
  rolls: [
    getDiceRoll({ accuracy: 1, surge: 1 }),
    getDiceRoll({ accuracy: 1, damage: 1, surge: 1 }),
    getDiceRoll({ accuracy: 1, damage: 2 }),
    getDiceRoll({ accuracy: 2, damage: 1, surge: 1 }),
    getDiceRoll({ accuracy: 2, damage: 2 }),
    getDiceRoll({ accuracy: 3, damage: 2 })
  ]
};

export const YELLOW_DICE: Dice = {
  color: DiceColor.GREEN,
  rolls: [
    getDiceRoll({ surge: 1 }),
    getDiceRoll({ surge: 2, damage: 1 }),
    getDiceRoll({ damage: 2, accuracy: 1 }),
    getDiceRoll({ surge: 1, damage: 1, accuracy: 1 }),
    getDiceRoll({ surge: 1, accuracy: 2 }),
    getDiceRoll({ damage: 1, accuracy: 2 })
  ]
};

export const BLACK_DICE: Dice = {
  color: DiceColor.BLACK,
  rolls: [
    getDiceRoll({ damageResist: 1 }),
    getDiceRoll({ damageResist: 1 }),
    getDiceRoll({ damageResist: 2 }),
    getDiceRoll({ damageResist: 2 }),
    getDiceRoll({ damageResist: 3 }),
    getDiceRoll({ surgeResist: 1 })
  ]
};

export const WHITE_DICE: Dice = {
  color: DiceColor.WHITE,
  rolls: [
    getDiceRoll({}),
    getDiceRoll({ damageResist: 1 }),
    getDiceRoll({ surgeResist: 1 }),
    getDiceRoll({ damageResist: 1, surgeResist: 1 }),
    getDiceRoll({ damageResist: 1, surgeResist: 1 }),
    getDiceRoll({ evade: 1 })
  ]
};

export const NONE_DICE: Dice = {
  color: DiceColor.NONE,
  rolls: []
};

export const DICE_BY_COLOR: { [P in DiceColor]: Dice } = {
  [DiceColor.RED]: RED_DICE,
  [DiceColor.BLUE]: BLUE_DICE,
  [DiceColor.GREEN]: GREEN_DICE,
  [DiceColor.YELLOW]: YELLOW_DICE,
  [DiceColor.BLACK]: BLACK_DICE,
  [DiceColor.WHITE]: WHITE_DICE,
  [DiceColor.NONE]: NONE_DICE
};
