import { customAttribute, bindable, inject } from 'aurelia-framework';

@customAttribute('side-bar-toggle')
@inject(Element)
export class SideBarToggle {
  @bindable() sidebarRef: Element;
  @bindable() wrapperRef: Element;

  constructor(private element: Element) {
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  attached() {
    this.element.addEventListener('click', this.toggleSidebar);
  }

  detached() {
    this.element.removeEventListener('click', this.toggleSidebar);
  }

  toggleSidebar() {
    const icon = this.element.querySelector('i.fa');
    this.sidebarRef.classList.toggle('hide-sidebar');
    this.wrapperRef.classList.toggle('hide-sidebar');
    if (this.sidebarRef.classList.contains('hide-sidebar')) {
      icon.classList.remove('fa-angle-left');
      icon.classList.add('fa-angle-right');
    } else {
      icon.classList.remove('fa-angle-right');
      icon.classList.add('fa-angle-left');
    }
  }
}
