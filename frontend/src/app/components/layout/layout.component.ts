import {Component, OnInit} from '@angular/core';
import {EventEmitterService} from '../../services/event-emitter.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public mainTitle: string;
  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
    this.eventEmitterService.updatedTitleValue.subscribe((title: string) => {
      this.mainTitle = title;
    });
   }
}
