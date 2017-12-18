from fbb_site.models import Lectorium

with open('utils/lectoriums.txt') as input_file:
    for line in input_file:
        data = line.strip().split('\t')
        name = data[2]
        professor = data[1]
        pre_date = data[0].split('.') #format yyyy-mm-dd, a v inpute dd.mm.yyyy
        date = '-'.join(pre_date[::-1])
        new_lectorium = Lectorium(name=name, professor=professor, date=date)
        new_lectorium.save()
        print(date)