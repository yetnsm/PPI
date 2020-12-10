import { Component, OnInit } from "@angular/core";

class InstrumentoMusical {
  private _nome: string;
  private _marca: string;
  private _preco: number;
  private _anofabricacao: number;

  constructor(n: string, m: string, p: number, ano: number) {
    this._nome = n;
    this._marca = m;
    this._preco = p;
    this._anofabricacao = ano;
  }

  get nome(): string {
    return this._nome;
  }

  get marca(): string {
    return this._marca;
  }

  get preco(): number {
    return this._preco;
  }

  get ano(): number {
    return this._anofabricacao;
  }
}

@Component({
  selector: "app-instrumento",
  templateUrl: "./instrumento.component.html",
  styleUrls: ["./instrumento.component.css"]
})
export class InstrumentoComponent implements OnInit {
  instrumento: InstrumentoMusical;

  constructor() {
    this.instrumento = new InstrumentoMusical(
      "Guitarra",
      "Gibson",
      1080.33,
      2012
    );
  }

  ngOnInit(): void {}
}
