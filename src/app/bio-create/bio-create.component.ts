import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-bio-create',
  templateUrl: './bio-create.component.html',
  styleUrls: ['./bio-create.component.css']
})
export class BioCreateComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private developerService: DeveloperService,
    private router: Router

  ) { }

  devForm = this.fb.group({
    'id' : new FormControl(''),
    'firstName' : new FormControl(''),
    'lastName' : new FormControl(''),
    'favoriteLanguage' : new FormControl(''),
    'yearStarted' : new FormControl(''),
  })

  get id() {return this.devForm.get('id')?.value}
  get firstName() {return this.devForm.get('firstName')?.value}
  get lastName() {return this.devForm.get('lastName')?.value}
  get favoriteLanguage() {return this.devForm.get('favoriteLanguage')?.value}
  get yearStarted() {return this.devForm.get('yearStarted')?.value}

  prepareSave(): Developer{
      return new Developer(this.id,this.firstName,this.lastName,this.favoriteLanguage,this.yearStarted)
  }

  saveDeveloper(){
      this.developerService.addDevelopers(this.prepareSave());
      this.router.navigate(['/bio'])
  }


  ngOnInit(): void {
  }

}
