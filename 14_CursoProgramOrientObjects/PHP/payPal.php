<?php
require_once('payment.php');
class PayPal extends Payment {
    public $reference;
    public $sucursal;

    public function __construct($id, $reference, $surursal) {
        parent:: __construct($id);
        $this->reference = $reference;
        $this->sucursal = $sucursal;
    }
}
?>