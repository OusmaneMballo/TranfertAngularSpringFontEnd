import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recepteur } from '../modeles/recepteur';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecepteurService {

  private recepteurUrl='http://localhost:8090/recepteur';
  constructor(private httpClient: HttpClient) { }

    /** GET All Recepteur from the server */
getRecepteurs(): Observable<Recepteur[]> {
  return this.httpClient.get<Recepteur[]>(this.recepteurUrl+'/all').pipe(
    map(Response=>Response)
  );
}

/** Add Recepteur into the server */
addRecepteur(repteur: Recepteur): Observable<Recepteur> {
  return this.httpClient.post<Recepteur>(this.recepteurUrl+'/add', repteur);
}
ajoutEmeteur(repteur: Recepteur){
  return this.httpClient.post(this.recepteurUrl+'/add', repteur).subscribe(
    ()=>{
      console.log("Recepteur ajoute avec succes!");
    },
    (error)=>{
      console.log("Recepteur non ajoute "+error);
    }
  );
}
/** GET Recepteur by id from the server */
findById(id: number): Observable<Recepteur>{
  let url = `${this.recepteurUrl}/${id}`;
  return this.httpClient.get<Recepteur>(url).pipe(Response=>Response);
}

/** Delete Recepteur by id into the server */
delete(id: number) {
  let url = `${this.recepteurUrl+'/delete'}/${id}`;
  this.httpClient.get<Recepteur>(url).pipe(Response=>Response);
}
}
