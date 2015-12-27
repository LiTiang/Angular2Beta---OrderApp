import {Injectable} from 'angular2/core';
import {Receptionists} from './mock-receptionists';

export class ReceptionistsService {
	getReceptionists() {
		return Promise.resolve(Receptionists);
	}
}