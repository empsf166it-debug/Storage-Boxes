import os, glob, re

for f in glob.glob('*.html'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if '<footer' in content:
        content = re.sub(
            r'<footer class="([^"]*)bg-brand-charcoal([^"]*)text-brand-warmWhite([^"]*)">',
            r'<footer class="\1bg-brand-warmWhite dark:bg-brand-darkBg text-brand-charcoal dark:text-brand-warmWhite border-t border-brand-sand/30 dark:border-brand-charcoal\3">',
            content
        )
        
        footer_start = content.find('<footer')
        footer_end = content.find('</footer>') + 9
        if footer_start != -1 and footer_end != -1:
            footer_content = content[footer_start:footer_end]
            footer_content = footer_content.replace('hover:text-white transition-colors', 'hover:text-brand-accent transition-colors')
            footer_content = footer_content.replace('hover:text-white', 'hover:text-brand-charcoal dark:hover:text-white')
            
            content = content[:footer_start] + footer_content + content[footer_end:]
            
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
