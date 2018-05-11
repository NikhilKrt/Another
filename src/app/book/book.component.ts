import { logging } from 'protractor';
import { Location } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';
import { SevaService } from './../seva.service';
import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
public nBook;
public id;
  constructor(private _route:ActivatedRoute,private router:Router,public seva:SevaService,public location:Location) { }

  ngOnInit() {
    this.id=this._route.snapshot.paramMap.get("id");
    this.seva.getBooki(this.id)
    .subscribe(
      data =>{
        this.nBook=data;
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
  }
public goBack():any{
  this.location.back();
}
ngOnDestroy(){
  
}
}
