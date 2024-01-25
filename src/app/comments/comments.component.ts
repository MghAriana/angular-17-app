import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios</h3>
    <img src="https://miro.medium.com/v2/0*ZjYSm_q36J4KChdn" alt="this is fine ">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit deleniti placeat voluptatibus a ratione et quidem, autem qui dolores ad hic quia quisquam error alias asperiores adipisci eius beatae!</p>
  `,
  styles: `
  img{
    width:350px;
    height: auto;
  },
  p{
    text-align: center;
  }

  `
})
export class CommentsComponent {

}
