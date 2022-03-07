<?php

class User extends Account {
    public function __construct($name, $document, $email, $password){
        parent::__construct($name, $document, $email, $password);
    }

    public function printDataUser() {
        echo "User";
        echo "<br>";
        echo "Name: $this->name
        Document: $this->document
        E-mail: $this->email
        Password: $this->password";
        echo "<br>";
    }
}