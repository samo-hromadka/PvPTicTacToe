from random import randint

class Game:
    def __init__(self, x, y, gameid):
        self.x = x
        self.y = y
        self.gameid = gameid
        self.current_player = 0
        self.players = [[],[]]
        self.potential_voters = self.players
        self.votes = [[0 for _ in range(self.x)] for _ in range(self.y)]

    def get_team0_size(self):
        return len(self.players[0])

    def get_team1_size(self):  
        return len(self.players[1])

    def next_player():
        pass
        # TODO

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
        else:
            abort('idz do pitse')


    def next_round():
        #get where to go
        #make the move
        #check if win
        self.potential_voters = self.players
        self.current_player = (self.current_player + 1) % 2

