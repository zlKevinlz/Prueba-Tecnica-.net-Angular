import { ApiService } from './../home/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-person-modal',
  templateUrl: './new-person-modal.component.html',
  styleUrls: ['./new-person-modal.component.scss']
})
export class NewPersonModalComponent implements OnInit {

  personForm: FormGroup;
  updated = false;

  constructor(
    private _formbuilder: FormBuilder,
    private _apiService: ApiService,
    public dialogRef: MatDialogRef<NewPersonModalComponent>
  ) {
    this.personForm = this._formbuilder.group({
      names: new FormControl('', Validators.required),
      surnames: new FormControl('', Validators.required),
      DNI: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      DNI_type: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  createPerson(){
    this._apiService.createPerson(this.personForm.value).subscribe( (response:any) => {
      if(response.status == 200){
        this.updated = true;
        this.closeModal();
      }
    })
  }

  closeModal(){
    this.dialogRef.close(this.updated);
  }

}
