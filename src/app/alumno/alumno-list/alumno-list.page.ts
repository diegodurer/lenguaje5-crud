import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.page.html',
  styleUrls: ['./alumno-list.page.scss'],
})
export class AlumnoListPage implements OnInit {

  constructor(private readonly firestore: Firestore) { }

  ngOnInit() {
    this.listarAlumnos();
  }


    listarAlumnos = () => {
      console.log("listar alumnos");
      const alumnoRef = collection(this.firestore, 'alumno');
      collectionData(alumnoRef, { idField: 'id'}).subscribe(respuesta=>{
          console.log("estos son los alumnos", respuesta);
      });
    }
}