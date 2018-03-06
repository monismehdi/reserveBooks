import { NgModule } from '@angular/core';
import { FooterComponent } from  './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
