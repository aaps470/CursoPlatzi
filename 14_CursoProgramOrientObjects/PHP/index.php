<?php

require_once('car.php');
require_once('account.php');
require_once('uberX.php');
require_once('uberPool.php');
require_once('user.php');
require_once('driver.php');

$uberX = new UberX("CVB123", new Account("Andres Herrera", "AND456"), "Chevrolet", "Spark");
$uberX->printDataCar();

$uberPool = new UberPool("TYU567", new Account("Andrea Ferran", "ANDA765"), "Dogde", "Attitude");
$uberPool->printDataCar();

$car = new Car("FHU567", new Account("Gonzalo Rivera", "ASDA765", "gonzalo@platzi.com", "12345"));
$car->printDataCar();

$user = new User("JGU567", new Account("Maria UnPajote", "GEEA765", "maria@platzi.com", "97655"));
$car->printDataUser();
?>
