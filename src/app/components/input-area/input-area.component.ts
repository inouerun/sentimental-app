import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.sass']
})
export class InputAreaComponent implements OnInit {
  public inputForm: FormControl;
  public outputForm: FormControl;


  constructor(
  ) { }

  ngOnInit(): void {
    this.inputForm = new FormControl('');
  }

}
