import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() summary: string;
  @Input() styles: string;

  constructor() { }

  ngOnChanges() {
    this.summary;
    this.styles;
  }

  ngOnInit() {
  }

}
