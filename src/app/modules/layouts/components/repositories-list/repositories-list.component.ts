import { Component, Input, OnInit } from '@angular/core';
import { Repos } from 'src/app/modules/core/interfaces/repo.interface';

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.scss']
})
export class RepositoriesListComponent implements OnInit {
  @Input() reposList:Repos[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
