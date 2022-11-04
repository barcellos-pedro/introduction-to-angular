import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-searchbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <form
        (submit)="searchLocations(search.value, $event)"
        class="flex flex-col gap-2 items-start"
      >
        <label class="text-sm text-zinc-500" for="search"
          >Search for a new place</label
        >
        <div class="flex">
          <input
            #search
            class="p-1 outline-none border border-black border-t-0 border-l-0 border-r-0"
            type="text"
            id="search"
            name="search"
          />
          <button
            (click)="searchLocations(search.value)"
            class="bg-blue-500 text-white px-5 py-2"
            type="button"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  `,
})
export class SearchbarComponent {
  @Output() search = new EventEmitter<string>();

  searchLocations(searchText: string, event?: any) {
    if (event) event.preventDefault();
    this.search.emit(searchText.trim());
  }
}
