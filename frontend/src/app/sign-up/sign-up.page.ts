import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private share:SharedService,private toast:ToastController,private route:Router) { }

  ngOnInit() {
  }
signUp(form:NgForm){

this.share.signUp(form.value).subscribe( async data=>{
const t =  await this.toast.create({
  message:data.message,
  duration:3000
})

t.present();

this.route.navigate(['/login']);


})
}

}
