import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './confirmDialog.component.html'
})
export class ConfirmDialogComponent {

    constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

    close() {
       this.dialogRef.close();
    }
}

