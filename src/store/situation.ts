import { useRecoilState, atom } from "recoil";

export const situationAtomState = atom({
  key: "situation",
  default: "Burger",
});
