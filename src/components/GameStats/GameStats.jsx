export default function GameStats({ games }) {
  const getTotalPoints = (game) => {
    const totalPoints = game.turns.reduce(
      (total, turn) => total + turn.points,
      0
    )
    return totalPoints
  }

  const sortedGames = games.sort((a, b) => getTotalPoints(b) - getTotalPoints(a))

  const mappedGames = sortedGames.map((game, index) => (
    <div style={{
      margin: '10px', border: 'solid 1px', padding: '3px'
    }}>
      <div>
        <span>Rank: </span>{index + 1}
      </div>
      <div>
        <span>User: </span>{game.user.username}
      </div>
      <div>
        <span>Turns: </span>{game.turns.length}
      </div>
      <div>
        <span>Points: </span>
        {game.turns.reduce(
          (total, turn) => total + turn.points,
          0
        )}

      </div>
    </div>
  ))

  return (
    <div>
      {mappedGames}
    </div>
  )
}