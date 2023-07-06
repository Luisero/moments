import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Moment } from 'src/app/models/Moment';
import { Response } from 'src/app/models/Response';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  constructor(
    private momentsService: MomentService
  ){}


  ngOnInit(): void {
    this.momentsService.getAllMoments().subscribe((items: Response<Moment[]>)=>{
      const momentsData = items.data;

      momentsData.map((item: Moment)=>{
        item.created_at = new Date(item.created_at!).toLocaleDateString("pt-BR");

      })

      this.allMoments = momentsData;
      this.moments = momentsData;
      console.log(this.allMoments)

    });
  }
}
