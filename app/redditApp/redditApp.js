"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var article_1 = require('../redditArticle/article');
var article_2 = require('../redditArticle/article');
var RedditApplication = (function () {
    function RedditApplication() {
        this.address = "Karachi";
        this.articles = [
            new article_2.Article('Angular Homepage', 'http://angular.io', 1),
            new article_2.Article('Fullstack', 'http://fullstack.io', 2)
        ];
        console.log(this.address.split('a')[0]);
    }
    RedditApplication.prototype.addArticle = function (title, link) {
        this.articles.push(new article_2.Article(title.value, link.value));
        title.value = '';
        link.value = '';
        console.log("Adding article title: " + title.value + " and link: " + link.value + " ");
    };
    RedditApplication.prototype.sortArticle = function () {
        return this.articles.sort(function (a, b) { return b.votes - a.votes; });
    };
    RedditApplication.prototype.details = function (article) {
        console.log("ArtiCle...", article);
    };
    RedditApplication = __decorate([
        core_1.Component({
            selector: 'reddit',
            templateUrl: 'app/redditApp/reddit.html',
            directives: [article_1.ArticleComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RedditApplication);
    return RedditApplication;
}());
exports.RedditApplication = RedditApplication;
//# sourceMappingURL=redditApp.js.map