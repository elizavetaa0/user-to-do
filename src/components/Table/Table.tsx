import { TableRow } from '..';
import { TableProps } from './type';
import style from './style.module.scss';
import classNames from 'classnames';
import { TDevice } from '../../hooks/endpoints';
import useDevice from '../../hooks/useDevice';

export function Table({users, todos}: TableProps) {
  const getTodoCount = (userId: number) => todos.filter(todo => todo.userId === userId).length;

  const device = useDevice();

  const headerClass = classNames(style.table__header, {
    [style.table__header_mobile]: device === TDevice.MOBILE
  });
  
  return (
    <table className={style.table}>
      <thead>
        <tr>
        <th className={headerClass}>#</th>
        <th className={headerClass}>Username</th>
        <th className={headerClass}>To-Do Count</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <TableRow
            key={user.id}
            index={index + 1}
            username={user.username}
            email={user.email}
            todoCount={getTodoCount(user.id)}
          />
        ))}
      </tbody>
    </table>
  )
}