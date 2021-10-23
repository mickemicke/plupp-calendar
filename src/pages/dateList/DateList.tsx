import React from 'react';
import { ActivityType } from '../../api/queries/getActivity';
import DateListItem from './components/DateListItem';

type DateListProps = { activities?: ActivityType[]; dates: string[] };

const DateList: React.FC<DateListProps> = (props): JSX.Element => {
  const { activities = [] } = props;

  const findActivity = (date: string) => {
    const activityResult = activities.filter((activity) => activity.date.toLocaleDateString() === date);

    return activityResult.length > 0 ? activityResult[0] : undefined;
  };

  return (
    <div>
      {props.dates.map((date) => (
        <DateListItem key={date} date={date} activity={findActivity(date)} />
      ))}
    </div>
  );
};

export default DateList;
