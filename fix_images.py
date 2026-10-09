import re

filepath = 'products.html'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?q=80&w=2069&auto=format&fit=crop': 'https://images.pexels.com/photos/6784013/pexels-photo-6784013.jpeg',
    'https://images.unsplash.com/photo-1595514686259-7f61765c3cc8?q=80&w=1974&auto=format&fit=crop': 'https://images.pexels.com/photos/8580711/pexels-photo-8580711.jpeg',
    'https://images.unsplash.com/photo-1601000676342-832f0fb81cb7?q=80&w=2070&auto=format&fit=crop': 'https://images.pexels.com/photos/6283960/pexels-photo-6283960.jpeg',
    'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1974&auto=format&fit=crop': 'https://images.pexels.com/photos/4283111/pexels-photo-4283111.jpeg',
    'https://images.unsplash.com/photo-1594895697330-9b62fcecc7b2?q=80&w=1964&auto=format&fit=crop': 'https://images.pexels.com/photos/9173943/pexels-photo-9173943.jpeg',
    'https://images.unsplash.com/photo-1629864757303-34e8f3957db1?q=80&w=1974&auto=format&fit=crop': 'https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg',
    'https://images.unsplash.com/photo-1601000676451-b88301593c66?q=80&w=1974&auto=format&fit=crop': 'https://images.pexels.com/photos/6990086/pexels-photo-6990086.jpeg'
}

for old_url, new_url in replacements.items():
    content = content.replace(old_url, new_url)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated products.html")
