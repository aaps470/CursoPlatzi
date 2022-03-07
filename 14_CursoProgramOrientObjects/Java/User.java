class User extends Account {
    public User(String name, String document, String email, String password){
        super(name, document, email, password);
    }
    void printDataCar(){
        System.out.println("Document user: " + document + "Name user: " + name + "E-mail: " + email + "Password: " + password);
    }
}