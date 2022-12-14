
import { catchError, map, of, pluck } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';

const catchingError  = (resp: AjaxError) => {
    let err = resp?.message;
    console.warn('error: ', err)
    return of({
        ok: false,
        users: []
    })
}
const url = 'https://httpbin.aorg/delay/1';
const $obs = ajax.getJSON(url).pipe(
    catchError(catchingError)
);


$obs.subscribe(data => console.log(data))
// const catchingError  = (err: AjaxError) => {
//     console.warn('error: ', err.message)
//     return of([])
// }

// ajax( url ).pipe(
//     pluck('response'),
//     catchError(catchingError)
// )
// .subscribe(console.log)