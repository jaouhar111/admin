import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { ClasseService } from 'src/app/classe.service';
Chart.register(...registerables);
@Component({
  selector: 'app-classe-charts',
  templateUrl: './classe-charts.component.html',
  styleUrls: ['./classe-charts.component.css']
})
export class ClasseChartsComponent implements OnInit{
  classData: any[] = []; // Array to store class data
  classNames: string[] = []; // Array to store class names
  studentCounts: number[] = []; // Array to store student counts
  constructor(private Cla:ClasseService){}
  ngOnInit(): void {
    this.Cla.getClasse()
    .subscribe(data => {
      this.classData = data;

      // Extract class names and student counts
      this.classNames = this.classData.map(classInfo => classInfo.name);
      this.studentCounts = this.classData.map(classInfo => classInfo.students.length);

      // Create and update the chart
      this.renderChart();
    });
  }
renderChart(){
const mychart = new Chart("barchart",{
type:'bar',
options: {
  indexAxis: 'y',
  
 
  
},
 data : {
  labels: this.classNames,
  datasets: [{
    label: 'Etudients',
    data: this.studentCounts,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      
    ],
    borderWidth: 1
  }]
}
})

}
}
