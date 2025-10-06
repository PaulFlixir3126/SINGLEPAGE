// src/app/project-details-dialog/project-details-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-details-dialog',
  templateUrl: './project-details-dialog.component.html',
  styleUrls: ['./project-details-dialog.component.scss']
})
export class ProjectDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {}

  // Function to copy text to clipboard
  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard!');
      // You can add a small notification/toast here if you like
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
}