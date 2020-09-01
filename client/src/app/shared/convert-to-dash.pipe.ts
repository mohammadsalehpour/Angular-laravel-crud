import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToDash'
})

export class ConvertToDashPipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(' ', character);
  }
}
