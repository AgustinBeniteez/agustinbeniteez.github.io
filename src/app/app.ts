import { Component, computed, signal, HostListener, OnInit } from '@angular/core';
import { DEVELOPER_PROFILE, EDUCATION_DATA, PROJECTS_DATA, SKILL_CATEGORIES } from './data/portfolio.data';
import { Project } from './models/project.model';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { SoundService } from './services/sound.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectModalComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  // Data
  readonly profile = DEVELOPER_PROFILE;
  readonly allProjects = PROJECTS_DATA;
  readonly skillCategories = SKILL_CATEGORIES;
  readonly educationList = EDUCATION_DATA;

  // State Signals
  readonly portfolioMode = signal<'web' | 'game'>('web');
  readonly selectedProject = signal<Project | null>(null);
  readonly activeTab = signal<'all' | 'game' | 'web' | 'tools' | 'about'>('all');
  
  // Interactive Mouse Parallax & Title Overflow Animation
  readonly mouseX = signal<number>(0);
  readonly mouseY = signal<number>(0);
  readonly scrollY = signal<number>(0);

  // Active Tool in Figma Toolbar
  readonly activeTool = signal<'cursor' | 'frame' | 'pen' | 'text' | 'hand' | 'code'>('cursor');

  constructor(public sound: SoundService) {}

  ngOnInit(): void {
    // Initial setup
  }

  // Web Projects (Only web projects, tools and extensions - game is exclusive to Modo Juegos)
  readonly webProjects = computed(() => {
    const tab = this.activeTab();
    const allWeb = this.allProjects.filter(p => p.id !== 'arch-origins-of-a-king');
    if (tab === 'all') return allWeb;
    if (tab === 'web') return allWeb.filter(p => p.category === 'web');
    if (tab === 'tools') return allWeb.filter(p => p.category === 'extension' || p.category === 'tool');
    return allWeb;
  });

  // Featured Game Project ("Arch Origins Of A King") - Used exclusively in Game Mode
  readonly featuredGame = computed(() => {
    return this.allProjects.find(p => p.id === 'arch-origins-of-a-king') || this.allProjects[0];
  });

  // Backward-compatible alias for template
  readonly otherProjects = computed(() => {
    return this.webProjects();
  });

  // Navigation & Project Modal
  openProject(project: Project): void {
    this.sound.playPaperFlip();
    this.selectedProject.set(project);
  }

  closeProject(): void {
    this.sound.playPaperFlip();
    this.selectedProject.set(null);
  }

  setPortfolioMode(mode: 'web' | 'game'): void {
    this.sound.playPaperFlip();
    this.portfolioMode.set(mode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setTab(tab: 'all' | 'game' | 'web' | 'tools' | 'about'): void {
    this.sound.playChime();
    this.activeTab.set(tab);
  }

  setTool(tool: 'cursor' | 'frame' | 'pen' | 'text' | 'hand' | 'code'): void {
    this.sound.playChime();
    this.activeTool.set(tool);
  }

  scrollToSection(id: string): void {
    this.sound.playChime();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTrailer(): void {
    this.sound.playChime();
    const el = document.getElementById('arch-trailer-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    const normX = (e.clientX / window.innerWidth) * 2 - 1;
    const normY = (e.clientY / window.innerHeight) * 2 - 1;
    this.mouseX.set(normX);
    this.mouseY.set(normY);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrollY.set(window.scrollY);
  }
}
