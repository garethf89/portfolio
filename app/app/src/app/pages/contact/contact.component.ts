import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {fadeAnimation} from '../../_animations/fade_animation';

import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  animations: [fadeAnimation],
  providers: [EmailService],
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  showSuccessMessage: Boolean = false;
  showErrorMessageAPI: Boolean = false;
  showErrorMessage: Boolean = false;

  contactForm: FormGroup;
  personName:String = '';
  personEmail:String = '';
  personQuery:String = '';

  constructor(fb: FormBuilder, private emailService:EmailService) {
    this.contactForm = fb.group({
        "personName": [null, Validators.required],
        "personEmail": [null, Validators.compose([Validators.required, Validators.email])],
        "personQuery": [null, Validators.required]
      });
}

  ngOnInit() {
  }

  onSubmit(form){
    
    if(this.contactForm.status == "INVALID"){
      this.showErrorMessage = true;
      return;
    }

    this.showErrorMessage = false;


    //call service
    this.emailService.sendEmail(this.contactForm.value).subscribe(
      data => {
        this.showSuccessMessage = true;
      }, 
      error => {

        console.log(error)
        this.showErrorMessageAPI = true;
    });

 }

}