import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Test';

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // this.apiService.getSmth()
    //   .subscribe(({ token }: { token: string }) => this.title += token);

    const logIn = {
      email: 'aaa@aaa.com',
      password: '12345'
    };

    const event = {
      type: '...',
      title: '...',
      description: '...',
      date: '...',
      userEmail: 'aaa@aaa.com'
    }

    

    // this.apiService.signIn(logIn).subscribe(res => console.log(res));

    // this.apiService.getUser({email: 'aaa@aaa.com'}).subscribe(res => console.log(res));

    // this.apiService.createEvent(event).subscribe(res => console.log(res));

    // this.apiService.getAllEvents().subscribe(res => console.log(res));

    // this.apiService.getEventById({id: '87e02b29777b7df8bc3104b7a95d7d9a440fc962'}).subscribe(res => console.log(res));
  }

  onClick():void {
    const user = {
      firstName: 'aaa',
      lastName: 'aaa',
      email: 'aaa@aaa.com',
      password: '12345'
    };

    this.apiService.signUp(user).subscribe(res => console.log(res));
  }
}
