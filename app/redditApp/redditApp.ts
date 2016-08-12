import {Component} from '@angular/core';
import {ArticleComponent} from '../redditArticle/article'
import {Article} from '../redditArticle/article'

@Component({
    selector : 'reddit',
    templateUrl: 'app/redditApp/reddit.html' ,
    directives : [ArticleComponent]
})
export class RedditApplication{
    address: string = "Karachi"
    articles : Article[]
    
    constructor(){
        this.articles = [
             new Article('Angular Homepage', 'http://angular.io', 1),
             new Article('Fullstack', 'http://fullstack.io', 2)
        ]
        console.log(this.address.split('a')[0]);
        
        
    }
    
 addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        this.articles.push(new Article(title.value, link.value))     
        title.value= '';
        link.value = '';
        console.log(`Adding article title: ${title.value} and link: ${link.value} `);
 }
 
 sortArticle(){
     return this.articles.sort((a: Article , b : Article) => b.votes - a.votes)
 }
 
 details(article: Article){
     console.log("ArtiCle...",article);
     
 }
    
}