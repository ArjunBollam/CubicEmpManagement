import {Pipe, PipeTransform} from '@angular/core' ;

@Pipe({
    name: 'emailconcat'
})


export class EmailConcatPipe implements PipeTransform {
    transform(value: string): string {
         return 'Email : ' + value;
    }
}
