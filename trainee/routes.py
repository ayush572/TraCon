from flask import Flask, render_template, redirect, request

from trainee.dumbel import Dumbel
from trainee.legRaise import LegRaise
from trainee.squats import Squats

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('routes/main.html')

@app.route("/exercises")
def exercises():
    return render_template('routes/exercises.html')

@app.route("/dumbel")
def dumbel():
    count = request.args.get("count")
    t = int(Dumbel(int(count)).run())
    print(t)
    return redirect("/exercises")

@app.route("/squats")
def squats():
    count = request.args.get("count")
    t = int(Squats(int(count)).run())
    print(t)
    return redirect("/exercises")

@app.route("/legRaise")
def legRaise():
    count = request.args.get("count")
    t = int(LegRaise(int(count)).run())
    print(t)
    return redirect("/exercises")