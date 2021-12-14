import { Pipe, PipeTransform } from '@angular/core';
import { Vtuber } from '../interfaces/hololive.interface';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  transform( pers:Vtuber ):string {
    return `assets/vtubers/${pers.id}.jpg`;
  }

}
