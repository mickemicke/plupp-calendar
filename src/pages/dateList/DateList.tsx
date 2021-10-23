import React from 'react';
import DateListItem from './components/DateListItem';

type DateListProps = { dates: string[] };

const DateList: React.FC<DateListProps> = (props): JSX.Element => (
  <div>
    {props.dates.map((date) => (
      <DateListItem date={date} />
    ))}
  </div>
);

export default DateList;
