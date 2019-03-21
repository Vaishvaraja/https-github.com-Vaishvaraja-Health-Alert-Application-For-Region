import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
allUsers;
  constructor(private share:SharedService) { }

  ngOnInit() {
this.share.getAllUsers().subscribe(data=>{
  this.allUsers = data.data
})

  }



}
