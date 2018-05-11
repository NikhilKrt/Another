import { Location } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';
import { SevaService } from './../seva.service';
import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.css']
})
export class CharComponent implements OnInit {
public nChar;
public cId;
  constructor(private _route:ActivatedRoute,private router:Router,public seva:SevaService,public location:Location) { }

  ngOnInit() {
    this.cId=this._route.snapshot.paramMap.get("characId");
    this.seva.getChari(this.cId)
    .subscribe(
      data =>{
        this.nChar=data;
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
  }
  public goBack(): any {
    this.location.back();
  }

  ngOnDestroy() {
  }
}
