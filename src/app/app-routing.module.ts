import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageModule } from "./page/page.module";

const routes: Routes = [
  {
    path: "page",
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  { path: "", redirectTo: "page", pathMatch: "full" },
  { path: "**", redirectTo: "page", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
