import React, { useLayoutEffect } from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  Container,
  Pressable,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import customerpic from '../../../assets/icons/customer.png';
import { getCategoryName } from '../../data/MockDataAPI';

export default function IntroScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const goUser = (item) => {
    navigation.navigate('User', { item });
  };
  const goShop = (item) => {
    navigation.navigate('Shop', { item });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'top',
      }}
    >
      <Text style={localStyles.welcome}>Welcome</Text>

      <Pressable style={localStyles.button} onPress={() => goUser()}>
        <Image
          style={localStyles.img}
          source={require('../../../assets/icons/customer.png')}
        />
        <View style={styles.SeparatorLine} />
        <Text style={localStyles.text} numberOfLines={2}>
          Customer
        </Text>
      </Pressable>
      <Pressable style={localStyles.button} onPress={() => goShop()}>
        <Image
          style={localStyles.img}
          source={require('../../../assets/icons/shop.png')}
        />
        <Text style={localStyles.text}>Vendor</Text>
      </Pressable>
    </View>
  );
}

const localStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 80,
    width: 300,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#FAE8EE',
    marginTop: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FAE8EE',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },

  img: {
    justifyContent: 'left',
    height: 50,
    width: 50,
  },

  welcome: {
    textAlign: 'center',
    fontSize: 50,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#F2994A',
    marginBottom: 50,
    marginTop: 50,
    paddingTop: 100,
  },
});
