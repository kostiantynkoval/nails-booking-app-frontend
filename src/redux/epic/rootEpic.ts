import {combineEpics} from "redux-observable";
import {userEpic} from "./userEpic";

export const rootEpic = combineEpics(
    userEpic
);