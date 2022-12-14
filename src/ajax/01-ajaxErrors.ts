
import { catchError, map, of, pluck } from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';

const url = 'https://api.github.com/useras?per_page=5';
const catchingError  = (err: AjaxError) => {
    console.warn('error: ', err.message)
    return of([])
}

ajax( url ).pipe(
    pluck('response'),
    catchError(catchingError)
)
.subscribe(console.log)