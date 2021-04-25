import { atom, selector } from "recoil";

const initState = atom({
  key: "count",
  default: 0,
});

const doubleInitState = selector({
  key: "doubleCount",
  get: ({ get }) => {
    const count = get(initState);
    return count * 2;
  },
});

export { initState, doubleInitState };
