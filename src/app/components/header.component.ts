import { Component, Input, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './../templates/header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input('iTitle') title: any;
  //phương thức chạy chính
  //tiêm vào các service, 
  constructor() { }

  ngOnChanges() {
    console.log('HeaderComponent::ngOnChanges');
    this.title = '123';
  }
  ngOnInit() {
    console.log('HeaderComponent::ngOnInit: ', this.title);

    setTimeout(() => {
      this.title = '456';
    }, 2000);
  }

  ngDoCheck() {
    //thực hiện khi giá trị thuộc tính thay đổi
    console.log('HeaderComponent::ngDoCheck', this.title);
  }

  ngAfterContentInit() {
    console.log('HeaderComponent::ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('HeaderComponent::ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('HeaderComponent::ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('HeaderComponent::ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('HeaderComponent:ngOnDestroy');
  }
}
