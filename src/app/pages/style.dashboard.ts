import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component ({
    selector : 'style-dashboard',
    templateUrl : 'style.dashboard.html'
})

export class StyleDashboard implements OnInit {

    ngOnInit() {
        $('.grid').masonry({
            itemSelector: '.grid-item',
            percentPosition: true
        });
    }

}
