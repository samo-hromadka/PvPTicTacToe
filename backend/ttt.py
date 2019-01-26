from flask import Flask, render_template, redirect, abort
from words import words
from random import randint
from game import Game
app = Flask(__name__)

games = {}

def get_game_or_404(gameid):
    if gameid in games:
        return games[gameid]
    else:
        abort(404)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/game/<int:gameid>')
def game(gameid):
    game =  get_game_or_404(gameid)
    return render_template('game.html', game=game)

@app.route('/new_game')
def new_game():
    gameid = randint(1,999999)
    games[gameid] = Game(3,3, gameid)
    return redirect('game/' + str(gameid))

@app.route('/game/<int:gameid>/register_user')
def register_user(gameid):
    game = get_game_or_404(gameid)
    game.add_user(randint(0,100))
    return redirect('game/' + str(gameid))


@app.route('/game/<int:gameid>/update')
def update(gameid):
    
    return 'TODO'



