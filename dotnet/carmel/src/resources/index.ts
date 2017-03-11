import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    './attributes/side-bar-toggle',
    './elements/side-bar.html'
  ]);
}
