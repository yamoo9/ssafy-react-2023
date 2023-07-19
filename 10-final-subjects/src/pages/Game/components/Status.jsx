import { string } from 'prop-types';
import S from '../Game.module.css';

function Status({ message }) {
  return <h2 className={S.Status}>{message}</h2>;
}

Status.propTypes = {
  message: string.isRequired,
};

export default Status;
