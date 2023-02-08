import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Post } from '../post';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  id!: number;
  post!: Post;
  form!: FormGroup;

  constructor(
    public apiService: ApiService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

   ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.apiService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  submit(){
    this.apiService.update(this.id, this.form.value).subscribe(() => {
         alert('Data updated');
         this.router.navigate(['dashboard']);
    })
  }
}
