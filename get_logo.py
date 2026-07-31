import urllib.request
url = 'https://upload.wikimedia.org/wikipedia/en/2/29/Sathyabama_Institute_of_Science_and_Technology_logo.png'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
with urllib.request.urlopen(req) as response, open('public/sathyabama_logo.png', 'wb') as out_file:
    data = response.read()
    out_file.write(data)
print("Done")
