import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AdminModule } from "./admin/admin.module";
import { FrontendModule } from "./frontend/frontend.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AdminModule, FrontendModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
