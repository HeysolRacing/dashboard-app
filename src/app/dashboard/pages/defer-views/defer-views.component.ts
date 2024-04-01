import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html'
})
export default class DeferViewsComponent {
  public currentTitle = computed(() => `Defer Views / Blocks`
  );
}
