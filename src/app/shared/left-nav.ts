import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'left-nav',
  templateUrl: 'left-nav.html'   
})

// export class LeftNav {}

export class LeftNav implements OnInit {
  ngOnInit() {
    $('#sidebar-toggle').click(function () {
      $('.main-content').toggleClass('main-content-collapsed');
      $('.sidebar').toggleClass('sidebar-collapsed');
      $('#sidebar-toggle i').toggleClass('fa-arrow-circle-right');
    });
  }
}
