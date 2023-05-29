import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { MatrixTileComponent } from 'src/app/shared/components/matrix-tile/matrix-tile.component';
import { TruncatePipe } from 'src/app/shared/pipes/truncate/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [
    DashboardPage,
    MatrixTileComponent,
    TruncatePipe
  ]
})
export class DashboardPageModule {}
