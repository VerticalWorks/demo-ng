import { Component } from '@angular/core'
import { animate, state, style, transition, trigger} from '@angular/animations'
import { DataLayerService } from '../../services/data-layer.service'
import { Person } from '../../models/person'
/**
 * @title Table with expandable rows
 */

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
 
export class PersonListComponent {
  dataSource = DATA;
  columnsToDisplay = ['firstName', 'lastName'];
  expandedElement!: PersonElement | null;
}
const DATA: PersonElement[] = [
  {
    firstName: 'Michael',
    lastName: 'Bowman',
    phoneNumber: '971-203-4437'
  },
 
];
export interface PersonElement {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}


