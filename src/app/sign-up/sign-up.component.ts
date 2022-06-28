import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  model: User = new User("", "", "", "");

  constructor() { }

  onSubmit() {
    // form submitted
    console.log(this.model);
  }

  ngOnInit(): void {
  }

}
