class Game:
    def __init__(self, x, y, gameid):
        self.x = x
        self.y = y
        self.gameid = gameid
        self.current_player = 0
        self.players = [
            [],
            []
        ]
        self.potential_voters = self.players
        self.votes = [[0 for _ in range(self.x)] for _ in range(self.y)]

    def get_team0_size(self):
        return len(self.players[0])

    def get_team1_size(self):  
        return len(self.players[1])

    def next_player():
        pass
        # TODO

    def add_user(self, userid):
        if len(self.players[0]) > len(self.players[1]):
            self.players[1].append(userid) 
        else:
            self.players[0].append(userid)
