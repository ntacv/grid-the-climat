import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { agGridComponent } from '../components/aggrid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, agGridComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ag-grid');
}
