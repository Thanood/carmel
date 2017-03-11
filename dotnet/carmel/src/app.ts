declare var $: any;

export class App {
  message = 'Hello World!';
  sidebar: Element;
  sidebarToggle: HTMLButtonElement;
  wrapper: Element;

  attached() { }

  toggleSidebar() {
    const icon = this.sidebarToggle.querySelector('i.fa');
    this.sidebar.classList.toggle('hide-sidebar');
    this.wrapper.classList.toggle('hide-sidebar');
    if (this.sidebar.classList.contains('hide-sidebar')) {
      icon.classList.remove('fa-angle-left');
      icon.classList.add('fa-angle-right');
    } else {
      icon.classList.remove('fa-angle-right');
      icon.classList.add('fa-angle-left');
    }
  }
}
