import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Passenger } from 'src/app/models/passenger.model';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss'],
})
export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input()
  detail!: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  editingMode: boolean = false;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: any): void {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  ngOnInit(): void {}

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleEditFuncttion() {
    if (this.editingMode) {
      this.edit.emit(this.detail);
    }
    this.editingMode = !this.editingMode;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
