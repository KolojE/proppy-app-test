import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { ContactPage } from 'src/app/Views/contact.page';

const routes: Routes = [
  {
    path:'',
    component:TabsComponent,
    children:[
      {
        path:'contact',
        loadChildren: () => import('../../Views/contact.module').then(m => m.ContactPageModule)
      },
      {
        path:'**',
        redirectTo:'contact',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
