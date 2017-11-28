import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component ({
    selector : 'page-header',
    templateUrl : 'page-header.html'
})

export class PageHeader implements OnInit {
  constructor(
    private route: ActivatedRoute

  ) { }
  ngOnInit() {
    // console.log(this.route.snapshot.data);
    // console.log("Data via params: ",this.route.snapshot.data['page_header']);
  }
}
