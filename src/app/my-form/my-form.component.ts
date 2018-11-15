import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor(private fb: FormBuilder){
  }


  complexForm = this.fb.group({
    'firstName' : new FormControl('', [Validators.required,this.hasPunctuation("!"),this.hasPunctuation("$")]),
    'lastName': new FormControl('',  Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])),
    'gender' : new FormControl(null, Validators.required),
    'activities': this.fb.group({
      'hiking' : [false],
      'running' : [false],
      'swimming' : [false]
    })
    });



  get firstName() {return this.complexForm.get('firstName')}
  get lastName() {return this.complexForm.get('lastName')}
  get gender() {return this.complexForm.get('gender')}
  get activities() {return this.complexForm.get('activities')}



  hasPunctuation(punctuation: string): ValidatorFn{
      return (control:AbstractControl):  {[key: string]: any} | null => {
        return control.value.indexOf(punctuation) >= 0 ?
           {hasPunctuation: true }: null;
      }
  }

  submitForm(){
    console.log(this.complexForm.value);
    console.log("hiking? "+this.complexForm.get('activities').get('hiking').value);
    console.log("swimming? "+this.complexForm.get('activities').get('swimming').value);
    console.log("running? "+this.complexForm.get('activities').get('running').value);
  }

  ngOnInit() {
  }

}
