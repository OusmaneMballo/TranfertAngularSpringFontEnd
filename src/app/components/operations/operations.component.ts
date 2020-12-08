import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Emeteur} from '../../modeles/emeteur';
import {Envoie} from '../../modeles/envoie';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
//import {EmeteurServiceService} from '../../services/emeteur-service.service';
import { RecepteurService } from 'src/app/services/recepteur.service';
import {EnvoieService} from '../../services/envoie.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  
  emetteur=new Emeteur();
  router: Router;
  
  listOperation: Envoie[]=[];
  dataSource: MatTableDataSource<Envoie>;
  constructor(
    private envoieService: EnvoieService,
    private route: ActivatedRoute,
    private recepteur: RecepteurService) { }
  
  ngOnInit(): void {
    this.envoieService.getEnvoies().subscribe((data)=>{
      this.listOperation=data;
      this.dataSource=new MatTableDataSource<Envoie>(this.listOperation);
    });
  }

  displayedColumns: string[] = ['emetteur', 'recepteur', 'montant', 'date', 'detail'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  edit(id){
    this.envoieService.getEnvoieById(id).subscribe(
      (data)=>{
        //console.log(data);
        this.router.navigate(['detail'], { relativeTo: this.route });
      }
   );
  }
 
}