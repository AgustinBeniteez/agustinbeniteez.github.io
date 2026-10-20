import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { Project } from '../../models/project.model';
import { DoodleSketchComponent } from '../doodle-sketch/doodle-sketch.component';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [DoodleSketchComponent],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  @Input({ required: true }) project!: Project;
  @Output() close = new EventEmitter<void>();

  activeTab: 'overview' | 'lore' | 'tech' | 'sketch' = 'overview';

  @HostListener('window:keydown.escape')
  handleEscape(): void {
    this.closeModal();
  }

  setTab(tab: 'overview' | 'lore' | 'tech' | 'sketch'): void {
    this.activeTab = tab;
  }

  closeModal(): void {
    this.close.emit();
  }
}
