import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movieList:any[]=[
    {
      movieName:'Mangalavaaram',
      ticketRate:'120',
      description:'Fear engulfs a village as mysterious murders pile up and Shailu, a young woman, finds herself at the center of it.',
      shows:['11:00','2:00','6:00','9:30'],
      image:'../assets/mangalavaram.jpg'
    },
    {
      movieName:'Keedaa Cola',
      ticketRate:'130',
      description:'Keedaa Cola is a Telugu movie starring Chaitanya Madadi, Rag Mayur,',
      shows:['11:15','2:20','6:15','9:30'],
      image:'../assets/keedakola.webp'
    },
    {
      movieName:'Maa Oori Polimera 2',
      ticketRate:'115',
      description:'After a serial spine chilling killings in Adrasupally, an auto driver Komaraih elopes to Kerala with his first love Kavitha. Things get more complicated when his brother Jangiah goes missing.',
      shows:['10:30','1:45','5:50','8:45'],
      image:'../assets/mavurupolimera.webp'
    },
    {
      movieName:'Bhagavanth Kesari',
      ticketRate:'145',
      description:'A man tries to get even with a powerful businessman.',
      shows:['11:00','2:00','6:00','9:30'],
      image:'../assets/Bhagavanth_Kesarinew.jpg'
    },
    {
      movieName:'Jigarthanda Double X',
      ticketRate:'135',
      description:'A notorious gangster is incited to transform into a film hero and opts for a filmmaker and their project descends into a scenario they had never anticipated.',
      shows:['9:15','12:00','3:30','6:00','8:45'],
      image:'../assets/jigarthanda.jpeg'
    }
  ]
}
