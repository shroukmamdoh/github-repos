import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.scss']
})
export class RepositoryItemComponent implements OnInit {
  @Input() repo:any
  constructor() { }

  ngOnInit(): void {
  }

}
