import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component ({
    selector : 'page-header',
    templateUrl : 'page-header.html'
})

export class PageHeader implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router

  ) { }
  ngOnInit() {
    console.log("Data via params: ",this.route.snapshot.data['page_header']);
  }
}
