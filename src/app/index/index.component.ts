import { Service } from './../service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']

})
export class IndexComponent implements OnInit {

  names = [{vq: 'Nome', tempo: 'Tempo', monitorado: 'Monitorado', abandonado: 'Abandonado' }]
 
  setores: string[] = [];

  check1: boolean[];
 
  check2: boolean[];

  index : number;
  private sub : Subscription;

  constructor( private service: Service,
    private route: ActivatedRoute ) {
  }

  getPaginas(){
    console.log(this.service.setores)
    var paginas = Math.ceil(this.service.setores.length / 16)
    var n = Array (paginas).fill(0);
    console.log(n)
    return n
  }

  ngOnInit() {
    // this.setores = this.service.getSetores();
    this.check1 = [];
    this.check2 = [];

     this.sub = this.route.params.subscribe(params => {
       let pagina =+ params['pagina'];
       console.log(pagina)
       if(pagina == 1){
        this.index = 0;
       }else if(pagina>1){
        this.index = (pagina -1) * 16;
       }
       
       for(let i = this.index;i < this.service.setores.length && i<this.index + 16;i++){
         this.setores.push(this.service.setores[i]);
       }
       console.log(this.setores.length)
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
