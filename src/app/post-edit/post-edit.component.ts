import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { Post, PostService } from '../shared/';

@Component({
  moduleId: module.id,
  selector: 'app-post-edit',
  templateUrl: 'post-edit.component.html',
  styleUrls: ['post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  post: Post = null;

  constructor (
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit ( ) {
    this.route.params.subscribe((params) => {
      this.postService.getPost(params['key'])
        .then((post) => this.post = post);
    });
  }
}
