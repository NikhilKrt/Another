import { SevaService } from './../seva.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, Router,ParamMap } from "@angular/router";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  public pHouse;
  public houseId;

  constructor(private _route:ActivatedRoute, private router:Router, public seva:SevaService,private location:Location) { }

  ngOnInit() {
   
    this.houseId=this._route.snapshot.paramMap.get("houseId")
     console.log(this.houseId);
    this.seva.getHOusei(this.houseId)
     .subscribe(
       data =>{
         this.pHouse=data;

      },
      error =>{
        console.log(error.errorMessage)
      }
     )
  }
public goBack(): any {
  this.location.back();
}
ngOnDestroy(){
  
}
}
