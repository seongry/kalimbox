export type KalimbaKeyBarsTypes = {
    number: string;
    code: string;
    higher: number;
  };
  
  export const SPACEBAR = "_";
  export const C_KEY: KalimbaKeyBarsTypes[] = [
    {
      number: "2",
      code: "D6",
      higher: 2,
    },
    {
      number: "7",
      code: "B5",
      higher: 1,
    },
    {
      number: "5",
      code: "G5",
      higher: 1,
    },
    {
      number: "3",
      code: "E5",
      higher: 2,
    },
    {
      number: "1",
      code: "C5",
      higher: 1,
    },
    {
      number: "6",
      code: "A4",
      higher: 0,
    },
    {
      number: "4",
      code: "F4",
      higher: 0,
    },
    {
      number: "2",
      code: "D4",
      higher: 0,
    },
    {
      number: "1",
      code: "C4",
      higher: 0,
    },
    {
      number: "3",
      code: "E4",
      higher: 0,
    },
    {
      number: "5",
      code: "G4",
      higher: 0,
    },
    {
      number: "7",
      code: "B4",
      higher: 0,
    },
    {
      number: "2",
      code: "D5",
      higher: 1,
    },
    {
      number: "4",
      code: "F5",
      higher: 1,
    },
    {
      number: "6",
      code: "A5",
      higher: 1,
    },
    {
      number: "1",
      code: "C6",
      higher: 2,
    },
    {
      number: "3",
      code: "E6",
      higher: 2,
    },
  ];
  
  export type ScaleType = {
    type: "C_KEY";
    keys: KalimbaKeyBarsTypes[];
  };
  export const SCALE_TYPES: ScaleType[] = [
    {
      type: "C_KEY",
      keys: C_KEY,
    },
  ];