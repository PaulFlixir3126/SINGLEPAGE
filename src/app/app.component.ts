import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SystemAccount {
  role?: string;
  username: string;
  password: string;
}

interface System {
  name: string;
  url: string;
  username: string;
  password: string;
  note?: string;
  notes?: string[];
  accounts?: SystemAccount[];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  systems: System[] = [];
  filteredSystems: System[] = [];
  searchText = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ systems: System[] }>('assets/systems.json').subscribe((data) => {
      this.systems = data.systems;
      this.filteredSystems = this.systems;
    });
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  onSearch(): void {
    const term = this.searchText.toLowerCase();
    this.filteredSystems = this.systems.filter(
      (s) =>
        s.name.toLowerCase().includes(term) ||
        (s.url && s.url.toLowerCase().includes(term)) ||
        (s.username && s.username.toLowerCase().includes(term))
    );
  }

  getIcon(name: string): string {
    if (name.toLowerCase().includes('hostel')) return 'home';
    if (name.toLowerCase().includes('quarters')) return 'apartment';
    if (name.toLowerCase().includes('moodle') || name.toLowerCase().includes('lms')) return 'school';
    if (name.toLowerCase().includes('dms')) return 'folder';
    if (name.toLowerCase().includes('fin')) return 'account_balance';
    if (name.toLowerCase().includes('hrms')) return 'badge';
    if (name.toLowerCase().includes('uat')) return 'cloud';
    if (name.toLowerCase().includes('database')) return 'storage';
    if (name.toLowerCase().includes('question')) return 'description';
    return 'apps';
  }

  getColorClass(name: string): string {
    const key = name.toLowerCase();
    if (key.includes('hostel')) return 'theme-hostel';
    if (key.includes('quarters')) return 'theme-quarters';
    if (key.includes('moodle')) return 'theme-lms';
    if (key.includes('dms')) return 'theme-dms';
    if (key.includes('fin')) return 'theme-fin';
    if (key.includes('hrms')) return 'theme-hrms';
    if (key.includes('uat')) return 'theme-uat';
    if (key.includes('database')) return 'theme-database';
    if (key.includes('question')) return 'theme-question';
    return 'theme-default';
  }
}
