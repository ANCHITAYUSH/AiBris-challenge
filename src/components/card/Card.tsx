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

interface CardProps {
  title: string;
  iconType: string;
  currentScore: string;
  potentialSavings: string;
  unit: string;
}

const Card: React.FC<CardProps> = ({
  title,
  iconType,
  currentScore,
  potentialSavings,
  unit,
}) => {
  return (
    <EuiCard
      title
      paddingSize="none"
      className={"cardContainer"}
      display="plain"
    >
      <EuiFlexGroup direction="column" alignItems="center" gutterSize="s">
        <EuiFlexGroup direction='row'>
            <EuiFlexItem grow={false} className={"icon"}>
                <EuiIcon type={iconType} size="xl" />
            </EuiFlexItem>

            <EuiFlexItem grow={false} className={"title"}>
                <EuiTitle size="s">
                    <h3>{title}</h3>
                </EuiTitle>
            </EuiFlexItem>  
        </EuiFlexGroup>

        <EuiSpacer size="m" />

        <EuiFlexGroup direction='row' className='primaryColour' alignItems="center">
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

        <EuiFlexGroup direction='row' className='secondaryColour' alignItems="center">
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
