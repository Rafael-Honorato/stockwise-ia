import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value) return '';

    const phoneNumber = value.toString().replace(/\D/g, '');

    if (phoneNumber.length === 11) {
      return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7)}`;
    }

    if (phoneNumber.length === 10) {
      return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 6)}-${phoneNumber.substring(6)}`;
    }

    return phoneNumber;
  }
}
