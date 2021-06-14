import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components.component";
import { Nav2Component } from "./nav2/nav2.component";

@NgModule({
  declarations: [Nav2Component],
  imports: [BrowserAnimationsModule, NgbModule, FormsModule, RouterModule],
  providers: [],
  bootstrap: [ComponentsComponent],
})
export class ComponentModule {}
