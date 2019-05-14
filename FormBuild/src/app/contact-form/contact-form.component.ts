import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { GetContactInfoContentService } from '../get-contact-info-content.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class FormComponent implements OnInit {

	// Form
	contactUs: FormGroup = 	new FormGroup({});
	public formDataObj;
	// Properties assosicated with the form
	customerProps = [];
	public groupedCollection = [];
	
	constructor(private formBuilder: FormBuilder, private contactInfoService: GetContactInfoContentService ) { }

	ngOnInit() {
		let tempFormDataObj = {};
			const resp: any =  [
					{
						"labelName": "First Name",
						"group": "contactInfo",
						"type": "text",
						"regExp": "^[A-Za-z\\' \\-]*$",
						"value": "",
						"required": "true",
						"errorMessage" : "Please enter only letters in this field."
					},
					{
						"labelName": "Last Name",
						"group": "contactInfo",
						"type": "text",
						"regExp": "^[a-z ,.'-A-Z]+$",
						"value": "",
						"required": "true",
						"errorMessage" : "Please enter only letters in this field."
					},
					{
						"labelName": "Email",
						"group": "contactInfo",
						"type": "text",
						"regExp": "^([A-Za-z0-9])+([_-.])?([A-Za-z0-9])+@([A-Za-z0-9])+.([A-Za-z]{2,3})$",
						"value": "",
						"required": "true",
						"errorMessage" : "Please enter a valid email address."
					},
					{
						"labelName": "Phone",
						"group": "contactInfo",
						"type": "text",
						"regExp": "^([(]?[0-9][0-9][0-9][)]? ?[0-9][0-9][0-9][-]?[0-9][0-9][0-9][0-9])$",
						"value": "",
						"required": "true",
						"errorMessage" : "Please enter valid phone number in this field."
					},
					{
						"labelName": "Company",
						"group": "companyInfo",
						"type": "text",
						"regExp": "^[a-z ,.'-A-Z]+$",
						"value": "",
						"required": "true",
						"errorMessage" : "Please enter a valid email address."
					},
					{
						"labelName": "Title",
						"group": "companyInfo",
						"type": "text",
						"regExp": "^[a-z ,.'-0-9A-Z]+$",
						"value": "",
						"required": "true",
						"errorMessage" : "Please enter a valid email address."
					},
					{
						"labelName": "Industry",
						"group": "companyInfo",
						"type": "select",
						"regExp": null,
						"value": "",
						"required": "true",
						"errorMessage" : "Please select a value from the dropdown.",
						"optionValues": ["Collections", "Automotive", "Banking"]
					},
					{
						"labelName": "State",
						"group": "companyInfo",
						"type": "select",
						"regExp": null,
						"value": "",
						"required": "true",
						"errorMessage" : "Please select a value from the dropdown.",
						"optionValues": [ "Illinois", "Texas", "Michigan" ]
					}
				];
			const property = 'group';
			const groupedData = resp.reduce((previous, current) => {
				if(!previous[current[property]]) {
					console.log("previous[current[property]",previous[current[property]]);
					previous[current[property]] = [current];
				} else {
					previous[current[property]] = [...previous[current[property]], current];
				}
				return previous;
			}, {});
			this.groupedCollection = Object.values(groupedData);
			console.log('grouped collection: ',this.groupedCollection);
			this.formDataObj = resp;
			this.formDataObj.map(item => {
				tempFormDataObj[item.labelName] = new FormControl(item.value, this.mapValidator(item.validators));
			});
			this.contactUs = new FormGroup(tempFormDataObj);

	}
	// checks which validation type is needed.
	mapValidator(validators) {
		if (validators) {
			return Object.keys(validators).map(validationType => {
				switch(validationType) {
					case 'required': {
						return Validators.required;
					}
					case 'email':
					case 'phone': 
					case 'name':
					case 'company':
					case 'title':
					default: {
						return Validators.pattern(validators[validationType]);
					}
				}
			})
		}
		else {
			return [];
		}
	}
	onSubmit() {
		console.log("form submit fired");
		// TODO - Send the form somewhere.
		let initialData = {
			elqFormName: 'business.com-rif',
			elqSiteID: 1834359157,
			elqCustomerGUID: '',
			elqCookieWrite: 0,
			hiddenCampaignId: '70114000002WsoE',
			hiddenlastSFDCCampaignName: 'business.com-rif',
			hiddenincludeineloqua: 1,
			hiddenreferralurl: '/',
			// possible error leadsource-recent is original
			leadsourcerecent: 'TU.com',
			utmsource: '',
			utmmedium: '',
			utmkeyword: '',
			uniqueformid: ''
		}
		let formData = this.contactUs.value;
		console.log("contact us on submit", this.contactUs.value)
		// need to save the form values via Object.assign
		let data = Object.assign(initialData, formData);
		console.log('data to post to eloqua: ',data);
		this.contactInfoService.postToEloqua(data)

	}
	hasError(data) {
		return this.contactUs.get(data.labelName).errors && this.contactUs.get(data.labelName).errors.pattern ? true : false;
	}
}