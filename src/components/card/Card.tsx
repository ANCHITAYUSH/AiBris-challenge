import React from 'react';
import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTitle,
  EuiSpacer,
  EuiIcon,
} from '@elastic/eui';

import './Card.scss';

export interface CardProps {
  title: string;
  iconType: string;
  currentScore: string;
  potentialSavings: string;
  unit: string;
  isSelected: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  iconType,
  currentScore,
  potentialSavings,
  unit,
  isSelected,
}) => {

  return (
    <EuiCard
      title
      paddingSize="none"
      className={`cardContainer ${ isSelected ? `selected` : ``}`}
      display="plain"
      hasBorder={true}
    >
      <EuiFlexGroup direction="column" alignItems="center" gutterSize="s">
        <EuiFlexGroup direction='row' alignItems="center">
            <EuiFlexItem grow={false} className={"icon"}>
                <EuiIcon type={iconType} size="xl" />
            </EuiFlexItem>

            <EuiFlexItem grow={false} className={`title ${ isSelected ? `selected` : ``}`}>
                <h2>{title}</h2>
            </EuiFlexItem>  
        </EuiFlexGroup>

        <EuiSpacer size="m" />

        <EuiFlexGroup direction='row' className={`primaryColour ${ isSelected ? `selected` : ``}`} alignItems="center">
            <EuiFlexItem grow={2} className={'valueBox'}>
                <EuiText className={"currentScore"}>
                    {currentScore}
                </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={1}>
                <EuiText className={"label"}>
                    current score
                </EuiText>
            </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="m" />

        <EuiFlexGroup direction='row' className={`secondaryColour ${ isSelected ? `selected` : ``}`} alignItems="center">
            <EuiFlexItem grow={2} className={'valueBox'}>
                <EuiText className={"potentialSavings"}>
                    {potentialSavings}
                </EuiText>
                <EuiText className={"unit"}>
                    {unit}
                </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={1}>
                <EuiText className={"label"}>
                    potential savings
                </EuiText>
            </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexGroup>
    </EuiCard>
  );
};

export default Card;
