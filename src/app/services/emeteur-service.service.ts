import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emeteur } from '../modeles/emeteur';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmeteurServiceService {

  private emeteurUrl='http://localhost:8080/emeteur';
  
  constructor(private httpClient: HttpClient) { }

  /** GET All Emeteurs from the server */
getEmeteurs(): Observable<Emeteur[]> {
  return this.httpClient.get<Emeteur[]>(this.emeteurUrl+'/emeteur/all').pipe(
    map(Response=>Response)
  );
}
/** Add Emeteur into the server */
addEmeteur(emeteur: Emeteur): Observable<Emeteur> {
  return this.httpClient.post<Emeteur>(this.emeteurUrl+'/add', emeteur);
}

/** GET Emeteur by id from the server */
findById(id: number): Observable<Emeteur>{
  let url = `${this.emeteurUrl}/${id}`;
  return this.httpClient.get<Emeteur>(url).pipe(Response=>Response);
}

/** Delete Emeteur by id into the server */
delete(id: number) {
  let url = `${this.emeteurUrl+'/delete'}/${id}`;
  this.httpClient.get<Emeteur>(url).pipe(Response=>Response);
}
}
