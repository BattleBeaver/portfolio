"use client";
import Game from "@/components/Game";
import { useState } from "react";
// import React from "react";

enum CurPlayer {
  first = "X",
  second = "O",
}

type Field = Array<Array<string>>;

const DEFAULT_FIELD_SIZE = 3;

const GamePage = () => {
  const [fieldSize, setFieldSize] = useState<number>(3);
  const [field, setField] = useState<Field>(
    new Array(DEFAULT_FIELD_SIZE).fill(new Array(DEFAULT_FIELD_SIZE).fill(""))
  );
  const [curPlayer, setCurPlayer] = useState(CurPlayer.first);
  const [winner, setWinner] = useState("");

  const checkHorizontally = (array: Field) => {
    for (const row of array) {
      if (row.every((cell) => cell === row[0] && cell !== "")) {
        return true;
      }
    }
    return false;
  };

  const checkVertically = (array: Field) => {
    const rotatedField = [];

    for (let rowIdx = 0; rowIdx < array.length; rowIdx++) {
      let colIdx = 0;
      const newRow: string[] = [];
      while (colIdx < array.length) {
        newRow.push(array[colIdx][rowIdx]);
        colIdx++;
      }
      rotatedField.push(newRow);
    }
    return checkHorizontally(rotatedField);
  };

  const checkDiagonal = (array: Field) => {
    const diagonalField = [];

    let rowIdx = 0;
    let colIdx = 0;
    let newRow = [];

    while (rowIdx < array.length) {
      newRow.push(array[rowIdx][colIdx]);
      rowIdx++;
      colIdx++;
    }

    diagonalField.push(newRow);

    rowIdx = 0;
    colIdx = array.length - 1;
    newRow = [];

    while (rowIdx < array.length) {
      newRow.push(array[rowIdx][colIdx]);
      rowIdx++;
      colIdx--;
    }

    diagonalField.push(newRow);

    return checkHorizontally(diagonalField);
  };

  const checkForWin = (array: Field) => {
    if (
      checkHorizontally(array) ||
      checkVertically(array) ||
      checkDiagonal(array)
    ) {
      setWinner(curPlayer);
    }
  };

  const onCellClick = (rowIdx: number, cellIdx: number) => {
    if (field[rowIdx][cellIdx] === "" && winner === "") {
      const newField = JSON.parse(JSON.stringify(field));
      newField[rowIdx][cellIdx] = curPlayer;
      setCurPlayer(
        curPlayer === CurPlayer.first ? CurPlayer.second : CurPlayer.first
      );
      setField(newField);
      checkForWin(newField);
    }
  };

  const restartGame = (size: number) => {
    setField(new Array(size).fill(new Array(size).fill("")));
    setCurPlayer(CurPlayer.first);
    setWinner("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h1 style={{ opacity: winner === "" ? 0 : 100 }}>Winner is {winner}</h1>
      <Game onCellClick={onCellClick} field={field} />
      <button
        className="border p-2 "
        onClick={() => {
          restartGame(fieldSize);
        }}
      >
        Start New Game
      </button>
      <p className="controls">
        <span>Field size: </span>
        <input
          className="text-black"
          value={fieldSize}
          type="number"
          min={1}
          max={7}
          onChange={(e) => {
            const newFieldSize = parseInt(e.target.value);
            if (newFieldSize && newFieldSize > 1) {
              setFieldSize(newFieldSize);
            }
          }}
        />
      </p>
    </div>
  );
};

export default GamePage;
