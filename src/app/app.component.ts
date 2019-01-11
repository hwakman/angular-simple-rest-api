import { Component } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {

  name = new FormControl('');

  title = 'e-comp';
  sample = [
    { id: 11, name: 'Mr. Nice', role: 'nothing', detail: 'nothing' },
    { id: 12, name: 'Narco', role: 'nothing', detail: 'nothing' },
    { id: 13, name: 'Bombasto', role: 'nothing', detail: 'nothing' },
    { id: 14, name: 'Celeritas', role: 'nothing', detail: 'nothing' },
    { id: 15, name: 'Magneta', role: 'nothing', detail: 'nothing' },
    { id: 16, name: 'RubberMan', role: 'nothing', detail: 'nothing' },
    { id: 17, name: 'Dynama', role: 'nothing', detail: 'nothing' },
    { id: 18, name: 'Dr IQ', role: 'nothing', detail: 'nothing' },
    { id: 19, name: 'Magma', role: 'nothing', detail: 'nothing' },
    { id: 20, name: 'Tornado', role: 'nothing', detail: 'nothing' }
  ] ;

  menu = [
    'News',
    'Sport',
    'Music',
    'Network',
    'Technology'
  ];

  stock = [];

  showClick = name => {
   const word = 'Hello ' + name;
   alert(word);
  }
  displyValue = () => {
    const check = this.stock.indexOf(this.name.value);
    if (this.name.value) {
      if (check <= -1) {
        this.stock.push(this.name.value);
        this.name.setValue('');
        document.getElementById('inputAD').focus();
      } else {
        alert('This value already exit !!!');
      }
    } else {
      this.stock.push('Autodata-00' + (this.stock.length + 1));
      document.getElementById('inputAD').focus();
    }
    console.log(this.stock);
  }
  delState = value => {
    alert('Remove " ' + value + ' "');
    const index = this.stock.indexOf(value);
    this.stock.splice(index, 1);
  }
  editState = value => {
    const a = prompt('Please enter new value.', value);
    const index = this.stock.indexOf(value);
    if (a !== '' && a) {
      this.stock[index] = a;
    }
  }
  removeAll = () => {
    const a = prompt('Please enter "clear" to confirm', '');
    if (a === 'clear') {
      this.stock = [];
    }
  }
}
