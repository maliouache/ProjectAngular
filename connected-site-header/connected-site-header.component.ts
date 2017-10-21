import { Component, OnInit } from '@angular/core';
import {ConnectionService} from '../connection.service';

@Component({
  selector: 'app-connected-site-header',
  templateUrl: './connected-site-header.component.html',
  styleUrls: ['./connected-site-header.component.css']
})
export class ConnectedSiteHeaderComponent implements OnInit {

  constructor( private user: ConnectionService) { }

  ngOnInit() {
  }

}
