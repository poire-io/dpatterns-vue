import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component ({
    selector : 'page-error',
    templateUrl : 'page-error.html'
})

export class PageError implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    // console.log("Data via params: ", this.route.snapshot.data['page_header']);
  }
}
