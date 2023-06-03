import { Component, OnInit } from '@angular/core';
import { Interface } from 'src/app/modules/interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-non-attivi.component.html',
  styleUrls: ['./post-non-attivi.component.scss']
})
export class PostNonAttiviComponent implements OnInit {

  myArray:any = [];

  constructor(private postSrv:PostService) {
    const myJson = this.postSrv.postSearch()
    .then(resolve => {this.myArray = resolve
  })
}

  ngOnInit(): void {
  }

}
