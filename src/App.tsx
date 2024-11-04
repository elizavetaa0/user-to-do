import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { TTodos, TUser } from './utils/type';
import { getTodos, getUsers } from './services/api';
import { Table } from './components';
import useDevice from './hooks/useDevice';
import { TDevice } from './hooks/endpoints';
import style from '../src/assets/styles/index.module.scss';

function App() {
  const [users, setUsers] = useState<TUser[]>([]);
  const [todos, setTodos] = useState<TTodos[]>([]);
  const device = useDevice();

  const containerClass = classNames(style.container, {
    [style.container__mobile]: device === TDevice.MOBILE,
    [style.container__tablet]: device === TDevice.TABLET,
  });

  const titleClass = classNames(style.title, {
    [style.title__mobile]: device === TDevice.MOBILE
  });

  const subtitleClass = classNames(style.subtitle, {
    [style.subtitle__mobile]: device === TDevice.MOBILE
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedUsers, fetchedTodos] = await Promise.all([
          getUsers(),
          getTodos(),
        ]);
        setUsers(fetchedUsers);
        setTodos(fetchedTodos);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={containerClass}>
      <h1 className={titleClass}>User To-Do Table</h1>
      <p className={subtitleClass}>User task table for effective planning.</p>
      <Table users={users} todos={todos} />
    </div>
  );
}

export default App;
