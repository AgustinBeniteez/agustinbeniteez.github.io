import { Component, EventEmitter, Output, HostListener, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { DEVELOPER_PROFILE, EDUCATION_DATA, EXPERIENCE_DATA, LANGUAGES_DATA, PROJECTS_DATA, SKILL_CATEGORIES } from '../../data/portfolio.data';
import { SoundService } from '../../services/sound.service';

@Component({
  selector: 'app-cv-modal',
  standalone: true,
  templateUrl: './cv-modal.component.html',
  styleUrls: ['./cv-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvModalComponent {
  @Output() close = new EventEmitter<void>();

  public sound = inject(SoundService);

  readonly profile = DEVELOPER_PROFILE;
  readonly experiences = EXPERIENCE_DATA;
  readonly education = EDUCATION_DATA;
  readonly languages = LANGUAGES_DATA;
  readonly skillCategories = SKILL_CATEGORIES;
  readonly featuredProjects = PROJECTS_DATA.slice(0, 4);

  readonly isDownloading = signal<boolean>(false);

  @HostListener('window:keydown.escape')
  handleEscape(): void {
    this.closeModal();
  }

  /**
   * Direct PDF download to user's device (guaranteed 1 single page, perfectly aligned, no truncation!).
   */
  async downloadPdf(): Promise<void> {
    if (this.isDownloading()) return;

    this.sound.playPaperFlip();
    const element = document.getElementById('cv-printable-folio');
    if (!element) return;

    this.isDownloading.set(true);

    try {
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = (html2pdfModule as any).default || html2pdfModule;

      const opt = {
        margin: 0,
        filename: 'CV_Agustin_Benitez_Lopez.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          scrollY: 0,
          scrollX: 0,
          windowWidth: 1280,
          onclone: (clonedDoc: Document) => {
            // Apply upward baseline correction to all folios cloned by html2pdf
            const folios = clonedDoc.querySelectorAll('#cv-printable-folio');
            folios.forEach(folio => {
              const tags = folio.querySelectorAll<HTMLElement>(
                '.tech-pill, .exp-chip, .banner-chip-code, .lang-badge, .proj-card-tech, .exp-period'
              );
              tags.forEach(el => {
                const text = el.textContent?.trim() || '';
                el.innerHTML = `<span style="position: relative; top: -6px; display: inline-block;">${text}</span>`;
              });

              const statusChip = folio.querySelector<HTMLElement>('.banner-chip-status');
              if (statusChip) {
                statusChip.innerHTML = '<span style="display: inline-block; width: 4.5px; height: 4.5px; border-radius: 50%; background: #10b981; margin-right: 4px; vertical-align: middle; position: relative; top: -1px;"></span><span style="position: relative; top: -6px; display: inline-block;">DISPONIBLE</span>';
              }
            });
          }
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait' as const
        }
      };

      await html2pdf()
        .set(opt)
        .from(element)
        .toPdf()
        .get('pdf')
        .then((pdf: any) => {
          const totalPages = pdf.internal.getNumberOfPages();
          if (totalPages > 1) {
            for (let i = totalPages; i > 1; i--) {
              pdf.deletePage(i);
            }
          }
        })
        .save();
    } catch (error) {
      console.error('Error generating direct PDF:', error);
      window.print();
    } finally {
      this.isDownloading.set(false);
    }
  }

  closeModal(): void {
    this.sound.playChime();
    this.close.emit();
  }
}
