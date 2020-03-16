import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
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
    component: MigrationStrategyComponent
  },
  {
    path: "instParameter",
    component: InstParameterComponent
  },
  {
    path: "Alerts",
    component: AlertsComponent
  },
  {
    path: "LoadSurvey",
    component: LoadSurveyComponent
  },
  {
    path: "DailyProfile",
    component: DailyProfileComponent
  },
  {
    path: "Analytics",
    component: AnalyticsComponent
  }
];
@NgModule({
  declarations: [
    InstParameterComponent,
    AlertsComponent,
    LoadSurveyComponent,
    DailyProfileComponent,
    MigrationStrategyComponent,
    AnalyticsComponent
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class PageModule {}
