import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class GoogleSigninService {

  private auth2 : gapi.auth2.GoogleAuth
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1)

  constructor() { 
    gapi.load('auth2' , () => {
      this.auth2 = gapi.auth2.init({
        client_id : '859429172963-vtq8gbqqitma1cta7br669tc8t1cj8vb.apps.googleusercontent.com'
      })
    })
  }
  public signIn(){
    this.auth2.signIn({

    }).then(user => {
      this.subject.next(user)
    }). catch( ()=>{
      this.subject.next(null)
    })
  }

  public signOut(){
    this.auth2.signOut()
    .then( () => {
      this.subject.next(null)
    })
  }

  public Observable()  : Observable<gapi.auth2.GoogleUser>{
    return this.subject.asObservable()
  }
}
