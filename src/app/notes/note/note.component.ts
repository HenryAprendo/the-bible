import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

  form!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private router: Router
  ){
    this.builderForm();
  }

  private builderForm(){
    this.form = this.fb.group({
      title: ['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      message: ['',[Validators.required, Validators.maxLength(500), Validators.minLength(50)]]
    })
  }

  get fieldTitle(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get fieldMessage(): FormControl {
    return this.form.get('message') as FormControl;
  }

  get isValidTitle() {
    return this.fieldTitle.valid && this.fieldTitle.touched;
  }

  get isInvalidTitle() {
    return this.fieldTitle.invalid && this.fieldTitle.touched;
  }

  get isValidMessage() {
    return this.fieldMessage.valid && this.fieldMessage.touched;
  }

  get isinvalidMessage() {
    return this.fieldMessage.invalid && this.fieldMessage.touched;
  }



  back(){
    this.router.navigate(['/notes'])
  }

}
