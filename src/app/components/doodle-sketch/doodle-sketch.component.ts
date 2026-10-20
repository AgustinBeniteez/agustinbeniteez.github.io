import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doodle-sketch',
  standalone: true,
  templateUrl: './doodle-sketch.component.html',
  styleUrls: ['./doodle-sketch.component.css']
})
export class DoodleSketchComponent {
  @Input() type: 'king-hero' | 'dev-avatar' | 'valorantdle' | 'extension' | 'enma-shop' | 'melody' | 'wikimods' | 'coffee-cup' | 'compass' | 'shiro-eraser' = 'king-hero';
  @Input() size: 'sm' | 'md' | 'lg' | 'hero' = 'md';
  @Input() showLabel: boolean = true;
  @Input() customLabel: string = '';
}
