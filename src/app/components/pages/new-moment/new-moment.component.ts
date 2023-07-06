import { Component } from '@angular/core';
import { Moment } from 'src/app/models/Moment';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  btnText: string = 'Compartilhar';

  constructor(private momentService: MomentService){}

  async createHandler(moment: Moment){
    const formData: FormData = new FormData();

    formData.append('title', moment.description);
    formData.append('description',moment.description);

    if(moment.image){
      formData.append('image',moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    //TODO
    
  }
}
