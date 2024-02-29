import { Component } from '@angular/core';
import { EventsService } from '../../Services/events.service';
import { Router, RouterModule } from '@angular/router';
import { FavoritesService } from '../../Services/favorites.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-of-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-of-favorites.component.html',
  styleUrl: './list-of-favorites.component.css'
})
export class ListOfFavoritesComponent {

  constructor(
    private favoritesService: FavoritesService,
    private eventsService: EventsService,
    private router: Router) { }

    events$ = this.eventsService.getEvents();
    favorites$ = this.favoritesService.getFavorites();

    eventList: Event[] = [];
    
}
