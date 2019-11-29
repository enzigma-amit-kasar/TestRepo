import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyCustomComponentComponent } from '../../projects/custom-module/src/lib/my-custom-component/my-custom-component.component';
@NgModule({
  declarations: [
    AppComponent,
    MyCustomComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
