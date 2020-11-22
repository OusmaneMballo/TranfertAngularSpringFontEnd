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
  envoie:Envoie[];

  constructor(
              private Envoieservice: EnvoieService,
              private EmeteurService: EmeteurServiceService,
              private RecepteurService: RecepteurService
              ) { }

  ngOnInit(): void {
    this.Envoieservice.getRecepteurs().subscribe(data=>this.envoie=data);
    this.emeteur.nci='';
    this.emeteur.nom='';
    this.emeteur.prenom='';
    this.emeteur.telephone='';

    this.recepteur.prenom='';
    this.recepteur.nom='';
    this.recepteur.tel='';
  }

  saveEmeteur(){
    console.log(this.EmeteurService.ajoutEmeteur(this.emeteur));
  }

  saveRecepteur(){
    console.log(this.RecepteurService.ajoutEmeteur(this.recepteur));
  }
  addOperation(){
    this.saveEmeteur();
    this.saveRecepteur();
  }

}
