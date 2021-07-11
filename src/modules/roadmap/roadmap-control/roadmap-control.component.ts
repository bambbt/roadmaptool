import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-roadmap-control',
  templateUrl: './roadmap-control.component.html',
  styleUrls: ['./roadmap-control.component.css']
})
export class RoadmapControlComponent implements OnInit, OnDestroy {
  addThemeForm = new FormGroup({
    themeName: new FormControl('', [Validators.maxLength(15), Validators.minLength(1)])
  });

  addTaskForm = new FormGroup({
    themeName: new FormControl(''),
    taskName: new FormControl('', [Validators.maxLength(15)])
  });

  private addThemeEventEmitter: EventEmitter<string>;
  private addTaskEventEmitter: EventEmitter<any>;

  constructor() {
    this.addThemeEventEmitter = new EventEmitter<string>();
    this.addTaskEventEmitter = new EventEmitter<any>();
  }

  get themeName() {
    return this.addThemeForm.get('themeName');
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.addThemeEventEmitter.unsubscribe();
    this.addTaskEventEmitter.unsubscribe();
  }

  addTheme() {
    this.addThemeEventEmitter.emit(this.themeName.value);
    this.themeName.setValue('');
  }

  addTask() {
    window.alert('Add task');
  }
}
