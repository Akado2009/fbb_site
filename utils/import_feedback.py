from fbb_site.models import FeedbackFAQ, SimpleFeedback

with open('utils/feedbacks.txt') as input_file:
    for line in input_file:
        splitted = line.split('\t')
        print(splitted)
        new_simple = SimpleFeedback(author=splitted[0], content=splitted[1].strip())
        new_simple.save()

with open('utils/faq.txt') as input_file:
    for line in input_file:
        splitted = line.split('\t')
        print(splitted)
        new_faq = FeedbackFAQ(question=splitted[0], answer=splitted[1].strip())
        new_faq.save()
