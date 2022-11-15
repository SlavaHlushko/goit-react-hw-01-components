import PropTypes from 'prop-types';
import {
  StatContainer,
  StatList,
  StatTitle,
  StatListItem,
  ItemLabel,
  ItemQuantity,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatContainer>
      {title !== undefined && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem key={id}>
              <ItemLabel>{label}</ItemLabel>
              <ItemQuantity>{percentage}%</ItemQuantity>
            </StatListItem>
          );
        })}
      </StatList>
    </StatContainer>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object.isRequired),
  title: PropTypes.string,
};
