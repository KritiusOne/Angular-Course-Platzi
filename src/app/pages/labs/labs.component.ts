import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-labs',
  imports: [RouterModule, CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = "Labs component"
  tasks = [
    'Tarea 1',
    'Tarea 2',
    'Tarea 3'
  ]
}
