import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars'; // I can't use expo-calendar

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(''); // empty string
  const [plans, setplans] = useState([]); // [] means is an empty array, use 'plans' to store an array of 'plans' --> the 'setPlans' will update the state
  const [newPlanText, setNewPlanText] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const addPlan = () => {
    if (!selectedDate || !newEventText) { // /selectedDate --> if selectedDate is null/undefined/fase, ||--> or, 
      return; // Here is empty because I don't add empty plans or plans without a selected date
    }

    // Create a new plan OBJECT!
    const newPlan = {
      date: selectedDate,
      text: newPlanText,
    };

    // Update with the new plan
    setplans((prevPlans) => [...prevPlans, newPlan]);

    // Clear the input field
    setNewPlanText('');
  };

  // Create an object to mark dates with plans
  const markedDates = plans.reduce((accumulator, plan) => {
    accumulator[plan.date] = { 
        selected: true, 
        marked: true, 
    };
    return accumulator;
  }, {});

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress} 
        markedDates={markedDates}
        markingType="multi-dot"
      />
      <View style={styles.plansContainer}>
        <Text style={{fontSize: 16}}>Add your Plans for {selectedDate}:</Text>
        {/* Display plans for the selected date */}
        {plans
          .filter((plan) => plan.date === selectedDate)
          .map((plan, index) => (
            <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold', marginTop: 10}} key={index}>{plan.text}</Text>
          ))}
        {/* Input field to add new plans */}
        <TextInput
          style={styles.input}
          placeholder="Add new plan"
          value={newPlanText}
          onChangeText={(text) => setNewPlanText(text)}
        />
        <TouchableOpacity title="Add" onPress={addPlan} style= {styles.button}>
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plansContainer: {
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: 'orange', 
    borderWidth: 3,
    borderRadius: 10, 
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: 'orange', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default CalendarScreen;

//npm install -g expo-cli
//npm install react-native-calendars

