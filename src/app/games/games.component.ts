import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
 @Input() username =''; 
 @Output() addFavoriteEvent = new EventEmitter<string>();

 fav(gameName:string){
   //alert(`A ${this.username} le gusta jugar a ${gameName} `	)//
   this.addFavoriteEvent.emit(gameName);
 }

 games =[
  {id: 1,
   name: 'Aion'
  } ,
  {id: 2,
    name: 'Genshin Impact'
   } ,
   {id: 3,
   name: 'Warframe'
   }
 ]
}
