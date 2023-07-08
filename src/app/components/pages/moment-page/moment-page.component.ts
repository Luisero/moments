import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/models/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/app/environments/environment';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Comment } from 'src/app/models/Comment';
import { MessageService } from 'src/app/services/message.service';
import {CommentsService} from "../../../services/comments.service";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-moment-page',
  templateUrl: './moment-page.component.html',
  styleUrls: ['./moment-page.component.css']
})
export class MomentPageComponent implements OnInit {
  moment_id!: number;
  momment!: Moment;

  faEdit = faEdit;
  faTimes = faTimes;

  commentForm!: FormGroup;

  public apiUrl: string = environment.baseApiUrl;

  get text(){
    return this.commentForm.get('text')!;
  }

  get username(){
    return this.commentForm.get('username')!;
  }

  constructor(
    private route: ActivatedRoute,
    private momentsService: MomentService,
    private messageService: MessageService,
    private commentsService: CommentsService,
    private router: Router
  ){

  }

  removeHandler(moment_id: number): void {
    try{

      this.momentsService.removeMomentById(moment_id).subscribe()
      this.messageService.addMessage("Momento excluido com sucesso!")
    }
    catch(e){
      this.messageService.addMessage("Não foi possível excluir esse registro.")
    }

    this.router.navigate(["/"]);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.moment_id = params['id'];

    });
    this.momentsService.getMomentById(this.moment_id).subscribe((response_paramns)=>{
      this.momment = response_paramns.data;

      console.log(response_paramns.data)
      if(!response_paramns.data.comments ){
        this.momment.comments = [];
      }

    });

    this.commentForm = new FormGroup({
        text: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required])
      }
    );


  }

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) return;

    const data: Comment = this.commentForm.value;

    data.momentId = Number(this.momment!.id);

    await this.commentsService.createComment(data).subscribe((comment) => {
      return this.momment!.comments!.push(comment.data);
    });

    this.messageService.addMessage('Comentário adicionado!');

    this.commentForm.reset();

    formDirective.resetForm();
  }

}
