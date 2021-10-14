import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Jesu', 'Alondra'];
  public deleteHeroe:string = '';

  borrarHeroe(){
    this.deleteHeroe = this.heroes.pop() || '';
  }
}
