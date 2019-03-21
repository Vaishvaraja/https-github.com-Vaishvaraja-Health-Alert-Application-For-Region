import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.page.html',
  styleUrls: ['./disease.page.scss'],
})
export class DiseasePage implements OnInit {
  id;
  dengueForm: FormGroup;
  malariaForm: FormGroup;
  score = 0;
  malariaDisease = {
    fever: '',
    vomit: '',
    nausea: '',
    headAche: '',
    bodyPain: ''
  }
  dengueDisease = {
    suddenOnsetFever: '',
    painfullHeadAche: '',
    vomit: '',
    nausea: '',
    skinRash: ''
  }
  malaria = false;
  dengue = false
  malariaPercentage = 0;
  denguePercentage = 0;
  constructor(private toast:ToastController, private route: ActivatedRoute, private formBuilder: FormBuilder, private shared: SharedService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');


    if (this.id == 1) {
      this.malaria = true;
    } else {
      this.dengue = true;
    }
    this.malariaForm = this.formBuilder.group({
      fever: ['', [Validators.required]],
      vomit: ['', [Validators.required]],
      nausea: ['', [Validators.required]],
      headAche: ['', [Validators.required]],
      bodyPain: ['', [Validators.required]]
    })

    this.dengueForm = this.formBuilder.group({
      suddenOnsetFever: ['', [Validators.required]],
      painfullHeadAche: ['', [Validators.required]],
      vomit: ['', [Validators.required]],
      nausea: ['', [Validators.required]],
      skinRash: ['', [Validators.required]]
    })


  }

  calculateDengueDisease(form: FormGroup) {
    Object.keys(form.value).map(data => {
      if (form.value[data] == 1) {
        this.score += 20
      }
    })

    this.shared.setUserDisease(form.value,this.score).subscribe(async data=>{
      let t  = await this.toast.create({
        message:data.success,
        duration:4000
      })
      t.present();
    })    // console.log(this.shared.getUserProfile())
  }

  calculateMalariaDisease(form: FormGroup){
    Object.keys(form.value).map(data => {
      if (form.value[data] == 1) {
        this.score += 20
      }

    })
    this.shared.setUserDisease(form.value,this.score).subscribe(async data=>{
      let t  = await this.toast.create({
        message:data.success,
        duration:4000
      })
      t.present();
    })
    // console.log(this.shared.getUserProfile())

  }



}
