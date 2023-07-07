import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/models/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/app/environments/environment';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Coment } from 'src/app/models/Coment';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-moment-page',
  templateUrl: './moment-page.component.html',
  styleUrls: ['./moment-page.component.css']
})
export class MomentPageComponent implements OnInit {
  moment_id!: number;
  moment!: Moment;
  coments: Coment[] = [];
  faEdit = faEdit;
  faTimes = faTimes;

  public apiUrl: string = environment.baseApiUrl;

  constructor(
    private route: ActivatedRoute,
    private momentsService: MomentService,
    private messagService: MessageService,
    private router: Router
  ){

  }
  
  removeHandler(moment_id: number): void {
    try{

      this.momentsService.removeMomentById(moment_id).subscribe()
      this.messagService.addMessage("Momento excluido com sucesso!")
    }
    catch(e){
      this.messagService.addMessage("Não foi possível excluir esse registro.")
    }

    this.router.navigate(["/"]);
  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.moment_id = params['id'];
      
    });
      this.momentsService.getMomentById(this.moment_id).subscribe((response_paramns)=>{
        this.moment = response_paramns.data;
      });

  }
}
