import Student from './student'

export default class ExpertStudent extends Student {
  constructor(props) {
    super(props) //*Llama al constructor de la clase madre
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse)
  }
}