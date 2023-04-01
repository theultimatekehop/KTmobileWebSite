import { Component } from '@angular/core';

@Component({
  selector: 'app-residentielle',
  templateUrl: './residentielle.component.html',
  styleUrls: ['./residentielle.component.scss']
})
export class ResidentielleComponent {
  selectedContent = 'item1';

  changeContent(content: string) {
    this.selectedContent = content;
  }
}
