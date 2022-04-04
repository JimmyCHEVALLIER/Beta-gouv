import { Component, OnInit } from '@angular/core';
import { CompteurService } from '../../services/compteur-service';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent implements OnInit {
  constructor(private compteurService: CompteurService) { }

  ngOnInit() {
  }

}
