import { Component, OnInit } from '@angular/core';
import { collection, addDoc, updateDoc, Firestore, doc, }
from '@angular/fire/firestore';


@Component({
  selector: 'app-alumno-edit',
  templateUrl: './alumno-edit.page.html',
  styleUrls: ['./alumno-edit.page.scss'],
})
export class AlumnoEditPage implements OnInit {

  constructor(private readonly firestore: Firestore) { }

  ngOnInit() {
    //this.incluirAlumno();'
    this.editarAlumno("sgsahdfhfdggdgdfagsf");
  }

  incluirAlumno = () => {
    console.log("Aqui incluir en firebase");
    let alumnoRef = collection(this.firestore, "alumno");

    addDoc(alumnoRef, {
      codigo : "001",
      mombre : "Diego",
      apellido :  "Dure",
    }).then(doc => {
      console.log("Resgistro Incluido");
    });

  }

  editarAlumno = (id: string) => {
    console.log("Äqui editar en firebae");
    const document = doc(this.firestore, "alumno", id);

    updateDoc(document, {
      codigo : "001",
      nombre : "Diego",
      apellido : "Dure",
    }).then(doc => {
      console.log("Registro Editado");
    });
  
  }
}