
import { catchError, map, of, pluck } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';

const catchingError = (resp: AjaxError) => {
    let err = resp.message;

    console.warn('error: ', err);
    return err
}
const url = 'https://httpbin.org/delaay/1';
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