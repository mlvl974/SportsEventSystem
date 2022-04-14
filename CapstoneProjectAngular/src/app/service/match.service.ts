import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../model/match.model';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  baseUrl: string = 'http://localhost:19169/api/Match';

  // Performs HTTP requests
  constructor(private httpClient: HttpClient) {}

  // get method returns an Observable<Match[]> for async communication.
  getMatch() {
    return this.httpClient.get<Match[]>(this.baseUrl);
  }

  // http://localhost:19169/api/Match/GetById/2
  getMatchById(id: number) {
    return this.httpClient.get<Match>(this.baseUrl + '/GetById' + id);
  }

  // fetching the match from the MatchList Component and posting it to the web api.
  createMatch(match: Match) {
    return this.httpClient.post(this.baseUrl, match);
  }

  // http://localhost:19169/api/Match?id=3
  updateMatch(match: Match) {
    return this.httpClient.put(this.baseUrl + '?id=' + match.id, match);
  }

  // http://localhost:19169/api/Match?id=3
  deleteMatch(id: number) {
    return this.httpClient.delete(this.baseUrl + '?id=' + id);
  }
}
