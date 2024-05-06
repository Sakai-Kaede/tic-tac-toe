import './App.css';
import { useState } from 'react';

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// 親コンポーネントで子コンポーネントの状態を一括管理する
function Board() {
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} onSquareClick={() => {}} />
        <Square value={squares[2]} onSquareClick={() => {}} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => {}} />
        <Square value={squares[4]} onSquareClick={() => {}} />
        <Square value={squares[5]} onSquareClick={() => {}} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => {}} />
        <Square value={squares[7]} onSquareClick={() => {}} />
        <Square value={squares[8]} onSquareClick={() => {}} />
      </div>
    </>
  );
}

export default Board;
