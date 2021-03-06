import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { LayoutComponent } from "./layout/layout.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [HeaderComponent, LayoutComponent]
})
export class NavigationModule {}
