import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h2>Lista de juegos favoritos</h2>
    @for (game of listGames; track game.id) {
      <li>{{game.name}}</li>
    }
  `,
  styleUrl: './games.component.css'
})
export class GamesComponent {
  listGames = [
    {
      id: 1,
      name:"Bioshock"
    },
    {
      id:2,
      name: "Boku"
    },
    {
      id:3,
      name: "minecraft"
    },
  ]
}
