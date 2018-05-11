import { SevaService } from './../seva.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-ghar',
  templateUrl: './ghar.component.html',
  styleUrls: ['./ghar.component.css']
})
export class GharComponent implements OnInit {

  public sab=[];

  constructor(public seva:SevaService) {
    console.log("Ghar Bulaya Hia");
   }

  ngOnInit() {
      this.seva.getBook()
      .subscribe(
        data =>{
          console.log("Data");
          console.log(data)
          this.sab=this.sab.concat(data);
        },
        error =>{
          console.log("Kuch To Gad-Bad Hai Daya");
          console.log(error.errorMessage);
        }
      )
      
      this.seva.getHouse()
      .subscribe(
        data =>{
          console.log("Data");
          console.log(data)
          this.sab=this.sab.concat(data);
        },
        error =>{
          console.log("Kuch To Gad-Bad Hai Daya");
          console.log(error.errorMessage);
        }
      )
      
      this.seva.getChar()
      .subscribe(
        data =>{
          console.log(" get Data");
          console.log(data)
          this.sab=this.sab.concat(data);
        },
        error =>{
          console.log("Kuch To Gad-Bad Hai Daya");
          console.log(error.errorMessage);
        }
      )
    }
    getItemId(item) {
      let id = item.url.match(/\d+/)[0]
      return id;
    }
    
  public search=''

  ngOnDestroy(){
    
  }
}
