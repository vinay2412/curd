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

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
    })
  }

   deletePost(id:number){
    this.apiService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         alert('Data delete');
    })
  }

}
