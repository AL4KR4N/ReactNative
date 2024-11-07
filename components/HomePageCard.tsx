import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import type { Props as AvatarIconProps } from 'react-native-paper/lib/typescript/components/Avatar/AvatarIcon';

// Define the props type for LeftContent
const LeftContent: React.FC<Partial<AvatarIconProps>> = (props) => (
  <Avatar.Icon {...props} icon="folder" />
);

const MyComponent: React.FC = () => (
  <Card>
    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={LeftContent}
    />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default MyComponent;