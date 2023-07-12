import './Game.css';

export default function Game() {
  return (
    <div className="Game">
      <div className="Board">
        <h2 className="Status">플레이어 : 🟨</h2>
        {/* <h2>승자! : 🟨</h2> */}
        {/* <h2>비겼어요... 😳</h2> */}
        <div className="Squares">
          <button className="Square" disabled>
            🟨
          </button>
          <button className="Square"></button>
          <button className="Square"></button>
          <button className="Square"></button>
          <button className="Square" disabled>
            ⚫️
          </button>
          <button className="Square"></button>
          <button className="Square"></button>
          <button className="Square"></button>
          <button className="Square"></button>
        </div>
      </div>
      <div className="History">
        <ol>
          <li>
            <button type="button">게임 시작</button>
          </li>
        </ol>
      </div>
    </div>
  );
}
