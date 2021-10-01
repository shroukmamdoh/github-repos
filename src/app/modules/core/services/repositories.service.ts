import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { format } from 'date-fns';
import { environment } from 'src/environments/environment';
import { Repos } from '../interfaces/repo.interface';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  specificDate = format(
    new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    'yyyy-MM-dd'
  );
  constructor(private http: HttpClient) {}
  getRepos(page: any) {
    return this.http.get<Repos>(
      `${environment.baseUrl}/search/repositories?q=created:>${this.specificDate}&sort=stars&order=desc&page=${page}`
    );
  }
}
