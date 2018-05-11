import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable()
export class SevaService {
  public url="https://anapioficeandfire.com/api";

  constructor(private _http:HttpClient) {
    console.log("Seva Hazir hai");
   }

   
  private error(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }


   public getBook=():any =>{
     let ye=this._http.get("https://www.anapioficeandfire.com/api/books");
     return ye;
   }   
  
  public getBooki=(id):any =>{
    let ye=this._http.get(`https://www.anapioficeandfire.com/api/books/${id}`);
    return ye;
  } 

   public getHouse=():any =>{
    let ye=this._http.get(this.url+'/houses');
    return ye;
  } 
  
  public getHOusei=(houseId):any =>{
    let ye=this._http.get(`https://anapioficeandfire.com/api/houses/${houseId}`);
    return ye;
  } 
   
   public getChar():any {
    let ye=this._http.get(`https://www.anapioficeandfire.com/api/characters`);
    console.log(ye);
    return ye;
  } 
   
  public getChari(characId):any {
    let ye=this._http.get(`https://anapioficeandfire.com/api/characters/${characId}`);
    return ye;
  } 
}
