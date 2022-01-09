from platform import platform
import os
import webbrowser as wb

plat = platform().split("-")[0]

if plat == 'Linux':
    cmd = "export FLASK_APP=./routes.py; flask run"
else:
    cmd = "set FLASK_APP=routes.py; flask run"

if __name__ == "__main__":
    wb.open("http://127.0.0.1:5000")
    os.system(cmd)
    