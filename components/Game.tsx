type GameProps = {
  field: string[][];
  onCellClick: (row: number, cell: number) => void;
};

const Game = (props: GameProps) => {
  return (
    <div className="flex flex-col justify-center items-center p-2">
      {props.field.map((row, rowIdx) => {
        return (
          <div className="flex flex-row" key={rowIdx}>
            {row.map((cell, cellIdx) => {
              return (
                <div
                  onClick={() => props.onCellClick(rowIdx, cellIdx)}
                  className="flex justify-center items-center border w-10 h-10 cursor-pointer bg-gray-300 p-3 text-black"
                  key={cellIdx}
                >
                  {cell}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Game;
