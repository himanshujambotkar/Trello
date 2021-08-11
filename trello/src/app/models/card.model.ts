export interface Tasks extends Array<List> {}

export interface List {
  name:string;
  class:string;
  cards: Card[];
}

export interface Card {
  title: string;
  deadline: string;
  storypoints: string;
}
