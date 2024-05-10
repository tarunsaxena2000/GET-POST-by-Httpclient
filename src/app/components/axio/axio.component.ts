import { Component } from '@angular/core';
import  axios  from 'axios';

@Component({
  selector: 'app-axio',
  templateUrl: './axio.component.html',
  styleUrl: './axio.component.css'
})
export class AxioComponent {

   apidata:any

    constructor(){
      this.postdata()
    }

    async  postdata(){


            try {

              const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
                 this.apidata = res.data

            }catch(error){
                   console.log(error)
            }
          
      }
}
