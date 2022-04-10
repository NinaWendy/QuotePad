import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,'William W.', "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",'John Doe',new Date(2020,3,14),0,0,false),
    new Quote(2,'Marilyn Monroe', "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",'Jane Doe',new Date(2020,3,14),3,0,false),
    new Quote(3,'Neil Gaiman',"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",'Anon Hacker',new Date(2022,3,8),0,0,false)
  
  ];
  visible:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  public likeCounter(quote:Quote){
    quote.upVote++;
  }
  public dislikeCounter(quote:Quote){
    quote.downVote++;
  }
}
