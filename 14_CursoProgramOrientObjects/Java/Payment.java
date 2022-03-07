public class Payment {
    Integer id;

    public Payment(Integer id){
        this.id = id;
    }

    protected void printDataPayment(){
        System.out.println("Id: " + id);
    }
}