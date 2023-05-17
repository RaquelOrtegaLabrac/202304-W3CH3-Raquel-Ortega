import { Pet } from "../models/pets";
import { Component } from "./component";

import "./pets.list.css";

export class PetsList extends Component {
  pets: Pet[];
  constructor(selector: string) {
    super(selector);
    this.render();
    console.log(this.pets);
  }

  render() {
    super.cleanHtml(this.selector);
    this.template = 
  }
}


