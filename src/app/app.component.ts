import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/dashboard', icon: 'home' },
    { title: 'Task', url: '/folder/task', icon: 'reader' },
    { title: 'Analytics', url: '/folder/analytics', icon: 'pulse' },
    // { title: 'Analytics', url: '/folder/archived', icon: 'archive' },
    { title: 'AI Assistant', url: '/folder/ai', icon: 'sparkles' },
    { title: 'Profile', url: '/folder/profile', icon: 'person' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
