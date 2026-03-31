export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-yellow-50 rounded-lg shadow-lg mt-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-red-700">About the Game</h1>
      <p className="text-lg mb-6 text-red-900">
        Welcome to our exciting two-player game! This game is designed to bring fun and friendly competition to you and your friends. Here’s what you need to know:
      </p>
      <ul className="text-left text-red-800 list-disc list-inside space-y-3 mb-6">
        <li>
          <strong>Objective:</strong> Players take turns marking spaces in a 3x3 grid. The goal is to align your marks in a row, column, or diagonal before your opponent does.
        </li>
        <li>
          <strong>How to Play:</strong> Each player picks a turn and marks an empty square on the grid during their move. Keep an eye on your score and strategize to win!
        </li>
        <li>
          <strong>Features:</strong>
          <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
            <li>Real-time score tracking for both players.</li>
            <li>Clear indication of whose turn it is.</li>
            <li>A simple, intuitive interface designed for an enjoyable gaming experience.</li>
          </ul>
        </li>
        <li>
          <strong>New Game:</strong> Reset the board anytime with the "New Game" button to start fresh!
        </li>
      </ul>
      <p className="text-red-900 font-semibold text-lg">
        Whether you’re a casual player or a competitive challenger, this game offers quick rounds and lots of excitement.
      </p>
      <p className="mt-6 text-red-700 font-bold">Enjoy playing, and may the best player win!</p>
    </div>
  );
}
