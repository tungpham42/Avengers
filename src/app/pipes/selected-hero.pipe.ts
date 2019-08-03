import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../heroes';
@Pipe({
    name: 'selectedHero'
})
export class SelectedHeroPipe implements PipeTransform {
    transform(allHeroes: Hero[], heroId: number): any {
        return allHeroes.filter(h => h.id === heroId);
    }
}