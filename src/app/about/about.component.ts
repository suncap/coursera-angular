import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';

import { LeaderService } from '../services/leader.service';
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
    this.leaderservice.getLeaders().subscribe(
      leaders => this.leaders = leaders
    );
  }

}
