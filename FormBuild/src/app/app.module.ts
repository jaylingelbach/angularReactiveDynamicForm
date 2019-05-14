import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// local imports below, Angular imports above.
import { AppComponent } from './app.component';
import { FormComponent } from './contact-form/contact-form.component';
import { GetContactInfoContentService } from './get-contact-info-content.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
	BrowserModule,
	HttpClientModule,
	BrowserAnimationsModule,
	ReactiveFormsModule
  ],
  providers: [ GetContactInfoContentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
