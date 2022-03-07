import Student from './student'

export default class BasicStudent extends Student {
  constructor(props) {
    super(props) //*Llama al constructor de la clase madre
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "English"){
      this.approvedCourses.push(newCourse)
    } else {
      console.warn(`Lo sentimos ${this.name}, no puedes tomar cursos en inglés`)
    }
  }
}