import { Component, OnInit, ViewChild } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {Emeteur} from '../../modeles/emeteur';
import {Recepteur} from '../../modeles/recepteur';
import {Envoie} from '../../modeles/envoie';
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
  update: Boolean = false;
  @ViewChild('monForm') form: any;

  constructor(private Envoieservice: EnvoieService, update: SwUpdate) {
    //Evement qui met a jour le cache apres chaque demarrage de lapplication
    update.available.subscribe(event=>{
      update.activateUpdate().then(()=>document.location.reload());
    })
  }

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

  addOperation(){
    // this.saveEmeteur();
    // this.saveRecepteur();
    this.envoie.emeteur=this.emeteur;
    this.envoie.recepteur=this.recepteur;
    this.Envoieservice.addEnvoie(this.envoie).subscribe((data)=>{
      //console.log(data);
      this.form.reset();
      
    },
    (error)=>{
      console.log(error);
    });

  }

}
