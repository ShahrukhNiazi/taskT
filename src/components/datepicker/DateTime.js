import React, { useState } from 'react';
import { View, Pressable, Platform, StyleSheet, Text, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Images } from '../../utilites/images';

export const Dateset = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <>
      <View style={styles.dflex}>
        <View>
          <Text style={styles.labelText}>Start date</Text>
          <Pressable style={styles.datestyling} onPress={showDatepicker}>
            <Text style={styles.text}>14 Sep 2021</Text>
              <Image source={Images.Pictures.date} style={styles.icon1} />
          </Pressable>
        </View>
        <View>
          <Text style={styles.labelText}>End date</Text>
          <Pressable style={styles.datestyling} onPress={showDatepicker}>
            <Text style={styles.text}>14 Sep 2021</Text>
            <Image source={Images.Pictures.date} style={styles.icon1} />
          </Pressable>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </>

  );
};



const styles = StyleSheet.create({

  dflex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  labelText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500'
  },
  datestyling: {
    height: 60,
    width: 160,
    marginTop: 10,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 4,
    padding: 9,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position:'relative',
  },
  icon1: {
    width: 15,
    height: 15,
    objectfit: 'cover',
    position:'absolute',
    right:13,


  }

});
