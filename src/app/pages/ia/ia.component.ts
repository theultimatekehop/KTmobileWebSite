import { Component } from '@angular/core';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.scss']
})
export class IaComponent {
  selectedContent = 'item1';

  changeContent(content: string) {
    this.selectedContent = content;
  }
}
