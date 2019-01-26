# -*- coding: utf-8 -*-
"""
Created on Sat Jan 26 16:36:41 2019

@author: Tomas
"""

import numpy as np

x = 4
y = 4

class ttt():
    def __init__(self,x,y):
        ttt.field = np.zeros([x,y])
        ttt.x = 3
        ttt.y = 3
    
    def is_legal(self,x,y):
        if ttt.field[x,y]==0:
            return True
        else: return False
        
    def play(self,player,x,y):
        if not ttt.is_legal(x,y):
            print('Not legal move')
            return
        if player == 1:
            ttt.field[x,y] = 1
        elif player ==2:
            ttt.field[x,y] = -1
        ttt.is_win()
    
    
    def is_win(self):
        field = ttt.field
        win =[]
        for i in range(ttt.x):
            for j in range(ttt.y):
                #player 1
                try:
                    if field[i,j]==1 and field[i+1,j]==1 and field[i+2,j]==1:
                        win.append('player1')
                except: pass
                
                try:
                    if field[i,j]==1 and field[i,j+1]==1 and field[i,j+2]==1:
                        win.append('player1')
                except: pass
            
                try:
                    if field[i,j]==1 and field[i+1,j+1]==1 and field[i+2,j+2]==1:
                        win.append('player1')
                except: pass
                #player 2
                try:
                    if field[i,j]==-1 and field[i+1,j]==-1 and field[i+2,j]==-1:
                        win.append('player2')
                except: pass
                
                try:
                    if field[i,j]==-1 and field[i,j+1]==-1 and field[i,j+2]==-1:
                        win.append('player2')
                except: pass
            
                try:
                    if field[i,j]==-1 and field[i+1,j+1]==-1 and field[i+2,j+2]==-1:
                        win.append('player2')
                except: pass
        
        if len(win)>1: print('Warning more than one winner')
        if 'player1' in win: 
            print('player 1 won')
            return 'player1'
        elif 'player2' in win: 
            print('player 2 won')
            return('player2')
        else:
            return(None)
            
        
        
        
#%%

field = np.array([[-1., 1., 1.],
       [1., -1., -1.],
       [1., -1., -1.]])

win =[]
for i in range(4):
    for j in range(4):
        #player 1
        try:
            if field[i,j]==1 and field[i+1,j]==1 and field[i+2,j]==1:
                win.append('player1')
        except: pass
        
        try:
            if field[i,j]==1 and field[i,j+1]==1 and field[i,j+2]==1:
                win.append('player1')
        except: pass
    
        try:
            if field[i,j]==1 and field[i+1,j+1]==1 and field[i+2,j+2]==1:
                win.append('player1')
        except: pass
        #player 2
        try:
            if field[i,j]==-1 and field[i+1,j]==-1 and field[i+2,j]==-1:
                win.append('player2')
        except: pass
        
        try:
            if field[i,j]==-1 and field[i,j+1]==-1 and field[i,j+2]==-1:
                win.append('player2')
        except: pass
    
        try:
            if field[i,j]==-1 and field[i+1,j+1]==-1 and field[i+2,j+2]==-1:
                win.append('player2')
        except: pass

print(win)
        
        
            
        
        

