import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from '@angular/core';
import { RedditApplication} from './redditApp/redditApp'

@Component({
  selector: 'my-app',
  directives:[RedditApplication],
  template: '<reddit>loading....</reddit>',
  
  // template: `<h1>Hello {{names}}</h1>
  // <ul><li *ngFor="let n of names">{{n}} </li></ul>
  // `
})
export class HelloWorld {
  
  // names : Array<string> = ['Ari', 'Carlos', 'Felipe', 'Nate']
  
 }


 bootstrap(HelloWorld);