import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  posts: Post[] = [];

  constructor(private _appService: ApiService) {}

  ngOnInit(): void {
    this._appService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })
  }

}
