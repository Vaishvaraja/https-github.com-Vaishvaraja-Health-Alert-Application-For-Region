import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private share:SharedService,private toast:ToastController,private route:Router) { }

  ngOnInit() {
  }

login(form:NgForm){
  this.share.login(form.value).subscribe( async data=>{
const t = await this.toast.create({
  message:data.message,
  duration:3000
})
t.present();
localStorage.setItem('login',data.login)
if(data.login){
  this.route.navigate(['/home'])
}
  })
}

}
