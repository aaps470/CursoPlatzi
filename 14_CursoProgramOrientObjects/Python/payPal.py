from pyexpat import model
from payment import Payment

class PayPal(Payment):
    reference = str
    sucursal = str

    def __init__(self, id, reference, sucursal):
        super.__init__(id)
        self.reference = reference
        self.sucursal = sucursal
