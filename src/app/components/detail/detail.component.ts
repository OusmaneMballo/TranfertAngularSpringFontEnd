import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
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
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private envoieservice: EnvoieService
  ) { }

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
    
  }
}
