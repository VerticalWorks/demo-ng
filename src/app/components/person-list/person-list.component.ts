import { AfterViewInit, Component } from '@angular/core'
import { animate, state, style, transition, trigger} from '@angular/animations'
import { DataLayerService } from '../../services/data-layer.service'
import { Person, ApiResult } from '../../models'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SpinnerComponent } from '../spinner/spinner.component';
import { map } from 'rxjs/operators';
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
 
export class PersonListComponent implements AfterViewInit {
  dataSource: Person[] = []
  columnsToDisplay = ['firstName', 'lastName']
  expandedElement!: Person | null
  constructor(private dataService: DataLayerService, private dialog: MatDialog) {
  }
  ngAfterViewInit(): void {
    this.fetchAddressBook()
  }
  
  fetchAddressBook(){
    let dialogRef = this.enableSpinner();
    
    this.dataService.getAddressBook()
    .pipe(
        map(itemData => {
            return itemData.results.map(value => {
                let person: Person = {
                  firstName: value.name.first,
                  lastName: value.name.last,
                  phoneNumber: value.phone
                }
                return person
            })
        })
    ).subscribe((person) => {
       this.dataSource = person 
       dialogRef.close()
      })
  }

  private enableSpinner() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let dialogRef = this.dialog.open(SpinnerComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    return dialogRef;
  }
  }

