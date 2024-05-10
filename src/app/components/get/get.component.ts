import { Component } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent {
  apidata:any

  constructor(private userdata : UserdataService){
                  userdata.users().subscribe((res)=>{
                         this.apidata =res
                  })
  }
}
