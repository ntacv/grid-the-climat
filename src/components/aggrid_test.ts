import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
    selector: 'agGrid',
    standalone: true,
    imports: [AgGridAngular], // Add Angular Data Grid Component
    //styleUrls: ['./app.component.css'],
    template: `
    <input type="file" (change)="onFileSelected($event)" accept=".csv" />
    <ag-grid-angular
        style="width: 100%; height: 500px;"
        [rowData]="rowData"
        [columnDefs]="colDefs"
    />
    `
})

// importCsv('../../dataset/data/disasters.csv')

    rowData: any[] = [];
    colDefs: ColDef[] = [];

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (!input.files || input.files.length === 0) return;
        const file = input.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target?.result as string;
            const { rowData, colDefs } = parseCsvAndColDefs(text);
            this.rowData = rowData;
            this.colDefs = colDefs;
        };
        reader.readAsText(file);
    }
}

function parseCsvAndColDefs(csv: string): { rowData: any[], colDefs: ColDef[] } {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const colDefs = headers.map(header => ({ field: header }));
    const rowData = lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
        const obj: any = {};
        headers.forEach((header, i) => {
            obj[header] = values[i];
        });
        return obj;
    });
    return { rowData, colDefs };
}

function parseCsv(csv: string): any[] {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    return lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
        const obj: any = {};
        headers.forEach((header, i) => {
            obj[header] = values[i];
        });
        return obj;
    });
}