import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  posts: Post[] = [];

  constructor(private _appService: ApiService) {}

  ngOnInit(): void {
    this._appService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })
}
}
