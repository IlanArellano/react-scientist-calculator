import { ActionType } from "../../../types";

export const SwitchColor = (state: string, action: ActionType<string>) => {
  state = action.payload;
};
