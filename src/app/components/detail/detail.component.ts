import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';
import { Observable } from 'rxjs';
import {Emeteur} from '../../modeles/emeteur';
import {Recepteur} from '../../modeles/recepteur';
import { Envoie } from 'src/app/modeles/envoie';
import {EnvoieService} from '../../services/envoie.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  envoie=new Envoie();
  isEmeteurActivate=false;
  isRecepteurActivate=false;
  isValidate=false;
  update: Boolean = false;
  @ViewChild('monForm') form: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private envoieservice: EnvoieService,
    update: SwUpdate
  ) {
      
      //Evement qui met a jour le cache apres chaque demarrage de lapplication
      update.available.subscribe(event=>{
        update.activateUpdate().then(()=>document.location.reload());
      });
   }

  ngOnInit(): void {
    this.getEnvoie();
  }

  getEnvoie(){
    const id=+this.route.snapshot.paramMap.get('id');
    this.envoieservice.getEnvoieById(id).subscribe((data)=>{
      this.envoie=data;
    });
    //console.log(this.envoie);
  }
  updateOperation(){
    
      let ok=this.envoieservice.updateEnvoie(this.envoie);
      if(ok){
        this.isEmeteurActivate=false;
        this.isRecepteurActivate=false;
        this.isValidate=false;
        console.log('Okey');
      }
  }

  activationEmeteur(){
    this.isEmeteurActivate=true;
    this.isValidate=true;
    
  }

  activationRecepteur(){
    this.isRecepteurActivate=true;
    this.isValidate=true;
  }
}
