import { Arr } from 'types/sensei-web';

export const convertScore = (scr: number, table: Arr) => {
  return table[scr] ?? NaN;
};