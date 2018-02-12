import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
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
  }
}