import { ofType } from 'redux-observable';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import axios from 'axios';
import { from } from 'rxjs';

import { savePage } from './actions';

const savePageEpic = (action$, state$) =>
  action$.pipe(
    ofType(savePage.type),
    withLatestFrom(state$),
    switchMap(state =>
      from(
        axios.post(
          `http://api.openweathermap.org/data/2.5/weather?q=asdas&appid=435fa4c4dd289bf75643f8fc8e273d6e&lang=el&units=metric`,
          state,
        ),
      ).pipe(map(response => savePage.succeeded(response.data))),
    ),
  );

const epics = savePageEpic;

export default epics;
