import { Component, OnInit } from '@angular/core';
import {LogInService} from '../services/log-in.service';

@Component({
  selector: 'app-connected-site-header',
  templateUrl: './connected-site-header.component.html',
  styleUrls: ['./connected-site-header.component.css']
})
export class ConnectedSiteHeaderComponent implements OnInit {

  constructor( private user: LogInService) { }

  ngOnInit() {
  }

}
