import { Pet } from "../models/pets";

export const getMockPets = (): Pet[] => [
  new Pet("Mimi", "Bulldog", "Felipe"),
  new Pet("Momo", "Rottweiler", "nobody"),
  new Pet("Meme", "Husky", "Joseba"),
];
