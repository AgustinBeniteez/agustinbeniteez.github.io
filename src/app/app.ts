import { Component, computed, signal, OnInit, OnDestroy, inject, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { DEVELOPER_PROFILE, EDUCATION_DATA, PROJECTS_DATA, SKILL_CATEGORIES } from './data/portfolio.data';
import { Project } from './models/project.model';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { SoundService } from './services/sound.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectModalComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnInit, OnDestroy {
  // Data
  readonly profile = DEVELOPER_PROFILE;
  readonly allProjects = PROJECTS_DATA;
  readonly skillCategories = SKILL_CATEGORIES;
  readonly educationList = EDUCATION_DATA;

  // State Signals
  readonly portfolioMode = signal<'web' | 'game'>('web');
  readonly selectedProject = signal<Project | null>(null);
  readonly activeTab = signal<'all' | 'game' | 'web' | 'tools' | 'about'>('all');

  // Active Tool in Figma Toolbar
  readonly activeTool = signal<'cursor' | 'frame' | 'pen' | 'text' | 'hand' | 'code'>('cursor');

  public sound = inject(SoundService);
  private ngZone = inject(NgZone);

  private cleanupListeners?: () => void;

  ngOnInit(): void {
    // Parallax mouse and scroll running outside Angular zone
    // to prevent triggering Change Detection and Layout Thrashing on high-frequency events
    this.ngZone.runOutsideAngular(() => {
      let mouseFrameId: number | null = null;
      let scrollFrameId: number | null = null;
      let targetX = 0;
      let targetY = 0;
      const root = document.documentElement;

      const handleMove = (e: MouseEvent) => {
        targetX = (e.clientX / window.innerWidth) * 2 - 1;
        targetY = (e.clientY / window.innerHeight) * 2 - 1;
        if (mouseFrameId === null) {
          mouseFrameId = requestAnimationFrame(() => {
            root.style.setProperty('--mouse-x', targetX.toFixed(3));
            root.style.setProperty('--mouse-y', targetY.toFixed(3));
            mouseFrameId = null;
          });
        }
      };

      const handleScroll = () => {
        if (scrollFrameId === null) {
          scrollFrameId = requestAnimationFrame(() => {
            root.style.setProperty('--scroll-y', window.scrollY.toFixed(1));
            scrollFrameId = null;
          });
        }
      };

      window.addEventListener('mousemove', handleMove, { passive: true });
      window.addEventListener('scroll', handleScroll, { passive: true });

      this.cleanupListeners = () => {
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('scroll', handleScroll);
        if (mouseFrameId !== null) cancelAnimationFrame(mouseFrameId);
        if (scrollFrameId !== null) cancelAnimationFrame(scrollFrameId);
      };
    });
  }

  ngOnDestroy(): void {
    this.cleanupListeners?.();
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
}
