import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


declare var $: any;

@Component({
  selector: 'left-nav',
  templateUrl: 'left-nav.html'
})

export class LeftNav implements OnInit {
  data;

  constructor(public http: Http, private route: ActivatedRoute) {
    this.http.get('../assets/data/left-nav.json')
      .subscribe(res => this.data = res.json());
  }

  ngOnInit() {
    $('#sidebar-toggle').click(function () {
      $('.main-content').toggleClass('main-content-collapsed');
      $('.sidebar').toggleClass('sidebar-collapsed');
      $('#sidebar-toggle i').toggleClass('fa-arrow-circle-right');
    });
    // console.log("Data via params: ", this.route.snapshot.data['page_header']);
  }
}
