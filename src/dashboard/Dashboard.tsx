import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiIcon, EuiText } from "@elastic/eui"
import { staticImages } from '../shared/images'
import Card from '../components/card/Card'
import { useState } from "react"

const cardItems = [
  {
    id: 1,
    title: "Reliability",
    iconType: "lock",
    currentScore: "4%",
    potentialSavings: "7k",
    unit: "Hours / year",
  },
  {
    id: 2,
    title: "Security",
    iconType: "lock",
    currentScore: "76%",
    potentialSavings: "2k",
    unit: "Risk Points",
  },
  {
    id: 3,
    title: "Economics",
    iconType: "currency",
    currentScore: "45%",
    potentialSavings: "$50k",
    unit: "USD / year",
  },
  {
    id: 4,
    title: "User experience",
    iconType: "lock",
    currentScore: "71%",
    potentialSavings: "200k",
    unit: "Hours / year",
  },
  {
    id: 5,
    title: "Environment",
    iconType: "lock",
    currentScore: "49%",
    potentialSavings: "1M",
    unit: "Tco2e / year",
  }
]

function Dashboard() {

  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  return <> 
    <div className="scrollable-wrapper">
      <EuiFlexGroup gutterSize={"m"} style={{ marginTop: '1rem'}}>
        {cardItems.map(item => (
          <EuiFlexItem className="rounded-corner" onClick={() => setSelectedCardId(item.id)}>
            <Card
              title={item.title}
              iconType={item.iconType}
              currentScore={item.currentScore}
              potentialSavings={item.potentialSavings}
              unit={item.unit}
              isSelected={selectedCardId === item.id}
            />
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>
    </div>
    
    <EuiText style={{ marginTop: '2rem' }}>
      <p>Use the following UI library <a href="https://eui.elastic.co/v34.6.0/" target="_blank">eui.elastic.co</a> to form part of your solution</p>

      <p>Bonus challenge. Using the following <a href={staticImages.design} target="_blank">design</a>, retheme the site similarly to that found in the design, utilising the same colour palettes and look and feel. </p>
    </EuiText>
  </>
}

export default Dashboard