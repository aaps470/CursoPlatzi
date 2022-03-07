import Student from './student.js'
import Comment from './comment.js'

export default class TeacherStudent extends Student {
  constructor(props) {
    super(props)
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse)
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "Professor"
    })
    comment.publicar()
  }
}