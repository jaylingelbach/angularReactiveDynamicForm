import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetContactInfoContentService {

	constructor(private http: HttpClient) {}

	fetchContactInfo(): Observable<Object> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'type': 'json'
			})
		}
		const url = 'assets/contactInfoContent.json';
		return this.http.get(url, httpOptions);
	}

	// location.href and append the api endpoint.
	postToEloqua(data): Observable<Object> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-type': 'application/x-www-form-urlencoded'
			})
		}
		let url = window.location.href;
		let hostname: string =  url.indexOf('//') > -1 ? url.split('/')[2] : url.split('/')[0];
		hostname = hostname.split(':')[0];
		hostname = hostname.split('?')[0];
		 
		let apiUrl = 'https://' + hostname + '/admin/Eloqua-submit';
		console.log("apiUrl: ",apiUrl)
		this.http.post(apiUrl, data, httpOptions).subscribe(res => {
			console.log(res);
			return
		});
	}
}
