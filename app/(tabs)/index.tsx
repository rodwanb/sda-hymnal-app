import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import HymnList from '@/components/HymnList';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <HymnList path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
