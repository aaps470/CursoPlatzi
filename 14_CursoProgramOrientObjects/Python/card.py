from payment import Payment
from datetime import date

class Card(Payment):
    franquise = str
    expireDate = date.today()
    cvv = str

    def __init__(self, id, franquise, expireDate, cvv):
        super.__init__(id)
        self.franquise = franquise
        self.expireDate = expireDate
        self.cvv = cvv