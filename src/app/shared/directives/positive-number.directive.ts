import { AbstractControl } from '@angular/forms';


export function positiveNumberValidator(control: AbstractControl) {
  const isNotOk = Number(control.value) < 1;
  if (isNotOk)
    return { nonPositive: true }
    else
    return null;
} 