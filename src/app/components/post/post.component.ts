import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl:'./post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
   postForm: FormGroup;

   constructor(private http : HttpClient){   
    this.postForm = new FormGroup ({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
 });
   }

  
    onSubmit() {
       if (this.postForm.valid) {
         
          
           alert("form submitted sucessfull")
            const postdata =this.postForm.value
          this.http.post('http://localhost:3000/users',postdata).subscribe((res)=>{
                  console.log("response submitted")
           })
           this.postForm.reset();
       }
   }
}
