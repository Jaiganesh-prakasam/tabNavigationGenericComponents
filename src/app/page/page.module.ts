import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { GenericModule } from "../generic/generic.module";
import { FusionChartsModule } from "angular-fusioncharts";

import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as Widgets from "fusioncharts/fusioncharts.widgets";

import { InstParameterComponent } from "./inst-parameter/inst-parameter.component";
import { AlertsComponent } from "./alerts/alerts.component";
import { LoadSurveyComponent } from "./load-survey/load-survey.component";
import { DailyProfileComponent } from "./daily-profile/daily-profile.component";
import { MigrationStrategyComponent } from "./migration-strategy/migration-strategy.component";
import { AnalyticsComponent } from "./analytics/analytics.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "migrationStrategy",
    pathMatch: "full"
  },
  {
    path: "migrationStrategy",
    component: MigrationStrategyComponent,
    pathMatch: "full"
  },
  {
    path: "instParameter",
    component: InstParameterComponent,
    pathMatch: "full"
  },
  {
    path: "Alerts",
    component: AlertsComponent,
    pathMatch: "full"
  },
  {
    path: "LoadSurvey",
    component: LoadSurveyComponent,
    pathMatch: "full"
  },
  {
    path: "DailyProfile",
    component: DailyProfileComponent,
    pathMatch: "full"
  },
  {
    path: "Analytics",
    component: AnalyticsComponent,
    pathMatch: "full"
  }
];

FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);
@NgModule({
  declarations: [
    InstParameterComponent,
    AlertsComponent,
    LoadSurveyComponent,
    DailyProfileComponent,
    MigrationStrategyComponent,
    AnalyticsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FlexLayoutModule,
    GenericModule,
    FusionChartsModule
  ],
  exports: [RouterModule]
})
export class PageModule {}
