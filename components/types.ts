import { UserResult } from "userbase-js";

export interface UserProps {
  user: UserResult;
  setUser?: (user: UserResult) => void;
}
