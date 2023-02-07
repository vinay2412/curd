import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  form!: FormGroup;

  constructor(public apiService: ApiService,
    private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required),
    });
  }

   submit() {
    console.log(this.form.value);
    this.apiService.create(this.form.value).subscribe((res: any) => {
      alert('Post created successfully!');
    });
  }


}
