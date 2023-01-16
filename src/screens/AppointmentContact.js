import React, { useState } from 'react';
import { View, Pressable, Platform, StyleSheet, Text, Image, TextInput, ScrollView } from 'react-native';
import { InputField } from '../components/InputField/InputField'
import { Selectset } from '../components/selectlist/SelectList';
import { SingleDatepicker } from '../components/singledatepicker/SingleDatepicker';
import CheckBox from '@react-native-community/checkbox';
import { Images } from '../../utilites/images';


const AppointmentContact = () => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <>
      <View style={styles.maincontainer}>
        <View>
          <Text style={styles.labelText}>New appointment</Text>
        </View>
        <ScrollView>
          <View>
            <InputField title='Subject' />
          </View>
          <View style={styles.MarginTop}>
            <Text style={styles.labelText}>
              Description
            </Text>
            <TextInput
              style={styles.textarea}
              multiline={true}
              numberOfLines={4} />
          </View>
          <View style={styles.MarginTop}>
            <Text style={styles.labelText}>
              Related
            </Text>
            <Selectset />
          </View>
          <View style={styles.MarginTop}>
            <SingleDatepicker />
          </View>
          <View>
            <InputField title='Appointment Location (optional)' />
          </View>
          <View style={styles.MarginTop}>
            <Text style={styles.labelText}>
              Repeat every
            </Text>
            <Selectset />
          <Text style={styles.para}>
              Please mark the checkboxs as checked if you want selected attendes and contact to
              recieve reminders eg. if set 30 minutes before the appointment start.
              Note that this feature requires cron job to be configured.
            </Text>
          </View>
          <View style={styles.checkmain}>
            <View style={styles.dflex}>
              <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={styles.checkText}> SMS Notification</Text>
              </View>
              <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={styles.checkText}>Email Notification</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.labelText}>
              Appointment notes
            </Text>
            <TextInput
              style={styles.textarea}
              multiline={true}
              numberOfLines={4} />
          </View>

        </ScrollView>
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
    fontWeight: '500',
    textTransform: 'capitalize'
  },
  maincontainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  textarea: {
    marginTop: 10,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 4,
    padding: 10,
  },
  MarginTop: {
    marginTop: 20,
  },
  para: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 20
  },
  checkedBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  checkText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    textTransform: 'capitalize'
  },
  checkmain: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15
  }
});


export default AppointmentContact;
