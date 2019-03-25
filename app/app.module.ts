import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import {RouterModule, Routes} from '@angular/router';
import { HelloFrameworkModule } from './hello-framework';
import { MyserviceService } from './myservice.service';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './filter.pipe';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ListComponent, FilterPipe],
  imports: [
    CoreModule,
    CommonModule,
    FormsModule,
    HelloFrameworkModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MyserviceService],
})
export class AppModule {}
