import { Component, Input } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { Moment } from 'src/app/models/Moment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent {
  @Input() moment!: Moment;
  public baseApiUrl = environment.baseApiUrl;
  
}
