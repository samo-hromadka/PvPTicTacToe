from random import randint
from tic_tac_toe import Tic_tac_toe
from time import time

class Game:
    def __init__(self, x, y, gameid):
        self.x = x
        self.y = y
        self.gameid = gameid
        self.current_player = 0
        self.players = [[0],[]]
        self.potential_voters = self.players
        self.votes = [[0 for _ in range(self.x)] for _ in range(self.y)]
        self.tic_tac_toe = Tic_tac_toe(self.x, self.y)
        self.win = None
        self.next_round_time=time() + 20

    def get_team0_size(self):
        return len(self.players[0])

    def get_team1_size(self):  
        return len(self.players[1])

    def add_user(self):
        userid = randint(1, 999999999)
        while userid in self.players[0] or userid in self.players[1]:
            userid = randint(1, 999999999)
        if len(self.players[0]) > len(self.players[1]):
            self.players[1].append(userid) 
            self.potential_voters[1].append(userid)
        else:
            self.players[0].append(userid)
            self.potential_voters[0].append(userid)
        return userid


    def add_vote(self, userid, x, y):
        if userid in self.potential_voters[self.current_player]:
            self.votes[x][y] += 1
            #self.potential_voters[self.current_player] = not self.potential_voters[self.current_player]
        else:
            pass


    def next_round(self):
        #get where to go
        self.next_round_time = time() + 20
        maximum_index = (0,0)
        maximum = 0
        for x, arr in enumerate(self.votes):
            for y, val in enumerate(arr):
                if val > maximum:
                    maximum = val
                    maximum_index = (x,y)
        #make the move
        print (maximum_index)
        self.tic_tac_toe.play(self.current_player, maximum_index[0], maximum_index[1])
        #check if win
        self.win  = self.tic_tac_toe.is_win() 
        self.votes = [[0 for _ in range(self.x)] for _ in range(self.y)]
        self.potential_voters = self.players
        self.current_player = (self.current_player + 1) % 2


    def get_array(self):
        return self.tic_tac_toe.get_array()

    def team_of_user(self,userid):
        if userid in self.players[0]:
            return 0
        else: 
            return 1
