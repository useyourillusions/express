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
    this.apiService.getSmth()
      .subscribe(({ token }: { token: string }) => this.title += token);
  }
}
