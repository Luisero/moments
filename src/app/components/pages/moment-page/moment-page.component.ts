import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moment } from 'src/app/models/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/app/environments/environment';


@Component({
  selector: 'app-moment-page',
  templateUrl: './moment-page.component.html',
  styleUrls: ['./moment-page.component.css']
})
export class MomentPageComponent implements OnInit {
  moment_id!: number;
  moment!: Moment;

  public apiUrl: string = environment.baseApiUrl;

  constructor(
    private route: ActivatedRoute,
    private momentsService: MomentService
  ){

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
