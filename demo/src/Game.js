import React from "react";
import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isP1: true,
      timer: 10,
      votes: Array(9).fill(null),
      squares: Array(9).fill(null)
    };
  }

  handleClick(i) {
    this.vote(i);
  }

  vote(i) {
    this.calculateWinner(this.state.squares);
    this.sendVote(i);
    this.refreshBoard();
  }

  sendVote(i) {
    const b = this.state.votes;
    b[i] += 1;
    this.setState({ votes: b });
  }

  refreshBoard() {
    const newBoard = this.callRefresh();
    if (newBoard == "wait") {
      this.refreshBoard();
    } else {
      this.setState({ timer: 10 });
    }
  }

  callRefresh() {
    var max = 0;
    const votes = this.state.votes;
    for (var i = 0; i < votes.length; i++) {
      if (votes[i] > votes[max]) {
        max = i;
      }
    }
    const sqs = this.state.squares;
    let isP1 = this.state.isP1;
    sqs[max] = isP1 ? "X" : "O";
    this.setState({ squares: sqs });
    this.setState({ isP1: !isP1 });
    this.setState({ votes: Array(9).fill(null) });
    return this.state.squares;
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    console.log(this.props.match.params.id);
    const winner = this.calculateWinner(this.state.squares);

    // const moves = history.map((step, move) => {
    //   const desc = move ? "Go to move #" + move : "Go to game start";
    //   return (
    //     <li key={move}>
    //       <button onClick={() => this.jumpTo(move)}>{desc}</button>
    //     </li>
    //   );
    // });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "You are team: " + (this.state.isP1 ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}

export default Game;
