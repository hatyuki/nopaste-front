import { Component }         from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MdIconRegistry }        from '@angular2-material/icon';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import { PostService } from './shared/';

@Component({
  moduleId: module.id,
  selector: 'no-paste-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    ROUTER_DIRECTIVES,
  ],
  providers: [
    MdIconRegistry,
    PostService,
  ]
})
export class AppComponent {
}
