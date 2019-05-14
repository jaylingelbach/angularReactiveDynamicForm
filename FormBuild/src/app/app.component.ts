import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetContactInfoContentService } from './get-contact-info-content.service';


// reduce separate into diff objs and use group to populate in columns for css stuffs.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 *	Notes for future features:
 *	assests write service to read from file.
 */
export class AppComponent {
	contactInfo$;
	constructor	(private contactService: GetContactInfoContentService) {
	}

	fetchContactInfo() {
		this.contactInfo$ = this.contactService.fetchContactInfo();
		console.log("contactInfo$ from app.component.ts", this.contactInfo$)
	}

}