export default function Docs() {
  return (
    <div className="min-h-screen bg-red-500 text-white p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Docs Page</h1>

      {/* Overview */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🎮 Overview</h2>
        <p>
          Tic Tac Toe is a simple two-player strategy game played on a 3×3 grid.
          Players take turns marking a cell with X or O. The goal is to align
          three symbols in a row (horizontal, vertical, or diagonal).
        </p>
      </section>

      {/* Features */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">⚙️ Features</h2>
        <ul className="list-disc ml-6">
          <li>Display X / O on button click</li>
          <li>Alternating turns between players</li>
          <li>Interactive 3×3 grid</li>
          <li>Real-time updates</li>
        </ul>
      </section>

      {/* How to Play */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🕹️ How to Play</h2>
        <ol className="list-decimal ml-6">
          <li>Player 1 is X and Player 2 is O</li>
          <li>Players take turns clicking empty cells</li>
          <li>First to align 3 symbols wins</li>
          <li>If grid is full → Draw</li>
        </ol>
      </section>

      {/* Technologies */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Technologies Used</h2>
        <ul className="list-disc ml-6">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
        </ul>
      </section>

      {/* Game Logic */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">📌 Game Logic</h2>
        <p>
          Each cell is a button. When clicked, it checks if the cell is empty,
          assigns X or O, and switches the turn to the next player.
        </p>
      </section>

      {/* Future Improvements */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 ">🚀 Future Improvements</h2>
        <ul className="list-disc ml-6">
          <li>Winner detection</li>
          <li>Reset button</li>
          <li>AI opponent</li>
          <li>Better UI/UX</li>
        </ul>
      </section>
    </div>
  );
}
