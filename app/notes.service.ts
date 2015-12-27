import {Injectable} from 'angular2/core';
import {NOTES} from './mock-notes';

@Injectable()
export class NotesService {

	getNotes() {
		return Promise.resolve(NOTES);
	}

	getNotesSlowly() {
		return new Promise(resolve => 
			setTimeout(()=>resolve(NOTES), 2000));
	} // aftet 2sec, this Promise will be resolve, & get NOTES
}