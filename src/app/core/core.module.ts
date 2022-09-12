import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalStorageService } from './services/storage/local-storage.service';
import { StorageService } from "./services/storage/storage.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: StorageService, useClass: LocalStorageService},
  ]
})
export class CoreModule { }
