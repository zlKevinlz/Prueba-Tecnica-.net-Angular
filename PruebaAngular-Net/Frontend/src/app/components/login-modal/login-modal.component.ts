import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../home/api.service';
import { NewPersonModalComponent } from '../new-person-modal/new-person-modal.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  loginForm: FormGroup;
  message = '';
  logged = false;

  constructor(
    private _formbuilder: FormBuilder,
    private _apiService: ApiService,
    public dialogRef: MatDialogRef<NewPersonModalComponent>
  ) {
    this.loginForm = this._formbuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  login(){
    this._apiService.login(this.loginForm.value).subscribe( (response:any) => {
      if(response.status == 200){
        this.logged = true;
        this.loginForm.disable();
      }else if(response.message == 'Incorrect password'){
        this.message = response.message;
      }else if(response.message == 'This user does not exists'){
        this.message = response.message;
      }else{
        this.message = 'Something went wrong';
      }
      setTimeout( ()=> {
        this.message = '';
      },3000)
    })
  }

  signOut(){
    this.logged = false;
    this.loginForm.enable();
    this.loginForm.reset();
  }

  closeModal(){
    this.dialogRef.close();
  }

}
