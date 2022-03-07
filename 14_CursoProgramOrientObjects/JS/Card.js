class Card extends Payment(){
    constructor(id, franquise, expireDate, cvv){
        super(id)
        this.franquise = franquise;
        this.expireDate = expireDate;
        this.cvv = cvv;
    }
}