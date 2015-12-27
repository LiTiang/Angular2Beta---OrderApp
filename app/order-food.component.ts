import {Component, View, OnInit} from 'angular2/core';
import {OrderItem} from './order-item';
import {NotesService} from './notes.service';
import {ReceptionistsService} from './receptionists.service';
import {OrderedListComponent} from './ordered-list.component';
// default root folder are deff comparing with below & above, becareful !!!
@View({
	templateUrl:"app/orderDetail.html",
	directives: [OrderedListComponent]
})	
@Component({
	selector: 'order-food',
	providers: [NotesService, ReceptionistsService]
})
export class OrderFoodComponent implements OnInit{
	constructor(
		private _notesService: NotesService,
		private _receptionists: ReceptionistsService
	){}

	public orders: string[] = Receptionists;
	public notes: string[];
	public pageTitle: string;
	public doubleCheckMoney: boolean = false;
	public submitted: boolean = false;
	public orderedList: OrderItem[] = [];	
	public currentOrdering = {};

	//use ngOnInit will sometime broken server state in my experience ...

	ngOnInit() {
		this.getNotes();
		this.getReceptionists();
		this.setTitle()
	}
	
	getNotes() {
		this._notesService.getNotes()
			.then( (NOTES) => this.notes = NOTES );
	}

	getReceptionists() {
		this._receptionists.getReceptionists()
			.then((Receptionists) => this.orders = Receptionists)
			.catch(function(error) {  console.log(error);  });
			
	}
	//when this.orders has value, then execute setTitle(), how can i do it?
	setTitle() {
		this.pageTitle = "Today's Orders : " + this.orders[0] + ", " + this.orders[1];
	}

	checkMoneyAmount() {
		this.doubleCheckMoney = true;
	}

	onSubmit() {
		this.orderedList.push(this.currentOrdering);
		this.currentOrdering = {};
		this.doubleCheckMoney = false
		this.submitted = true;
	}
}
// temp, this var will call from the other file
var Receptionists = ["Jack", "Peter"];

