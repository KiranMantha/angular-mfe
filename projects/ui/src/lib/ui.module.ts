import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { UiService } from './ui.service';

@NgModule({
  declarations: [HeaderComponent, MainComponent, DropdownComponent],
  imports: [CommonModule, RouterModule],
  providers: [UiService],
  exports: [HeaderComponent, MainComponent, DropdownComponent]
})
export class UiModule {}
