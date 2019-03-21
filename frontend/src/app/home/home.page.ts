import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userDetailsForm: FormGroup;
  userDetail = {
    name:'',
    phone:'',
    address:'',
    city:'',
    state:'',
    pin:''
  }
  ngOnInit(): void {
    this.getAlluser()
    this.userDetailsForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      phone: ['',[Validators.required]],
      address: ['',[Validators.required]],
      city: ['',[Validators.required]],
      state: ['',[Validators.required]],
      pin: ['',[Validators.required]]
    })
  }

  constructor(private formBuilder: FormBuilder,private shared:SharedService,private router:Router) {

  }

  getAlluser(){
   this.shared.getAllUsers()
  }

  addUserDetailes(form:FormGroup){
    this.userDetail = form.value;
    this.shared.setUserDetails(this.userDetail)
  }



}
