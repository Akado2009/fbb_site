from bs4 import BeautifulSoup
import requests
import re
from fbb_site.models import Publication


with open('utils/publications.txt') as input_file:
    current_year = None
    count = 0

    name = None
    authors = None
    journal = None
    doi_link = None
    pubmed_link = None
    abstract = None
    for line in input_file:
        if len(line.strip()) == 4: current_year = line.strip()
        else:
            if count == 5:
                # get abstract
                # append
                r = requests.get(pubmed_link)
                content = r.content
                soup = BeautifulSoup(content, "html.parser")
                element = soup.find('abstracttext')
                try:
                    abstract = element.string
                    new_publication = Publication(name=name, authors=authors, journal=journal, pubmed_link=pubmed_link, doi_link=doi_link, year=current_year, abstract=abstract)
                    new_publication.save()
                    count = 0
                except: 
                    count = 0
            if count == 0:
                name = line.strip()
                count += 1
            elif count == 1:
                authors = line.strip()
                count += 1
            elif count == 2:
                journal = line.strip()
                count += 1
            elif count == 3:
                pubmed_link = line.strip()
                count += 1
            elif count == 4:
                doi_link = line.strip().split('>')[0]
                count += 1