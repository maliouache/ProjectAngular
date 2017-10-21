import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResearchComponent } from './research.component';
import { DetailComponent } from './detail.component';
import { ResearchService } from './research.service';
import { DetailService } from './detail.service';
import { Http, HttpModule } from '@angular/http';
<<<<<<< HEAD
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ConnectedSiteHeaderComponent } from './connected-site-header/connected-site-header.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ConnectionService} from './connection.service';
import {AuthenGuard} from './authen.guard';



=======
import { ItemListCatDirective } from './directives/item-list-cat.directive';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { DragAndDropComponent } from './directives/drag-and-drop/drag-and-drop.component';
import { ItemListCatComponent } from './directives/item-list-cat/item-list-cat.component';
import { ItemCatDirective } from './directives/item-cat.directive';
import { ItemCatComponent } from './directives/item-cat/item-cat.component';
>>>>>>> 80a344377fe7df3309df00f0767d9d6a0649c39c

const routes : Routes = [{
  path : 'Products/:marque', 
  component : ResearchComponent
  },
  {
  path : 'Detail/:id', 
  component : DetailComponent
<<<<<<< HEAD
  },
  {
    path: 'login-form',
    component : LoginFormComponent
  },
  {
    path: 'applicationForm',
    component: ApplicationFormComponent
  },
  {
    path: 'connected-site-header',
    canActivate: [AuthenGuard],
    component: ConnectedSiteHeaderComponent
  }

];

  
@NgModule({
  declarations: [ AppComponent, ResearchComponent, DetailComponent, SiteHeaderComponent, SiteFooterComponent, LoginFormComponent, ConnectedSiteHeaderComponent, ApplicationFormComponent ],
  imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [ResearchService, DetailService, HttpModule, ConnectionService, AuthenGuard ],
  bootstrap: [AppComponent],
  exports: [SiteHeaderComponent]
})
export class AppModule { }
=======
  }
];
  
@NgModule({
  declarations: [ AppComponent, ResearchComponent, DetailComponent, ItemListCatDirective, DragAndDropDirective, DragAndDropComponent, ItemListCatComponent, ItemCatDirective, ItemCatComponent ],
  imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [ResearchService, DetailService, HttpModule ],
  bootstrap: [AppComponent]
  
  
})
export class AppModule {  }
>>>>>>> 80a344377fe7df3309df00f0767d9d6a0649c39c
