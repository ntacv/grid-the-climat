import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
// AG Grid 
import { ModuleRegistry } from 'ag-grid-community'; 
import {ClientSideRowModelModule} from 'ag-grid-community';

// Register all Community features
ModuleRegistry.registerModules([ClientSideRowModelModule]);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
