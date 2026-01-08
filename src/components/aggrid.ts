import { Component, input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
    selector: 'agGrid',
    standalone: true,
    imports: [AgGridAngular], // Add Angular Data Grid Component
    //styleUrls: ['./app.component.css'],
    template: `
    <ag-grid-angular
        style="width: 100%; height: 500px;"
        [rowData]="rowData"
        [columnDefs]="colDefs"
        />
        `
})

// importCsv('../../dataset/data/disasters.csv')

export class agGridComponent {
    filepath = input<string>();

    modules = []; // Modules can be registered here if needed

    // Row Data: The data to be displayed.
    rowData = [
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ];
    //rowData=importCsv(this.filepath()).then(data => {return data});

    // Column Definitions: Defines the columns to be displayed.
    colDefs: ColDef[] = [
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ];
}

function importCsv(filepath: string | undefined) {
    // const dataText = filepath.split("\n");
    
    // const [headerLine, ...rows] = text.split('\n');
    // const headers = headerLine.split(',');

    // gridApi.setGridOption('rowData', rowData);
}