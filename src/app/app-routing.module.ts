import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {} from "./page/page.module";

const routes: Routes = [
  { path: "", redirectTo: "page", pathMatch: "full" },
  {
    path: "page",
    loadChildren: "./page/page.module#PageModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
