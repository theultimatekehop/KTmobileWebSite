import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  selectedContent = 'item1';
  serviceControl = new FormControl('Personalisé');
  selectedService: string = 'Personalisé';



  changeContent(content: string) {
    this.selectedContent = content;
  }

  onSubmit(form: any): void { // Add this method
    console.log(form);
  }
}
