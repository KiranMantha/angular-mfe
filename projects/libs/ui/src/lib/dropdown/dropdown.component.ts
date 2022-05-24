import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { DropdownOption } from '../models';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent<T> {
  @ViewChild('detailsTag') detailsTag: ElementRef;
  @Input() options: DropdownOption<T>[];
  @Input() multiple: boolean;
  @Output() selectOption: EventEmitter<
    DropdownOption<string | T> | DropdownOption<string | T>[]
  > = new EventEmitter();

  selectedOption: DropdownOption<string | T>[] = [
    {
      label: 'Select',
      value: ''
    }
  ];

  constructor() {
    this.options = [];
    this.multiple = false;
  }

  select(option: DropdownOption<T>) {
    if (!this.multiple) {
      this.selectedOption = [option];
      this.selectOption.emit(this.selectedOption[0]);
      this.detailsTag.nativeElement.removeAttribute('open');
    } else {
      if (this.selectedOption[0].label === 'Select') this.selectedOption = [];
      this.selectedOption.push(option);
      this.selectOption.emit(this.selectedOption);
    }
  }
}
