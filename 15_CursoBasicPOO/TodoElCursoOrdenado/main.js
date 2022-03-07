import FreeStudent from './freeStudent.js'
import BasicStudent from './basicStudent.js'
import ExpertStudent from './expertStudent.js'
import TeacherStudent from './teacherStudent.js';


//* Estudiantes ---------------------
const miguel = new ExpertStudent({
  id: 1,
  name: 'Miguel',
  email: 'miguel@gmail.com',
  username: 'mike',
  points: 40000,
  approvedCourses: [cursoProgramacionBasica],
  learningPaths: [escuelaDesarrolloWeb]
});
console.log(miguel);

const juan = new FreeStudent({
  id: 2,
  name: 'Juan',
  email: 'juan@gmail.com',
  username: 'juanDC',
  points:  100000,
})
console.log(juan)
juan.approveCourse(cursoProgramacionBasica)
juan.approveCourse(cursoIntroMarketingDigital)
console.log(juan.approvedCourses)

const daniel = new BasicStudent({
  id: 3,
  name: 'Daniel',
})
console.log(daniel)
daniel.approveCourse(cursoProgramacionBasica)
daniel.approveCourse(cursoIntroMarketingDigital)
console.log(daniel.approvedCourses)

const freddy = new TeacherStudent({
    name: 'Freddy Vega',
    username: 'freddier',
    email: 'freddy@gmail.com',
    instagram: "freddiervega"
  })
  console.log(freddy)
  console.log(freddy.publicarComentario("Soy el profe y espero que le den 5 estrellas"))