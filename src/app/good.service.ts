import { Injectable } from '@angular/core';
import { IGood } from "../IGood";

@Injectable({
  providedIn: 'root'
})
export class GoodService {

  goods: IGood[] = [
    {
      id: 1,
      name: "maison1",
      adresse: "rue de la paix",
      prix: "100.000",
      proprietaire: "tata"
    },
    {
      id: 2,
      name: "maison2",
      adresse: "rue de la mort",
      prix: "90.000",
      proprietaire: "nina"
    },
    {
      id: 3,
      name: "maison3",
      adresse: "rue de la je sais pas",
      prix: "180.000",
      proprietaire: "tatu"
    },
  ];
  
  constructor() { }
}
