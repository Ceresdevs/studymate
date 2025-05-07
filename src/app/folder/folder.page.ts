import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: false,
})
export class FolderPage implements OnInit {
  public folder!: string;

  // Icon map for each folder
  public folderIcons: { [key: string]: string } = {
    dashboard: 'grid',
    task: 'reader',
    subjects: 'book',
    analytics: 'bar-chart',
    ai: 'sparkles',
    profile: 'person',
  };

  private activatedRoute = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
