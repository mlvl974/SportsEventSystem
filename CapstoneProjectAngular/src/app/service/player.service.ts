import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../model/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  baseUrl: string = 'http://localhost:19169/api/Player';

  // Performs HTTP requests
  constructor(private httpClient: HttpClient) {}

  // get method returns an Observable<Player[]> for async communication.
  getPlayer() {
    return this.httpClient.get<Player[]>(this.baseUrl);
  }

  // http://localhost:37584/api/Player/GetById/2
  getPlayerById(id: number) {
    return this.httpClient.get<Player>(this.baseUrl + '/GetById' + id);
  }

  // fetching the Player from the PlayerList Component and posting it to the web api.
  createPlayer(player: Player) {
    return this.httpClient.post(this.baseUrl, player);
  }

  // http://localhost:37584/api/Player?id=3
  updatePlayer(player: Player) {
    return this.httpClient.put(this.baseUrl + '?id=' + player.id, player);
  }

  // http://localhost:37584/api/Player?id=3
  deletePlayer(id: number) {
    return this.httpClient.delete(this.baseUrl + '?id=' + id);
  }
}
