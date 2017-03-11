import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Carmel';
    config.map([
      { route: '', moduleId: 'views/index', title: 'Home Page' }
    ]);

    this.router = router;
  }
}
