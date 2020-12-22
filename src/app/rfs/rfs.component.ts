import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-rfs',
  templateUrl: './rfs.component.html',
  styleUrls: ['./rfs.component.css'],
})
export class RfsComponent implements OnInit {
  myForm: FormGroup;
  @Output() user = new EventEmitter();

  @ViewChild(FormGroupDirective) formRef: FormGroupDirective;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18), Validators.pattern("^[0-9]*$")]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submitHandler() {
    if (!this.myForm.invalid) {
      this.user.emit(this.myForm.value);
      this.formRef.resetForm();
    } else {
      window.alert('This form is not Valid');
    }
  }
}
