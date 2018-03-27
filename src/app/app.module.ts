import { teste } from './routes';
import { RouterModule, Routes } from '@angular/router';
import { Service } from './service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IndexComponent } from './index/index.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    teste
    
    
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }




