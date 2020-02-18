import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ModalService } from "./modal.service";
import { ModalComponent } from "./modal.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ModalComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [ModalService],
  exports: [ModalComponent]
})
export class ModalModule {}
