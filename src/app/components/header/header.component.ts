import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  template: ` <header class="p-2 bg-black/10">
    <a href="/" class="flex items-center max-w-fit gap-1 font-semibold">
      <img src="../../../assets/logo.svg" alt="fairhouse" />Fairhouse
    </a>
  </header>`,
})
export class HeaderComponent {}
