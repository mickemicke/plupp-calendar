import React from 'react';

type DateListItemProps = { date: string };

const DateListItem: React.FC<DateListItemProps> = (props) => (
  <div>
    <p>Name</p>
    <p>{props.date}</p>
    <p>Pluppad?</p>
  </div>
);

export default DateListItem;
