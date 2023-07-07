import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/models/Moment';
import { MessageService } from 'src/app/services/message.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {
  moment!: Moment;
  btn_text: string = 'Editar momento'
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private momentService: MomentService,
    private messageService: MessageService
  ) { }

  async editHandler(momentData: Moment){
    console.log('oi')
    let moment_id = this.moment.id;
    let formData = new FormData()

    formData.append('title', momentData.title);
    formData.append('description', momentData.description);
    
    if(momentData.image) formData.append('image', momentData.image);

    this.momentService.updateMoment(moment_id!, formData).subscribe();

    this.messageService.addMessage('Momento atualizado com sucesso!');

    this.router.navigate(['/']);

  }

  ngOnInit(): void {
    let moment_id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getMomentById(moment_id).subscribe((response_data) => {
      this.moment = response_data.data;
      console.log(this.moment)
    })


  }
}
