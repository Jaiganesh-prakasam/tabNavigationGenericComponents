import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeyValueComponent } from "./key-value/key-value.component";
import { KeyInputUnitComponent } from "./key-input-unit/key-input-unit.component";
import { KeyHvLvComponent } from "./key-hv-lv/key-hv-lv.component";
import { RybListComponent } from "./ryb-list/ryb-list.component";
import { RybGridComponent } from "./ryb-grid/ryb-grid.component";
import { OilLevelChartComponent } from "./oil-level-chart/oil-level-chart.component";
import { GenericPagesComponent } from './generic-pages/generic-pages.component';

@NgModule({
  declarations: [
    KeyValueComponent,
    KeyInputUnitComponent,
    KeyHvLvComponent,
    RybListComponent,
    RybGridComponent,
    OilLevelChartComponent,
    GenericPagesComponent
  ],
  imports: [CommonModule],
  exports: [
    KeyValueComponent,
    KeyInputUnitComponent,
    KeyHvLvComponent,
    RybListComponent,
    RybGridComponent,
    OilLevelChartComponent,
    GenericPagesComponent
  ]
})
export class GenericModule {}
