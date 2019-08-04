import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination"; // <-- import the module
import { BaitapQlspComponent } from "./baitap-qlsp.component";

@NgModule({
  declarations: [BaitapQlspComponent],
  exports: [BaitapQlspComponent],
  imports: [CommonModule, NgxPaginationModule]
})
export class BaitapQlspModule {}
