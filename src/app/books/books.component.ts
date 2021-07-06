import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

   books=[
        {
            title: 'Kite Runner',
            author:'Khaled Hosseini',
            genre:'Drama',
            description:'The Kite Runner is the first novel by Afghan-American author Khaled Hosseini.Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul. The story is set against a backdrop of tumultuous events, from the fall of Afghanistans monarchy through the Soviet military intervention, the exodus of refugees to Pakistan and the United States, and the rise of the Taliban regime.<br><br>Hosseini has commented that he considers The Kite Runner to be a father-son relationship story, emphasizing the familial aspects of the narrative, an element that he continued to use in his later works.Themes of guilt and redemption feature prominently in the novel, with a pivotal scene depicting an act of sexual assault that happens against Hassan that Amir fails to prevent. The situation as a whole was the main reason why Amir and Hassans friendship ended. The latter half of the book centers on Amirs attempts to atone for this transgression by rescuing Hassans son two decades later.<br><br>The Kite Runner became a bestseller after being printed in paperback and was popularized in book clubs. It appeared on the New York Times bestseller list for over two years, with over seven million copies sold in the United States. Reviews were generally positive, though parts of the plot drew significant controversy in Afghanistan. A number of adaptations were created following publication, including a 2007 film of the same name, several stage performances, and a graphic novel. The novel is also available in a multi-CD audiobook read by the author.',
            img:"kiterunner.jpg"
        }];

  
  constructor() { }

  ngOnInit(): void {
  }

}
