import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Emeteur} from '../../modeles/emeteur';
import {Recepteur} from '../../modeles/recepteur';
import {Envoie} from '../../modeles/envoie';

import {EmeteurServiceService} from '../../services/emeteur-service.service';
import {RecepteurService} from '../../services/recepteur.service';
import {EnvoieService} from '../../services/envoie.service';

@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.component.html',
  styleUrls: ['./envoi.component.css']
})
export class EnvoiComponent implements OnInit {
  emeteur=new Emeteur();
  recepteur=new Recepteur();
  envoie=new Envoie();
  listEnvoie:Envoie[];

  constructor(
              private Envoieservice: EnvoieService,
              private EmeteurService: EmeteurServiceService,
              private RecepteurService: RecepteurService
              ) { }

  ngOnInit(): void {
    this.Envoieservice.getEnvoies().subscribe(data=>this.listEnvoie=data);
    this.emeteur.nci='';
    this.emeteur.nom='';
    this.emeteur.prenom='';
    this.emeteur.telephone='';

    this.recepteur.prenom='';
    this.recepteur.nom='';
    this.recepteur.tel='';
    this.envoie.date='';
    this.envoie.montant=0;
  }

  // saveEmeteur(){
  //   console.log(this.EmeteurService.ajoutEmeteur(this.emeteur));
  // }

  // saveRecepteur(){
  //   console.log(this.RecepteurService.ajoutEmeteur(this.recepteur));
  // }
  
  /*Cette methode permet d'effectuer une operation en affectant l'objet
    emetteur et l'objet recepteur a l'objet envoie */
  addOperation(){
    // this.saveEmeteur();
    // this.saveRecepteur();
    this.envoie.emeteur=this.emeteur;
    this.envoie.recepteur=this.recepteur;
    this.Envoieservice.addEnvoie(this.envoie).subscribe((data)=>{
      //console.log(data);
    },
    (error)=>{
      console.log(error);
    });
    //console.log(this.Envoieservice.addOperation(this.envoie));

  }

}
