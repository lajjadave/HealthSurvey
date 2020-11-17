import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import Survey from '../model/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private dbPath = '/surveys';

  surveysRef: AngularFirestoreCollection<Survey> = null;
  // survey: AngularFirestoreDocument<any>;

  constructor(private db: AngularFirestore) {
    this.surveysRef = db.collection(this.dbPath);
    // this.survey = db.doc('survey');
  }

  getAll(): AngularFirestoreCollection<Survey> {
    return this.surveysRef;
  }

  create(survey: Survey): any {
    return this.surveysRef.add({ ...survey });
  }

}
