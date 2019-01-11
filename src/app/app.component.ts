import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {

  name = new FormControl('');
  searchValue = new FormControl('');

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

  stockTable = [];

  showClick = name => {
   const word = 'Hello ' + name;
   alert(word);
  }
  displyValue = () => {
    const check = this.stock.indexOf(this.name.value);
    if (this.name.value) {
      if (check <= -1) {
        this.stock.push({id: (this.stock.length + 1), name: this.name.value, code: 'ST-IP-19/01-00' + (this.stock.length + 1)});
        this.name.setValue('');
        document.getElementById('inputAD').focus();
      } else {
        alert('This value already exit !!!');
      }
    } else {
      this.stock.push({id: (this.stock.length + 1), name: 'Autodata-00' + (this.stock.length + 1), code: 'ST-IP-19/01-00' + (this.stock.length + 1)});
      document.getElementById('inputAD').focus();
    }
    this.stockTable = this.stock;
    console.log(this.stock);
  }
  delState = value => {
    alert('Remove " ' + value.name + ' "');
    const index = this.stock.indexOf(value);
    this.stock.splice(index, 1);
  }
  editState = value => {
    const a = prompt('Please enter new value.', value.name);
    const index = this.stock.indexOf(value);
    if (a !== '' && a) {
      if (a.length <= 10) {
        this.stock[index].name = a;
      } else {
        alert('Max character is (10)');
      }
    }
  }
  removeAll = () => {
    const a = prompt('Please enter "clear" to confirm', '');
    if (a === 'clear') {
      this.stock = [];
    }
  }

  exportPdf = () => {
    if (this.stock.length > 0) {
      const data = document.getElementById('exportTable');
      const printHead = document.getElementById('printHead');
      const printFoot = document.getElementById('printFoot');
      printHead.classList.add('notShow');
      printFoot.classList.remove('notShow');
      html2canvas(data).then(canvas => {
        const imgWidth = 208;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const heightLeft = imgHeight;

        const imgUrl = canvas.toDataURL('image/png');
        const pdf = new jspdf('p', 'mm', 'a4');
        const position = 0;
        pdf.addImage(imgUrl, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('example.pdf');
        printHead.classList.remove('notShow');
        printFoot.classList.add('notShow');
      });
    }
  }

  exportTxt = () => {
    if (this.stock.length > 0) {
      const word = [];
      this.stock.map(data => word.push('ID: ' + data.id + ' | Name: ' + data.name + ' | Code: ' + data.code));
      const pdf = new jspdf();
      pdf.text(word, 10, 10);
      pdf.save('text.pdf');
    }
  }

  searchTable = () => {
    let input;
    input = this.searchValue.value;
    console.log(input);
  }
}
