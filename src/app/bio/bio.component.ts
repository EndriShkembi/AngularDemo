import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  devs! : Developer[];
  // constructor(developerService: DeveloperService) {
  //   this.devs = developerService.getAllDevelopers();

  // }
  constructor(private developerService:DeveloperService){
    this.developerService.getAllDevelopers().subscribe(
      response => this.devs = response
    );

  }

  ngOnInit(): void {
  }

}
