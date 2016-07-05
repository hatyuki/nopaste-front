import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MD_BUTTON_DIRECTIVES }  from '@angular2-material/button';
import { MD_CARD_DIRECTIVES }    from '@angular2-material/card';
import { MD_ICON_DIRECTIVES }    from '@angular2-material/icon';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import { Post, PostService, MarkdownPipe } from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'post-detail',
  templateUrl: 'post-detail.component.html',
  styleUrls: ['post-detail.component.css'],
  directives: [
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
  ],
  pipes: [
    MarkdownPipe,
  ]
})
export class PostDetailComponent implements OnInit {
  post: Post = null;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit ( ) {
    this.route.params.subscribe((params) => {
      this.postService.getPost(params['key'])
        .then((post) => this.post = post);
    });
  }

  gotoEdit ( ) {
    this.router.navigate(['/posts', this.post.key, '/edit']);
  }
}
