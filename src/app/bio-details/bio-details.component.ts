import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-bio-details',
  templateUrl: './bio-details.component.html',
  styleUrls: ['./bio-details.component.css']
})
export class BioDetailsComponent implements OnInit {

  dev! : Developer;  

  constructor(private routes:ActivatedRoute, 
    private developerService: DeveloperService) { 
       
    }

  getDeveloper(){
    this.dev = this.developerService.getDeveloperById(this.routes.snapshot.paramMap.get('id')!);
  }  

  ngOnInit(): void {
    this.getDeveloper()
  }

}
