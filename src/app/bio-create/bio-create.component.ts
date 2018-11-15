import { Component, OnInit } from '@angular/core';

		import { FormControl, FormBuilder, Validators } from '@angular/forms';
		import { DeveloperService } from '../developer.service';
		import { ActivatedRoute, Router } from '@angular/router';

		@Component({
		  selector: 'app-bio-create',
		  templateUrl: './bio-create.component.html',
		  styleUrls: ['./bio-create.component.css']
		})
		export class BioCreateComponent implements OnInit {
		  
		 
		  
		  devForm=this.fb.group({
			  'firstName': new FormControl('',[Validators.required]),
			  'lastName' : new FormControl('',[Validators.required]),
			  'favoriteLanguage': new FormControl('',[Validators.required]),
			  'yearStarted': new FormControl('',[Validators.required])
		  })

		  get firstName(){return this.devForm.get('firstName')}
		  get lastName(){return this.devForm.get('lastName')}
		  get favoriteLanguage(){return this.devForm.get('favoriteLanguage')}
		  get yearStarted(){return this.devForm.get('yearStarted')}

		  constructor(private fb:FormBuilder, private developerService: DeveloperService,
			private router:Router) { }


		  prepareSave(): any{
			let userData = {
				"firstName": this.firstName.value,
				"lastName":this.lastName.value,
				"favoriteLanguage": this.favoriteLanguage.value,
				"yearStarted":this.yearStarted.value
			}
			return userData;
		 }

		  saveDeveloper():void{
			let formModel = this.prepareSave();
			this.developerService.addDeveloper(formModel);
			this.router.navigate(['/bio']);
		  }

		  ngOnInit() {
		  }

		}