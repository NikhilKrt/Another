import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SevaService } from './seva.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { GharComponent } from './ghar/ghar.component';
import { NahiMillaComponent } from './nahi-milla/nahi-milla.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { CharComponent } from './char/char.component';
import { HouseComponent } from './house/house.component';

@NgModule({
  declarations: [
    AppComponent,
    GharComponent,
    NahiMillaComponent,
    BookComponent,
    CharComponent,
    HouseComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:GharComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},     
      { path: 'book/:id', component: BookComponent },
      { path: 'character/:characId', component:CharComponent },
      { path: 'house/:houseId', component:HouseComponent },
      {path:'**',component:NahiMillaComponent}
    ])
  ],
  providers: [SevaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
