import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES }   from '@angular2-material/card';
import { MD_ICON_DIRECTIVES }   from '@angular2-material/icon';

import { Post, PostService } from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'recent-posts',
  templateUrl: 'recent-posts.component.html',
  styleUrls: ['recent-posts.component.css'],
  directives: [
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_ICON_DIRECTIVES,
  ]
})
export class RecentPostsComponent implements OnInit {
  posts: Post[ ] = [ ];

  constructor (
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit ( ) {
    this.postService.getPosts( ).then((posts) => this.posts = posts);
  }

  gotoPost (key: string) {
    this.router.navigate(['/posts', key]);
  }
}
