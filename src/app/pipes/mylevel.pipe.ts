import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mylevel'
})
export class MylevelPipe implements PipeTransform {

  transform(value: any): unknown {
    switch (value) {
      case 0:
        return 'Low';
        break;
      case 1:
        return 'Meidum';
        break;
      case 2:
        return 'Hight';
        break;
      default:
        return 'Low';
        break;
    }
  }

}
