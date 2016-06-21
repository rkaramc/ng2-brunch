import './vendor';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {AppComponent} from './app.component';

import { APP_ROUTER_PROVIDERS } from './app.route';
/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {
  bootstrap(AppComponent, [
    ...HTTP_PROVIDERS,
    ...APP_ROUTER_PROVIDERS,
  ])
  .catch(err => console.error(err));
});
