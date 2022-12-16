import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { Note } from '../../models/note.models';
import { StorageNoteService }  from '../../services/storage-note.service';
import { ConfigService }  from '../../services/config.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  form!:FormGroup;

  colorTheme!:string;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private storageNote: StorageNoteService,
    private config: ConfigService
  ){
    this.builderForm();
  }

  ngOnInit() {
    this.config.suscriptionTheme
      .subscribe(color => {
        this.colorTheme = color;
      })
  }

  saveNote(){
    if(this.form.valid){

      const note: Note = {
        id: uuidv4(),
        title: this.fieldTitle.value,
        message: this.fieldMessage.value,
        date: new Date(),
        color: 'white'
      }

      this.storageNote.save(note);
      this.back();
    }
    else {
      this.form.markAllAsTouched();
    }
  }

  private builderForm(){
    this.form = this.fb.group({
      title: ['',[Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      message: ['',[Validators.required, Validators.maxLength(100), Validators.minLength(50)]]
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
