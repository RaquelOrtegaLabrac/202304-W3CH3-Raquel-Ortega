import { Pet } from "../models/pets";
import { Component } from "./component";

import "./pets.list.css";

export class PetsList extends Component {
  pets: Pet[];
  constructor(selector: string) {
    super(selector);
    this.render();
    console.log(this.element);
    console.log(this.pets);
  }

  render() {
    super.cleanHtml(this.selector);
    this.template = this.createTemplate();
  }

  createTemplate() {
    const list = this.pets
      .map(
        (item) => `
        <li>
          <span>${item.id}</span>
          <span>${item.name}</span>
          <span>${item.breed}</span>
          <span>${item.isAdopted}</span>
          <span>${item.owner}</span>
        </li>
        `
      )
      .join("");

    return `<ul>${list}</ul>`;
  }
}
