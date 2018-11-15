import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeveloperService } from '../developer.service';
import { Developer } from '../developer';

@Component({
  selector: 'app-bio-details',
  templateUrl: './bio-details.component.html',
  styleUrls: ['./bio-details.component.css']
})
export class BioDetailsComponent implements OnInit {

  dev:Developer;
		  
			constructor(private route:ActivatedRoute,private developerService:DeveloperService) {
				this.dev = developerService.getDeveloperById(this.route.snapshot.params['id']);
			}

  ngOnInit() {
  }

}
