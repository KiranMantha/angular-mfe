import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@ui';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '',
        component: EntryComponent
      }
    ])
  ]
})
export class RemoteModule {}
