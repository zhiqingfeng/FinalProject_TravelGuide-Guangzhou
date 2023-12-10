import { ScrollView, StyleSheet, Image, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
//import { toolData } from "../constants";

export default function UsefulTools(){
    const navigation = useNavigation();
    const handlePressToolCategory = (toolId,toolTitle) => {
        if(toolTitle == 'Metro'){
            navigation.navigate('Metro')
        }else if( toolTitle == 'Bus'){
            navigation.navigate('Bus')
        }else if (toolTitle == 'Flight'){
            navigation.navigate('Flight')
        }else if (toolTitle == 'Train'){
            navigation.navigate('Train')
        }else if (toolTitle == 'Hotel'){
            navigation.navigate('Hotel')
        }else{
            navigation.navigate('Info')
        }
    };
    const toolData = [
      {
          id: 1,
          title: 'Metro',
          image: require('../../assets/images/UsefulTool/Tool_metro.png')
      },
      {
          id: 2,
          title: 'Bus',
          image: require('../../assets/images/UsefulTool/Tool_Bus.png')
      },
      {
          id: 3,
          title: 'Flight',
          image: require('../../assets/images/UsefulTool/Tool_Flight.png')
      },
      {
          id: 4,
          title: 'Train',
          image: require('../../assets/images/UsefulTool/Tool_Train.png')
      },
      {
          id: 5,
          title: 'Hotel',
          image: require('../../assets/images/UsefulTool/Tool_Hotel.png')
      },
      //{
         // id: 6,
          //titel: 'Info',
          //image: require('../../assets/images/UsefulTool/Tool_Info.png')
      //},
  ]

    return(
    <View style = {styles.container}>
      <View style={styles.header}>
        {/*<Text style={[styles.headerText, {color: '#f97316'}]}>Categories</Text>*/}
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
        {toolData.map((cat, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.categoryContainer} 
            onPress={()=> handlePressToolCategory(cat.id, cat.title)}
          >
            <Image source={cat.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{cat.title}</Text>
          </TouchableOpacity>
        ))}
        </View>
      </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({

    container: {
      marginVertical: 1,
    },
    header: {
      marginHorizontal: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 4,
    },
    headerText: {
      fontSize: wp(5),
      fontWeight: '600',
      color: '"8c92ac'
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
      marginHorizontal: wp(2.5),
      height: wp(30), // Adjust the height as needed
    },
    categoryImage: {
      width: wp(13),
      height: wp(13),
      borderRadius: 10,
      marginTop:10
    },
    categoryText: {
      fontSize: wp(3),
      color: '#8c92ac',
      fontWeight: '500',
      marginTop: 5,
    }
  });