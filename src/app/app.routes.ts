import { provideRouter, RouterConfig } from '@angular/router';

import { PostDetailComponent }  from './post-detail';
import { PostEditComponent }    from './post-edit/';
import { RecentPostsComponent } from './recent-posts/';

export const routes: RouterConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'recent-posts',
  },
  {
    path: 'recent-posts',
    component: RecentPostsComponent,
  },
  {
    path: 'posts/:key',
    component: PostDetailComponent,
  },
  {
    path: 'posts/:key/edit',
    component: PostEditComponent,
  },
  {
    path: '**',
    redirectTo: 'recent-posts',
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
