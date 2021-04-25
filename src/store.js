import { atom, selector } from "recoil";
import { getUserInfo } from "./api";

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

const userInfoInitState = selector({
  key: "userInfo",
  get: async () => {
    const res = await getUserInfo();
    return res.json();
  },
});

export { initState, doubleInitState, userInfoInitState };
