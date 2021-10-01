import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './../templates/form.component.html',
})
export class FormComponent implements OnInit {
  isShowForm = false;
  constructor() { }

  ngOnInit(): void {

  }

  toogleForm() {
    this.isShowForm = !this.isShowForm;
  }

  setClasses() {
    return {
      'btn-info': (this.isShowForm == false),
      'btn-danger': (this.isShowForm == true)
    };
  }

}
