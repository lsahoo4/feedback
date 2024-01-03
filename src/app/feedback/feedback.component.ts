import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NetlifyFormsService } from '../netlify-forms/netlify-forms.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Feedback {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
  description: string;
  rating: number;
}


@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

  constructor(
    private fb: FormBuilder, 
    private formsService: NetlifyFormsService,
    private router: Router,
    ) { }

  feedbackForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    type: ['', Validators.required],
    description: ['', Validators.required],
    rating: [0, Validators.min(1)]
  });

  errorMsg = '';

  closeError() {
    this.errorMsg = '';
  }

  onSubmit() {;
    const fedback: Feedback = this.feedbackForm.value as Feedback;
    console.log(fedback);
    this.formsService.submitFeedback(fedback).subscribe(
      () => {
        this.feedbackForm.reset();
        this.router.navigateByUrl('/success');
      },
      err => {
        this.errorMsg = err;
      }
    )
  }
  

}
