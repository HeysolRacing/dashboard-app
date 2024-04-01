import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './heavy-loaders-slow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersSlowComponent { 

  @Input({ required:true }) cssClass!: string; // Using definite assignment assertion

  constructor(){
    console.log('HeavyLoader Component Loaded')

    const start = Date.now();
    while ( Date.now() - start < 1000){

    }
  }

}
