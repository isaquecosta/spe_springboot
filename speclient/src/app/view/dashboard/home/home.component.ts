import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng';
import { BaseController } from 'src/app/shared/controller/base-controller';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseController implements OnInit {

  constructor(
    messageService: MessageService) {

    super(messageService);
  }

  ngOnInit(): void {}

  
}
