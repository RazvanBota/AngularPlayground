import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-depatment-detail',
  templateUrl: './depatment-detail.component.html',
  styles: []
})
export class DepatmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    })
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['../', previousId], {relativeTo: this.route})
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['../', nextId], {relativeTo: this.route})
  }

  goBack(){
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/departments', {id: selectedId, test:'testValue'}])
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route})
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route})
  }
}
