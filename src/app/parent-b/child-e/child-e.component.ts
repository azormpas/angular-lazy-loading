import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-child-e',
  templateUrl: './child-e.component.html',
  styleUrls: ['./child-e.component.scss']
})
export class ChildEComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // We prefer to use snapshot rather than subscribe to paramMap because we do not update our url value
    this.activatedRoute.snapshot.paramMap.get('id');
  }

}
