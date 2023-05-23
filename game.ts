import { Component, Input } from '@angular/core';

type Data = {
  [key: string]: string;
};

@Component({
  selector: 'app-country-capital',
  template: ` <div>
    <ng-container *ngFor="let data of btnValues">
    <button [id]="data" class="mr" (click)="handleClick(data)">{{ data }}</button>
    </ng-container>
    <span *ngIf="empty">Congratulations</span>
  </div> `,
  styles: [
    `
     .mr:not(:last-child) {
       margin-right: 8px;
     }
     .blue {
       background-color: #0000ff;
     }
     .red {
       background-color: #ff0000;
     }
    `
  ]
})
// Do not change the way the component is named and exported.
export class CountryCapitalComponent {
  @Input() data;
  //Use console.log() for debugging
  btnValues = []
  empty = false;

  ngOnInit() {
   this.btnValues = [...Object.keys(this.data), ...Object.values(this.data)].sort(() => 0.5 - Math.random());
  }

  handleClick(value: string) {
    const classList = document.getElementById(value).classList;
    const reds = document.querySelectorAll('.red');
    if (reds.length === 2) {
      reds.forEach(red => red.classList.remove('red'));
    }
    
    classList.add('blue');
    const blues = document.querySelectorAll('.blue');
    if (blues && blues.length === 2) {
      const values = [...blues].map(blue => blue.innerText);
      if (this.data[values[0]] === values[1] || this.data[values[1]] === values[0]) {
        blues.forEach(blue => blue.remove());
      } else {
        blues.forEach(blue => {
          blue.classList.remove('blue')
          blue.classList.add('red');
        });
      }
    }

    const buttons = document.querySelectorAll('button');
    if (buttons?.length === 0) {
      this.empty = true;
    }
    
  }
}
