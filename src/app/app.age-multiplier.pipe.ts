import {Pipe,PipeTransform} from '@angular/core' ;

@Pipe({

    name: 'ageconcat'
})

export class AgeMultiplier implements PipeTransform {
    transform(value: number, multiplier?: number): number {
        return value + multiplier ; 
    }
}
