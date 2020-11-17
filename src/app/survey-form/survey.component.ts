import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import Survey from 'src/app/model/survey';
import { NgForm } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  id: number;
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
  subtasks1?: Task[];
}

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {

  surveyForm: Survey = new Survey();
  submitted = false;

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
  }

  onSubmit(): void { 
    this.surveyService.create(this.surveyForm).then(() => 
    {
      console.log('Form submitted!');
      this.submitted = true;
    });   
  }


  besttime: string;
  times: string[] = ['Morning (8 am-Noon)','Afternoon (Noon-4 pm)','Evening (4-8 pm)'];

  emergencycontact: string;
  contacts: string[] = ['Yes', 'No'];

  relation: string;
  relations: string[] = ['Family', 'Friend','Other'];

  home: string;
  homes: string[] = ['Private house','Private apartment','Assisted living facility','Senior housing','No housing / homeless','Other'];
  
  task: Task = {
    id: 0,
    name: 'Checkbox',
    completed: false,
    color: 'primary',
    subtasks: [
      {id: 0, name: 'Email', completed: false, color: 'primary'},
      {id: 1, name: 'Phone', completed: false, color: 'primary'},
      {id: 2, name: 'Text', completed: false, color: 'primary'},
      {id: 3, name: 'Mail', completed: false, color: 'primary'},
      {id: 4, name: 'Other', completed: false, color: 'primary'}
    ],
    subtasks1: [
      {id: 0, name: 'Not having a good support system', completed: false, color: 'primary'},
      {id: 1, name: 'Not being able to access or obtain my medical care (prescriptions, copays, etc.)', completed: false, color: 'primary'},
      {id: 2, name: 'Not being able to afford my housing, or utility bills', completed: false, color: 'primary'},
      {id: 3, name: 'Not having transportation', completed: false, color: 'primary'},
      {id: 4, name: 'Not having the equipment I need to be safe (walker, commode chair, grab bars, etc.)', completed: false, color: 'primary'},
      {id: 5, name: 'Other', completed: false, color: 'primary'}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    console.log("------");
    console.log(this.task.subtasks);
    console.log("------");
    console.log(this.allComplete);
  } 

  updateAllComplete1() {
    this.allComplete = this.task.subtasks1 != null && this.task.subtasks1.every(t => t.completed);
    console.log("------");
    console.log(this.task.subtasks1);
    console.log("------");
    console.log(this.allComplete);
  } 
  
  survey = 'Health Assessment Survey'

  
}
