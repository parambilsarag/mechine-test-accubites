import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
