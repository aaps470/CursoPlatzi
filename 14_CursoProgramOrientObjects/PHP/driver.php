<?php

class Driver extends Account {
    public function __construct($name, $document, $email, $password){
        parent::__construct($name, $document, $email, $password);
    }

    public function printDataDriver() {
        echo "Name: $this->name
        Document: $this->document
        E-mail: $this->email
        Password: $this->password";
    }
}