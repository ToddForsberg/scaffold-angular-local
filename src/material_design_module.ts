import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MdButtonModule, MdIconModule, MdListModule, MdRadioModule, MdSelectModule, MdTabsModule} from '@angular/material';

/**
 * Common collection of Material Design modules used throughout the app.
 * Also includes common Angular modules which are dependancies.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdRadioModule,
    MdListModule,
    MdSelectModule,
    MdIconModule,
    MdTabsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdRadioModule,
    MdListModule,
    MdSelectModule,
    MdIconModule,
    MdTabsModule,
  ],
})
export class MaterialDesignModule {
}
