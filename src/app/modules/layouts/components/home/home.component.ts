import { Component, OnInit } from '@angular/core';
import { Repos } from 'src/app/modules/core/interfaces/repo.interface';
import { RepositoriesService } from 'src/app/modules/core/services/repositories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  reposList:Repos[] = [];
  page = 1;
  currentPage = 0;
  lastPage:number = 0;
  direction = 'down';
  count = 0;
  stopFlag = false;
  constructor(private reposService: RepositoriesService) {}
  ngOnInit(): void {
    this.loadNextPage();
  }

  //#region call getRepos method to get the data

  loadNextPage() {
    this.reposService.getRepos(this.currentPage).subscribe(
      (data:any) => {
        this.reposList = this.reposList.concat(data.items);
      },
      (error) => {
        if (error.status == 403) {
          this.stopFlag = true;
        }
      }
    );
  }

  //#region 

  //#region handle the scroll pagination

  onScrollDown(event:any) {
    if (event) {
      if (!this.stopFlag) {
        this.currentPage = this.currentPage + 1;
        this.loadNextPage();
        setTimeout(() => {}, 100);
        this.direction = 'down';
      }
    }
  }

  //#endregion
}
