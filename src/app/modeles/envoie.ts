import { Emeteur } from './emeteur';
import { Recepteur } from './recepteur';

export class Envoie {
    id: number;
    montant: number;
    date: String;
    emeteur: Emeteur;
    recepteur: Recepteur;
    constructor(){};
}
