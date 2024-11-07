import * as React from 'react';
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

type ProfileData = {
  name: string;
  email: string;
  bio: string;
  phoneNumber: string;
};

const ProfileAvatar: React.FC = () => (
  <Avatar.Icon
    size={80}
    icon="account"
    style={styles.avatar}
  />
);

const EditProfileComponent: React.FC = () => {
  const [profile, setProfile] = React.useState<ProfileData>({
    name: '',
    email: '',
    bio: '',
    phoneNumber: '',
  });

  const handleSave = () => {
    console.log('Profile data:', profile);
  };

  return (
    <Card style={styles.card}>
      <View style={styles.headerContainer}>
        <ProfileAvatar />
        <Text variant="headlineMedium" style={styles.title}>Edit Profile</Text>
      </View>
      <Card.Content>
        <View style={styles.inputContainer}>
          <TextInput
            label="Full Name"
            value={profile.name}
            onChangeText={(text) => setProfile({ ...profile, name: text })}
            mode="outlined"
            style={styles.input}
          />
          
          <TextInput
            label="Email"
            value={profile.email}
            onChangeText={(text) => setProfile({ ...profile, email: text })}
            mode="outlined"
            keyboardType="email-address"
            style={styles.input}
          />

          <TextInput
            label="Phone Number"
            value={profile.phoneNumber}
            onChangeText={(text) => setProfile({ ...profile, phoneNumber: text })}
            mode="outlined"
            keyboardType="phone-pad"
            style={styles.input}
          />

          <TextInput
            label="Bio"
            value={profile.bio}
            onChangeText={(text) => setProfile({ ...profile, bio: text })}
            mode="outlined"
            multiline
            numberOfLines={4}
            style={styles.input}
          />
        </View>
      </Card.Content>

      <Card.Actions style={styles.actions}>
        <Button mode="outlined" onPress={() => console.log('Cancelled')}>
          Cancel
        </Button>
        <Button mode="contained" onPress={handleSave}>
          Save Changes
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    marginTop: 8,
  },
  avatar: {
    backgroundColor: '#2196F3',
  },
  inputContainer: {
    gap: 16,
    marginTop: 16,
  },
  input: {
    backgroundColor: 'transparent',
  },
  actions: {
    padding: 16,
    justifyContent: 'flex-end',
    gap: 8,
  },
});

export default EditProfileComponent;