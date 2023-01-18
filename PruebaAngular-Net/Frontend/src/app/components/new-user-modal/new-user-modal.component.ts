import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../home/api.service';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.scss']
})
export class NewUserModalComponent implements OnInit {

  userForm: FormGroup;
  updated = false;

  user_in_use = false;
  
  constructor(
    private _formbuilder: FormBuilder,
    private _apiService: ApiService,
    public dialogRef: MatDialogRef<NewUserModalComponent>
  ) {
    this.userForm = this._formbuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  createUser(){
    this._apiService.createUser(this.userForm.value).subscribe( (response:any) => {
      if(response.status == 200){
        this.updated = true;
        this.closeModal();
      }else{
        if(response.message == 'Username already exists'){
          this.user_in_use = true;
          setTimeout(()=>{
            this.user_in_use = false;
          },2000)
        }
      }
    })
  }

  closeModal(){
    this.dialogRef.close(this.updated);
  }

}
