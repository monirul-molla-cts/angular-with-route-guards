import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  devs:Developer[];
  promiseDevs: Promise<Developer[]>
  observableDevs: Observable<Developer[]>	
  constructor(private developerService: DeveloperService) {}

   getDevelopers(): void{
    this.developerService.getAllDevelopers().subscribe(
      response => {this.devs = response;console.log("Recieved Data"); },
      error => console.log("My Error : ", error),
      () => console.log("onComplete")
      );
   }

  ngOnInit() {
    this.getDevelopers();
    this.promiseDevs = this.developerService.getDevelopersWithPromise();
    this.observableDevs = this.developerService.getAllDevelopers();
  }

}
