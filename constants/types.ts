export interface CocktailInfo {
  index: number;
  drink: number;
  name: string;
  base: number;
  main: number[];
  sub: number[];
  garnish: 4 | 5 | 6 | 7 | 8;
  glass: number;
  title: string;
  comment: string;
}

export interface GameInfo {
  name: string;
  background: number;
  showcase: number;
  result: CocktailInfo[];
}

export const Gradient = {
  12: {
    start: "#F29100",
    end: "#E72B78",
  },
  13: {
    start: "#F29100",
    end: "#009540",
  },
  2: {
    start: "#009EE2",
    end: "#E72B78",
  },
  3: {
    start: "#009EE2",
    end: "#51AD32",
  },
};
