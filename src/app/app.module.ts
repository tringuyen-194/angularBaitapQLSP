import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BaitapQlspModule } from "./baitap-qlsp/baitap-qlsp.module";
import { NgxPaginationModule } from "ngx-pagination";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BaitapQlspModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
