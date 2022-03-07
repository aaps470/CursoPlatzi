public class Paypal extends Payment {
    String reference;
    String sucursal;

    public PayPal(Integer id, String reference, String sucursal){
        super(id);
        this.reference = reference;
        this.sucursal = sucursal;

        this.printDataPayment;
    }
}