import { Injectable } from '@angular/core';
import { Developer } from './developer';


import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

      devs: Developer[];
      private url:string = "http://localhost:3000/";	
		  constructor(private httpClient:HttpClient){}
       

      getAllDevelopers(): Observable<Developer[]> {
        return this.httpClient.get<Developer[]>(this.url+"users").pipe(
          map(response => {this.devs = response; return response;}),
          catchError(this.handleError<any>()));
        }


      getDeveloperById(devId:string):Developer{
				return this.devs.find(x => x.id == devId);
      }
      
      getDevelopersWithPromise(): Promise<Developer[]> {
        return this.httpClient.get<Developer[]>(this.url+"users").toPromise().then((res) => {return res});
       }

       addDeveloper(formModel: FormData): boolean {
        this.httpClient.post(this.url+"addBio", formModel)
          .subscribe(res=>{},(err)=>{
            console.log(err);
          });
          return true;
      }

      private handleError<T>(result?:T){
        return (error:any): Observable<T>=>{
          console.log('An Error occured retrieving Developer data'+error);
          return null;
        }
      } 
}
