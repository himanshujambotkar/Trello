export interface Tasks extends Array<List> {}

export interface List {
  class:string;
  deadline:string;
  cards: Card[];
}

export interface Card {
  class:string;
  deadline:string;
  storypoints:string;
}
