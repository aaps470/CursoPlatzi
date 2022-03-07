

class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo");
        System.out.println("Car...");
        Car car = new Caaar("AMQ123", new Account("Andres Herrera", "ADN1234", "andresH@hotmail.com", "12365"));
        car.passenger = 4;
        car.printDataCar();

        System.out.println("UberX...");
        UberX uberx = new UberX("MKL185", new Account("Maria Loyola", "AJKL12334", "mariaL@hotmail.com", "98766"), "Toyota", "Corolla");
        
    }
}