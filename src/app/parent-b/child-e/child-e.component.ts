import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-child-e',
  templateUrl: './child-e.component.html',
  styleUrls: ['./child-e.component.scss']
})
export class ChildEComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('id'));
    });
  }

  ngOnInit(): void {

  }

}
