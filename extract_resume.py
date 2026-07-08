from zipfile import ZipFile
from xml.etree import ElementTree as ET
from pathlib import Path

path = Path('sk2.docx')
out_path = Path('resume_text.txt')

with ZipFile(path) as z:
    xml = z.read('word/document.xml').decode('utf-8')

root = ET.fromstring(xml)
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
texts = []
for p in root.findall('.//w:p', ns):
    paras = []
    for t in p.findall('.//w:t', ns):
        if t.text:
            paras.append(t.text)
    if paras:
        texts.append(''.join(paras))

out_path.write_text('\n'.join(texts), encoding='utf-8')
print(out_path.read_text(encoding='utf-8'))
