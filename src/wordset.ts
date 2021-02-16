import { TWordset } from "../types";

export const generate = (sets: TWordset) => {
  const wordStart = sets.start[randomIdx(sets.start)];
  const wordMiddle = sets.middle[randomIdx(sets.middle)];
  const wordEnd = sets.end[randomIdx(sets.end)];

  return {
    wordStart,
    wordMiddle,
    wordEnd,
  };
};

const randomIdx = (set: string[]) => Math.floor(Math.random() * set.length);
