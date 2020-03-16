import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}
  ngOnInit(){
    this.createForm();
  }
  public createForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) { // stop here if form is invalid
        return;
    }
    console.log(this.myForm.value);
  }
}
