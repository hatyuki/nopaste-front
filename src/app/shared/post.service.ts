import { Injectable } from '@angular/core';

import { POSTS, Post } from './post'

@Injectable( )
export class PostService {
  constructor ( ) { }

  getPosts ( ): Promise<Post[ ]> {
    return Promise.resolve(POSTS);
  }

  getPost (key: string): Promise<Post> {
    return this.getPosts( )
      .then((posts) => posts.filter((post) => post.key === key)[0]);
  }
}
