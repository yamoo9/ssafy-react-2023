import classes from '@/styles/Game.module.css';

function History() {
  return (
    <div className={classes.History}>
      <ol>
        <li>
          <button type="button">게임 시작!</button>
        </li>
      </ol>
    </div>
  );
}

export default History;
