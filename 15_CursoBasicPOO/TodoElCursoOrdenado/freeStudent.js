import Student from './student'

export default class FreeStudent extends Student {
  constructor(props) {
    super(props) //*Llama al constructor de la clase madre
  }

  approveCourse(newCourse) {
    if (newCourse.isFree){
      this.approvedCourses.push(newCourse)
    } else {
      console.warn(`Lo sentimos ${this.name}, sólo puedes tomar cursos gratis`)
    }
  }
}