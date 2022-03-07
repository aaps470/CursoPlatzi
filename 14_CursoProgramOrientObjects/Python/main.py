from car import Car
from account import Account
from uberX import UberX
from user import User

if __name__ == "__main__":
    print("Inicializando las info de los carros")
    print("Car")

    car = Car("AMS234", Account("Andres Herrera", "AND876", "andres@platzi.com", "2563"))
    print(vars(car))
    print(vars(car.driver))

    print("UberX")
    uberX = UberX("KLO365", Account("Marco Diaz", "SGHJ1234", "marco@platzi.com","7856"), "Toyota", "Corolla")
    print(vars(uberX))
    print(vars(uberX.driver))

    print("User")
    user = User("Mariana Diaz", "SDF1234", "mariana@platzi.com", "7856")
    print(vars(user))