import React from 'react';
import { ActivityType } from '../../../api/queries/getActivity';

type DateListItemProps = { activity?: ActivityType; date: string };

const DateListItem: React.FC<DateListItemProps> = (props) => {
  return (
    <>
      {props.activity ? (
        <div>
          <p>Name</p>
          <p>{props.date}</p>
          <p>Pluppad!</p>
        </div>
      ) : (
        <div>
          <p>{props.date}</p>
        </div>
      )}
    </>
  );
};

export default DateListItem;
