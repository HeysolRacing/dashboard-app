import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Grade = 'A' | 'B' | 'F';
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public showGrade = signal<Grade>('A');
  
  public showFrameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public showFrameworks2 = signal(['Angular']);


  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
