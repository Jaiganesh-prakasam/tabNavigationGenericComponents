import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-pages',
  templateUrl: './generic-pages.component.html',
  styleUrls: ['./generic-pages.component.sass']
})
export class GenericPagesComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit(): void {
  }

}
