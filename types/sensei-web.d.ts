export type Arr = { [key: number]: number }

export type OccGr = { [key: number]: string }

export type Props = {
    aptScores: {
      G: number;
      V: number;
      N: number;
      Q: number;
      S: number;
      P: number;
      K: number;
    };
    addScores: {
      G: number;
      V: number;
      N: number;
      Q: number;
      S: number;
      P: number;
      K: number;
    };
  }

export interface TdProps {
  rowspan?: number;
}