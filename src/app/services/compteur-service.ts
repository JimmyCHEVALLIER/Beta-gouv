import { BehaviorSubject } from 'rxjs';

export class CompteurService {
    compteurData: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor() {
    }

    setValue(_counterValue: number) {
        this.compteurData.next(_counterValue);
    }
}
