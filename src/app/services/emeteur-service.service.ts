import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Emeteur } from '../modeles/emeteur';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmeteurServiceService {

  private emeteurUrl='http://localhost:8090/emeteur';
  
  constructor(private httpClient: HttpClient) { }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  
  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);
  
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };

  /** GET All Emeteurs from the server */
getEmeteurs(): Observable<Emeteur[]> {
  return this.httpClient.get<Emeteur[]>(this.emeteurUrl+'/all').pipe(map(Response=>Response));
}
/** Add Emeteur into the server */
addEmeteur(emeteur: Emeteur): Observable<Emeteur> {
  return this.httpClient.post<Emeteur>(this.emeteurUrl+'/add', emeteur);
}
ajoutEmeteur(emetteur: Emeteur){
  return this.httpClient.post(this.emeteurUrl+'/add', emetteur).subscribe(
    ()=>{
      console.log("Emetteur ajoute avec succes!");
    },
    (error)=>{
      console.log("Emetteur non ajoute "+error);
    }
  );
}

/** GET Emeteur by id from the server */
findById(id: number): Observable<Emeteur>{
  let url = `${this.emeteurUrl}/${id}`;
  return this.httpClient.get<Emeteur>(url).pipe(Response=>Response);
}
// this.findById(2).then((data)=>{

// })

/** Delete Emeteur by id into the server */
delete(id: number) {
  let url = `${this.emeteurUrl+'/delete'}/${id}`;
  this.httpClient.get<Emeteur>(url).pipe(Response=>Response);
}
}
