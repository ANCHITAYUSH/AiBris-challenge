import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiIcon, EuiText } from "@elastic/eui"
import { staticImages } from '../shared/images'

function Dashboard() {

  return <> 
    <EuiFlexGroup gutterSize="l" style={{ marginTop: '1rem' }}>
      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={`logoBeats`} />}
          title={`Random Number Card`}
          description="Replace the text here with a random number between 1 and 100 every 5 seconds and on click"
          onClick={() => {}}
        />
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={`logoCloud`} />}
          title={`Flyout Form`}
          description="When clicked flyout a form with 2 input fields and submit button"
          onClick={() => {}}
        />
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={`logoLogging`} />}
          title={`External Feed`}
          description="Replace the text here with a random fact from the following feed (https://catfact.ninja/fact) on load and when clicked."
          onClick={() => {}}
        />
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xxl" type={`logoKibana`} />}
          title={`Notifications`}
          description="When clicked pop up a success toast notifcation"
          onClick={() => {}}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiText style={{ marginTop: '2rem' }}>
      <p>Use the following UI library <a href="https://eui.elastic.co/v34.6.0/" target="_blank">eui.elastic.co</a> to form part of your solution</p>

      <p>Bonus challenge. Using the following <a href={staticImages.design} target="_blank">design</a>, retheme the site similarly to that found in the design, utilising the same colour palettes and look and feel. </p>
    </EuiText>
  </>
}

export default Dashboard