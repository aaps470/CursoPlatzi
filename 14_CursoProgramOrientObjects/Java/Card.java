import java.util.Date;

public class Card extends Payment {
    String franquise;
    Date expireDate;
    String codigoCvv;
    public Card(Integer id, String franquise, Date expireDate, String codigoCvv){
        super(id);
        this.franquise = franquise;
        this.expireDate = expireDate;
        this.codigoCvv = codigoCvv;

        this.printDataPayment();
    }
}