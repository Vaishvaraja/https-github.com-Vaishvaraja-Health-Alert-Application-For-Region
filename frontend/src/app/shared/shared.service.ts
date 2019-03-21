import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService{
  allUsers = []
  constructor(private http:HttpClient) {
  }

userDetails = {}
userProfile = {
  userDetails:{},
  userDisease:{},
  score:'',
  date:''
}

 


  setUserDetails(userDetail){
    this.userDetails = userDetail;
  }

  getUserDetails(){
    return this.userDetails
  }

  setUserDisease(userDisease,score){
    this.userProfile.userDisease = userDisease;
    this.userProfile.userDetails = this.userDetails
    this.userProfile.score = score;
    this.userProfile.date = (new Date().getTime().toString());
    return this.http.post<any>(`${environment.baseUrl}add-user-profile`,this.userProfile)
  }

  getUserProfile(){
    return this.userProfile;
  }

  getAllUsers(){
    return this.http.get<any>(`${environment.baseUrl}get-all-user-data`)
}

signUp(credential){
  return this.http.post<any>(`${environment.baseUrl}sign-up`,credential)
}

login(credential){
  return this.http.post<any>(`${environment.baseUrl}log-in`,credential)

}
}