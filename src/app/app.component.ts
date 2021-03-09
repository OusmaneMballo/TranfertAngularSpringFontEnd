import { Component } from '@angular/core';
import { SwUpdate } from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'transfert-font-angular';
  update: boolean = false;

  constructor(update: SwUpdate){
    
      //Evement qui met a jour le cache apres chaque demarrage de lapplication
      update.available.subscribe(event=>{
        update.activateUpdate().then(()=>document.location.reload());
      })
  }
}
