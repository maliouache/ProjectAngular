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
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ConnectedSiteHeaderComponent } from './connected-site-header/connected-site-header.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { LogInService} from './services/log-in.service';
import {AuthenGuard} from './authen.guard';
import {CookieService} from 'ngx-cookie-service';
import { ImageUploadModule } from "angular2-image-upload";

import { ItemListCatDirective } from './directives/item-list-cat.directive';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { DragAndDropComponent } from './directives/drag-and-drop/drag-and-drop.component';
import { ItemListCatComponent } from './directives/item-list-cat/item-list-cat.component';
import { ItemCatDirective } from './directives/item-cat.directive';
import { ItemCatComponent } from './directives/item-cat/item-cat.component';
import { AddUserService } from './services/add-user.service';
import { ItemListSearchComponent } from './components/item-list-search/item-list-search.component';
import { MySellsComponent } from './components/my-sells/my-sells.component';
import { NewSellFormComponent } from './components/new-sell-form/new-sell-form.component';
import { ShowCategoriesComponent } from './components/show-categories/show-categories.component';
import { AddProductService } from './services/add-product.service';
import { MyListSellsComponent } from './components/my-list-sells/my-list-sells.component';

const routes : Routes = [{
  path : 'Products/:marque', 
  component : ResearchComponent
  },
  {
  path : 'Users/:mail', 
  component : ApplicationFormComponent
  },
  {
  path : 'Detail/:id', 
  component : DetailComponent
  },
  {
    path: 'login-form',
    component : LoginFormComponent
  },
  {
    path: 'show-categories',
    component: ShowCategoriesComponent
  },
  {
    path: 'my-sells',
    component : MySellsComponent
  },
  {
    path: 'new-sell-form',
    component : NewSellFormComponent
  },
  {
    path: 'applicationForm',
    component: ApplicationFormComponent
  },
  {
    path: 'connected-site-header',
    canActivate: [AuthenGuard],
    component: ConnectedSiteHeaderComponent
  },
  {
    path: 'Owner/:owner',
    component: ResearchComponent
  }

];

  
@NgModule({
  declarations: [ AppComponent, ResearchComponent, DetailComponent, SiteHeaderComponent,ItemCatDirective,ItemCatComponent,ItemListCatComponent,DragAndDropComponent,DragAndDropDirective, ItemListCatDirective, SiteFooterComponent, LoginFormComponent, ConnectedSiteHeaderComponent, ApplicationFormComponent, ItemListSearchComponent, MySellsComponent, NewSellFormComponent, ShowCategoriesComponent, MyListSellsComponent ],
  imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [ResearchService, DetailService, AddProductService, HttpModule, LogInService, AuthenGuard, AddUserService, CookieService],
  bootstrap: [AppComponent],
  exports: [SiteHeaderComponent]
})
export class AppModule { }
  
  

