import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
  // This property will receive data from the parent
  @Input() fruit = {
      name: "Apfel",
      img:"apple.png",
      description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
      genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
      stars: 2.3,
      reviews:[{name: "Kevin W.", text: "ist lecker"},{name: "Arne P.", text: "nicht so meins"}],
  }; 


  //1-@Output() to communitcatio from child comp to parent compo
  @Output() fruitName = new EventEmitter<string>();// Output property
  //creating a function to emit
  emitName() {
    this.fruitName.emit(this.fruit.name);// Emit an event with data
  }
  //2-practicing @Output()
  @Output() smsFromChild = new EventEmitter<string>();
  sendSMSChild() {
    this.smsFromChild.emit(`I am ${this.fruit.name} from Child Component`);
  }

  inputData = '';
  send
}
