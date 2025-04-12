import React from 'react'
import UP from '../../../../accets/PolygonUp.svg';
import DOWN from '../../../../accets/PolygonDown.svg';
import NONE from '../../../../accets/None.svg';
// добавить в проект иконки и импортировать
const downIcon = DOWN;
const upIcon = UP

const noneIcon = NONE

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down .../*up*/ // исправить
  return sort === down ? up : sort === up ? '' : down
  
}

const SuperSort: React.FC<SuperSortPropsType> = (
  {
    sort, value, onChange, id = 'hw15',
  }
) => {
  const up = '0' + value
  const down = '1' + value

  const onChangeCallback = () => {
    const param = pureChange(sort, down, up)
    onChange(param)
  }

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon

  return (
    <span
      id={id + '-sort-' + value}
      onClick={onChangeCallback}
      style={{ position: 'relative' }}
    >
      {/*   сделать иконку*/}
      <img id={id + '-icon-' + sort}
        src={icon}
        alt={icon}
        style={{ cursor: 'pointer', width: '15px', height: '15px' }}
      />

      {/* {icon}*/} {/*а это убрать*/}
    </span>
  )
}

export default SuperSort
