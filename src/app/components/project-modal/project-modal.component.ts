import { Component, EventEmitter, Input, Output, HostListener, OnInit, OnChanges, SimpleChanges, inject } from '@angular/core';
import { Project } from '../../models/project.model';
import { SoundService } from '../../services/sound.service';
import { DoodleSketchComponent } from '../doodle-sketch/doodle-sketch.component';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [DoodleSketchComponent],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit, OnChanges {
  @Input({ required: true }) project!: Project;
  @Output() close = new EventEmitter<void>();

  public sound = inject(SoundService);

  activeTab: 'overview' | 'lore' | 'tech' | 'sketch' = 'overview';
  selectedImage: string = '';

  ngOnInit(): void {
    this.resetImage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project']) {
      this.resetImage();
      this.activeTab = 'overview';
    }
  }

  private resetImage(): void {
    this.selectedImage = this.project?.image || (this.galleryImages[0] ?? '');
  }

  get galleryImages(): string[] {
    const list: string[] = [];
    if (this.project?.image) {
      list.push(this.project.image);
    }
    if (this.project?.gallery && Array.isArray(this.project.gallery)) {
      for (const img of this.project.gallery) {
        if (!list.includes(img)) {
          list.push(img);
        }
      }
    }
    return list;
  }

  @HostListener('window:keydown.escape')
  handleEscape(): void {
    this.closeModal();
  }

  setTab(tab: 'overview' | 'lore' | 'tech' | 'sketch'): void {
    this.sound.playChime();
    this.activeTab = tab;
  }

  selectImage(img: string): void {
    this.sound.playChime();
    this.selectedImage = img;
  }

  closeModal(): void {
    this.sound.playPaperFlip();
    this.close.emit();
  }
}
