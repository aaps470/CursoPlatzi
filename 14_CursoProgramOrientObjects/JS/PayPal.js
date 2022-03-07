class Paypal extends Payment(){
    constructor(id, reference, sucursal){
        super(id)
        this.reference = reference;
        this.sucursal = sucursal;
    }
}