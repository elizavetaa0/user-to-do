import { TableRowProps } from './type';
import { ReactSVG } from 'react-svg';
import User from '../../assets/svg/user.svg';
import style from './style.module.scss';
import useDevice from '../../hooks/useDevice';
import classNames from 'classnames';
import { TDevice } from '../../hooks/endpoints';

export function TableRow({index, username, email, todoCount}: TableRowProps) {
  const device = useDevice();

  const rowClass = classNames(style.table__row, {
    [style.table__row_mobile]: device === TDevice.MOBILE
  });

  const iconClass = classNames(style.icon, {
    [style.icon_mobile]: device === TDevice.MOBILE
  });

  const columnClass = classNames(style.table__column_container, {
    [style.table__column_container_mobile]: device === TDevice.MOBILE
  });

  const rowContainerClass = classNames(style.table__row_container, {
    [style.table__row_container_mobile]: device === TDevice.MOBILE
  });

  const elementClass = classNames(style.table__column_element, {
    [style.table__column_element_mobile]: device === TDevice.MOBILE
  });

  const accentClass = classNames(style.table__column_element_accent, {
    [style.table__column_element_accent_mobile]: device === TDevice.MOBILE
  });

  return(
    <tr className={style.row}>
      <td className={rowClass}>{index}</td>
      <td className={rowContainerClass}>
        <ReactSVG src={User} className={iconClass} />
        <div className={columnClass}>
          <span className={elementClass}>{username}</span>
          <span className={accentClass}>{email}</span>
        </div>
      </td>
      <td className={classNames({ [style['table__row_mobile']]: device === TDevice.MOBILE })}>{todoCount}</td>
    </tr>
  )
}