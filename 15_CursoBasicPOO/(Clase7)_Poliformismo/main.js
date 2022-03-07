class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publicarComentario(commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName = this.name,
        });
        comment.publicar();
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approvedCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName = this.name,
            studentRole = "profesor",
        });
        comment.publicar();
    }
}

class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiente",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.like + "Likes");
        console.log(this.content);
    }
}

const freddy = new TeacherStudent ({
    name: "Freddy Vega",
    username: "freddier",
    email: "ftotal@gmail.com",
    twitter: "freddiervega",
})