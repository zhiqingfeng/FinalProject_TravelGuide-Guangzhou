import { ScrollView, StyleSheet, Image, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { categoriesData } from '../constants';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {

  const navigation = useNavigation();
  const handlePressCategory = (categoryId, categoryTitle) => { //categoryId for unique identifier
    if(categoryTitle == 'Sightseeing'){
      navigation.navigate('Sightseeing')
    }else if (categoryTitle == 'Food'){
      navigation.navigate('Food')
    }else if (categoryTitle == 'Cultural'){
      navigation.navigate('Cultural')
    }else{
      navigation.navigate('Transportation')
    }
  };

  return (
    <View style = {styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Categories</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView>
          <TouchableOpacity>
            
          </TouchableOpacity>
        </SafeAreaView>
      

        <View style={styles.rowContainer}>
        {categoriesData.map((cat, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.categoryContainer} 
            onPress={()=> handlePressCategory(cat.id, cat.title)}
          >
            <Image source={cat.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{cat.title}</Text>
          </TouchableOpacity>
        ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginVertical: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  headerText: {
    color: 'black',//'#f3f4f6',//'#ff4500',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft:14,
    marginTop:10,
    marginBottom: 10
  },
  scrollContainer: {
    paddingHorizontal: 15,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  categoryContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: wp(1.5),
    height: wp(41), // Adjust the height as needed
  },
  categoryImage: {
    width: wp(28),
    height: wp(35),
    borderRadius: 10,
  },
  categoryText: {
    fontSize: wp(3.5),
    color: '#8c92ac',
    fontWeight: '500',
    marginTop: 5,
  }
});

//const backgroundColor = theme.bg(0.8) //Sets background color with 80% opacity
//const textColor = theme.text // Gets the color for text elements

//Vertical or Horizontal Scrolling: <ScrollView horizontal> {/* Horizontal scrolling content */}
//