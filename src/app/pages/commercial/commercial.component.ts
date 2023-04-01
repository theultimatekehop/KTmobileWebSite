import { Component } from '@angular/core';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent {
  selectedContent = 'item1';

  changeContent(content: string) {
    this.selectedContent = content;
  }
}
