import {Component, View} from 'angular2/core';
import {OrderItem} from './order-item';

@View({
	template:`
		<h3>Ordered</h3>
			<table class="table table-striped table-hover">
			<thead>
					<tr>
						<th>Name</th>
						<th>Food</th>
						<th>Price</th>
						<th>Note</th>
					</tr>
			</thead>
			<tbody *ngIf="list.length">
					<tr *ngFor="#item of list">
						<td>{{list.indexOf(item)}}</td>
						<td>{{item.name}}</td>
						<td>{{item.food}}</td>
						<td>{{item.price}}</td>
						<td>{{item.note}}</td>
						<td><button class="btn btn-danger" on-click="disordering(item)">Delete</button></td>
					</tr>
			</tbody>
			</table>	
	`,
	styles:[`

	`]
})

@Component({
	selector: "ordered-list",
	inputs  : ["list"]
})

export class OrderedListComponent {
	public list: OrderItem[];

	disordering(item) {
		var thisItem:number = this.list.indexOf(item)
		console.log(item)
		console.log(thisItem)
		console.log(this.list[thisItem])
		this.list.splice（thisItem, 2);
		// delete this.list[thisItem];
		console.log(this.list)
		console.log(this.list.length)
		// this.list.splice（thisItem, 1) // why not work ??
	}
}