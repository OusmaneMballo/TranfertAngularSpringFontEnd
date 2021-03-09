import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Envoie } from '../modeles/envoie';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvoieService {

  private envoieUrl='http://localhost:8090/envoie';
 // private envoie_update: Envoie;

  constructor(private httpClient: HttpClient) { }

      /** GET All Envoie from the server */
getEnvoies(): Observable<Envoie[]> {
  return this.httpClient.get<Envoie[]>(this.envoieUrl+'/all').pipe(
    map(Response=>Response)
  );
}

/** Add Emeteur into the server */
addEmeteur(envoie: Envoie): Observable<Envoie> {
  return this.httpClient.post<Envoie>(this.envoieUrl+'/add', envoie);
}

/** Add Envoie into the server */
addEnvoie(envoie: Envoie): Observable<Envoie> {
  return this.httpClient.post<Envoie>(this.envoieUrl+'/add', envoie).pipe(
    map(Response=>Response)
  );
}

addOperation(envoie: Envoie){
  return this.httpClient.post(this.envoieUrl+'/add',envoie).subscribe(
    ()=>{
      console.log("Operation ajoute avec succes!");
    },
    (error)=>{
      console.log("Emetteur non ajoute "+error);
    }
  );
}

getEnvoieById(id: number):Observable<Envoie>{
  let url = `${this.envoieUrl}/${id}`;
  //console.log(url);
  return this.httpClient.get<Envoie>(url).pipe(
    map(Response=>Response)
  );
}
/* Methode de mis a jour */
updateEnvoie(envoie: Envoie): Observable<any>{
  let envoie_update=null;
  let url = `${this.envoieUrl+'/update'}/${envoie.id}`;
  console.log(envoie);
  return this.httpClient.put<Envoie>(url, envoie);
  // return this.httpClient.put<Envoie>(this.envoieUrl+'/update', envoie).pipe(
  //   map(envoie_update=Response=>Response)
  //   //heroes=>this.heroes=heroes
  // );
}

// updateHero(hero: Hero): Observable<any> {
//   return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
//     tap(_ => this.log(`updated hero id=${hero.id}`)),
//     catchError(this.handleError<any>('updateHero'))
//   );
// }


}
