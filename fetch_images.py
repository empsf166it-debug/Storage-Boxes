import urllib.request
import re

def get_pexels_images(query):
    url = f"https://www.pexels.com/search/{query}/"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        ids = re.findall(r'pexels-photo-(\d+)\.jpeg', html)
        return list(set(ids))
    except Exception as e:
        return []

print("Kitchen:", get_pexels_images("kitchen%20storage")[:2])
print("Wardrobe:", get_pexels_images("wardrobe")[:2])
print("Bathroom:", get_pexels_images("bathroom%20organization")[:2])
print("Basket:", get_pexels_images("wicker%20basket")[:2])
print("Acrylic:", get_pexels_images("makeup%20organizer")[:2])
print("Underbed:", get_pexels_images("bedroom%20storage")[:2])
