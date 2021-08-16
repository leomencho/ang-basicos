import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes: String[]=['Spiderman','Iroman','Hulk', 'CapitanAmerica'];
  
  heroeBorrado: String='';
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  
  }

  

}
