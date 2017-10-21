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
import { ItemListCatDirective } from './directives/item-list-cat.directive';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { DragAndDropComponent } from './directives/drag-and-drop/drag-and-drop.component';
import { ItemListCatComponent } from './directives/item-list-cat/item-list-cat.component';
import { ItemCatDirective } from './directives/item-cat.directive';
import { ItemCatComponent } from './directives/item-cat/item-cat.component';

const routes : Routes = [{
  path : 'Products/:marque', 
  component : ResearchComponent
  },
  {
  path : 'Detail/:id', 
  component : DetailComponent
  }
];
  
@NgModule({
  declarations: [ AppComponent, ResearchComponent, DetailComponent, ItemListCatDirective, DragAndDropDirective, DragAndDropComponent, ItemListCatComponent, ItemCatDirective, ItemCatComponent ],
  imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [ResearchService, DetailService, HttpModule ],
  bootstrap: [AppComponent]
  
  
})
export class AppModule {  }
