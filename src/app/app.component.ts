import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pw';
  password = '';
  length: number = 0;
  includeLetter: boolean = false;
  includeNumber: boolean = false;
  includeSymbol: boolean = false;

  constructor() {}
  onChangeLength(event: Event) {
    const parsedValue = parseInt((event.target as HTMLInputElement).value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetter = !this.includeLetter;
  }
  onChangeUseNumbers() {
    this.includeNumber = !this.includeNumber;
  }
  onChangeUseSymbols() {
    this.includeSymbol = !this.includeSymbol;
  }
  onButtonClick() {
    // console.log(
    //   'About to generate password',
    //   this.length,
    //   this.includeLetter,
    //   this.includeNumber,
    //   this.includeSymbol
    // );

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';

    if (this.includeLetter) {
      validChars += letters;
    }
    if (this.includeNumber) {
      validChars += numbers;
    }
    if (this.includeSymbol) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
