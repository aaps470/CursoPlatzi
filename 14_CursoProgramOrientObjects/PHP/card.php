<?php
require_once('payment.php');
class Card extends Payment {
    public $franquise;
    public $expireDate;
    public $cvv;

    public function __construct($id, $franquise, $expireDate, $cvv){
        parent::__construct($id);
        $this->franquise = $franquise;
        $this->expireDate = $expireDate;
        $this->cvv = $cvv;
    }
}
?>