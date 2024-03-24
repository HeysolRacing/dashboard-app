import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { timeout } from 'rxjs';

@Component({
  standalone: true,
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css',
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };
  constructor() {
    setTimeout(() => {
      //Traditional implementation 
      //this.frameworkAsProperty.name = 'React'
      
      // This is activated through OnPush of the changedetection class
      // this.frameworkAsSignal.update( value => ({
      //   ...value,
      //   name: 'React'
      // }))
      
      //Angular is less concerned with changes and lets signals interact. 
      //This improves speed and performance
      this.frameworkAsSignal.update((value) => {
        value.name = 'React';

        return { ...value };
      });

      console.log('executed');
    }, 3000);
  }
}
