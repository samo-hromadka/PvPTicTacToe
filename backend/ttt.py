# from flask import Flask, render_template, redirect, abort, request, jsonify
# from words import words
# from random import randint
# from game import Game
# app = Flask(__name__)

# games = {}

# def get_game_or_404(gameid):
#     if gameid in games:
#         return games[gameid]
#     else:
#         abort(404)

# @app.route('/')
# def home():
#     return render_template('index.html')

# @app.route('/game/<int:gameid>')
# def game(gameid):
#     game =  get_game_or_404(gameid)
#     return render_template('game.html', game=game)

# @app.route('/game')
# def new_game():
#     gameid = randint(1,999999)
#     games[gameid] = Game(3,3, gameid)
#     return redirect('game/' + str(gameid))

# @app.route('/game/<int:gameid>/register_user')
# def register_user(gameid):
#     game = get_game_or_404(gameid)
#     userid = game.add_user()
#     return jsonify({'userid':userid})


# @app.route('/game/<int:gameid>/update')
# def update(gameid):
#     return 'TODO'


# @app.route('/game/<int:gameid>/vote')
# def vote(gameid,userid =0):
#     x = int(request.args['x'])
#     y = int(request.args['y'])
#     game = get_game_or_404(gameid)
#     userid = 0
#     game.add_vote(userid, x, y)
#     return jsonify({'succes':True})


# @app.route('/game/<int:gameid>/next_round')
# def next_round(gameid):
#     game = get_game_or_404(gameid)
#     game.next_round()
#     return redirect('/game/' + str(gameid))






from flask import Flask, render_template, redirect, abort, request, jsonify
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
    print("Hey")
    game =  get_game_or_404(gameid)
    return render_template('game.html', game=game)

@app.route('/game')
def new_game():
    print("Hi")
    gameid = randint(1,999999)
    games[gameid] = Game(3,3, gameid)
    return jsonify({'gameid':gameid, 'squares': game.get_array(),'votes':game.votes, 'current_player': game.current_player, 'win':game.win})


@app.route('/game/<int:gameid>/register_user')
def register_user(gameid):
    game = get_game_or_404(gameid)
    userid = game.add_user()
    return jsonify({'userid':userid})


@app.route('/game/<int:gameid>/update')
def update(gameid):
    game = get_game_or_404(gameid)
    return jsonify({'squares': game.get_array(),'votes':game.votes, 'current_player': game.current_player, 'win':game.win})


@app.route('/game/<int:gameid>/vote')
def vote(gameid,userid =0):
    x = int(request.args['x'])
    y = int(request.args['y'])
    game = get_game_or_404(gameid)
    userid = 0
    game.add_vote(userid, x, y)
    return jsonify({'success':True})





