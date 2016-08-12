import {Component} from '@angular/core';




export class Article {
title: string;
link: string;
votes: number;
constructor(title: string, link: string, votes?: number) {
this.title = title;
this.link = link;
this.votes = votes || 0;
 }
 
}





@Component({
    selector : 'article',
    templateUrl: 'app/redditArticle/article.html' ,
    host : {
        class : 'row'
    },
    inputs : ['myArticle']
})

export class ArticleComponent{
    myArticle

    
    voteUp(){
        this.myArticle.votes += 1
        return false
    }
    
    voteDown(){
        this.myArticle.votes -= 1
        return false
    }
}



