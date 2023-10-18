import {delay, mapTo, Observable} from "rxjs";
import {ofType} from "redux-observable";

export const userEpic = (action$: Observable<any>) => action$.pipe(
    ofType('PING'),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: 'PONG' })
);