import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES }   from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES }  from '@angular2-material/input';

import { Post, PostService } from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'app-post-edit',
  templateUrl: 'post-edit.component.html',
  styleUrls: ['post-edit.component.css'],
  directives: [
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
  ]
})
export class PostEditComponent implements OnInit {
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

  save ( ) {
    this.router.navigate(['/posts', this.post.key]);
  }

  gotoDetail ( ) {
    this.router.navigate(['/posts', this.post.key]);
  }
}
