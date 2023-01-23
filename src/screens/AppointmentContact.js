import React, { useState } from 'react';
import { View, Pressable, Platform, StyleSheet, Text, Image, TextInput, ScrollView } from 'react-native';
import { InputField } from '../components/InputField/InputField'
import { Selectset } from '../components/selectlist/SelectList';
import { SingleDatepicker } from '../components/singledatepicker/SingleDatepicker';
import CheckBox from '@react-native-community/checkbox';
import { Multiselection } from '../components/multiselectbox/MultiSelectbox';

const PostUser =()=> {
  axios({
   method: 'post',
   url: 'https://office-app.tasktak.com/api/Appointments/getAppointment',
   data:{
 
   },
   header:{
     "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQwN2Q4NTgzYmUzYmM3ZGE5MDE1Zjk2MzFiYTUzNDk1MWVkNDdhZWU1NmIzOTU3Y2ZiMmRlYjM1NTI4YjBlODIzOGUyODA4MmExYmE0M2QxIn0.eyJhdWQiOiIyIiwianRpIjoiZDA3ZDg1ODNiZTNiYzdkYTkwMTVmOTYzMWJhNTM0OTUxZWQ0N2FlZTU2YjM5NTdjZmIyZGViMzU1MjhiMGU4MjM4ZTI4MDgyYTFiYTQzZDEiLCJpYXQiOjE2NDQ5NDE1MDIsIm5iZiI6MTY0NDk0MTUwMiwiZXhwIjoxNjQ2MjM3NTAyLCJzdWIiOiIzMTQxIiwic2NvcGVzIjpbXX0.KnIOYzdi5gT43BhgEMsZ20ycYeX2KqQ6Tw8hSXSqe8sFaqy-twcrB3l5KqeWNJCnKCf7CMe0t49M-4hyZs0rYYpqA4L5ZXa-nRISCZQ8dA0T1YMQIo7keBqVh35KrHYlD5V9DHdgPUvRQ5fXpgiYY3HMNSU_Kmi5LFUP-Gh2tihVnuxAH8bbY48Nlail8mQu28bIU4PWYtoE-eu4nWn-vITdPteTNPWcW7DSMhkhZ71L2jG2hRsn6wsbxNSiG4POhCCWabisM-RrVLzFcUR0sryyAD9JkzJ-qs_5_PTic0b5T4EYbZLRRss7Mw14j9VUu0hvnIAR4Cg6iVZei0fCsHVcqe2NQU4BABf42_Sk6ieskK9KQX7sNKDPUCsJc66mF5ff3FbkRdpDFtHGVdYc8QEj5TlBRTxHIAOXVbhXJKv2obs6rEszTAYfB8zfX1yKD8wYctvQIU4cjwDfiV9ZD2Fb-XWrZIxVhHwpkb3Ym9r4wS_rICiqe9eDSZPXLMG0gwyWITSRgUcEUzH0gyj88TB8-86NIe7pcttRiQrR23DmQFA2_-BiK3w6AY10OZXstjPuz4ZBVGarcQWILag8bQ4ob9nUkQ8NYFlqfGz-4xmAv9lOqgrFrMSTsCPqHd-okAaEKTTrRMkyb5dnYibq-aXmjQOpcGG-XmpxFYQk_3o',
     "Accept": "application/json",
     "content-Type": "application/json",
    }
   
  }).then(function (response){
     console.log("response", JSON.stringify (response.data))

  }).catch( function(error) {
     console.log('error', error)

  }) 

}

const AppointmentContact = () => {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [subject, setsubject] = useState("")
  const [textarea, setTextarea] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [contact, setContact] = useState("")
  const [date, setDate] = useState("")
  const [location, setLocation] = useState("")
  const [repeat, setrepeat] = useState("")



  return (
    <>
      <View style={styles.maincontainer} >
        <View>
          <Text style={styles.labelText}>New appointment</Text>
        </View>
        <ScrollView>
          <View>
            <InputField title='Subject' name="subject"/>
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
            <Text style={styles.labelText}>
            Leads
            </Text>
            <Selectset />
          </View>
          <View  >
            <InputField title='Name' />
          </View>
          <View >
            <InputField title='Email ' />
          </View>
           <View >
            <InputField title='Phone (Ex: +1 69 1234 5678) ' />
          </View>
          <View >
            <InputField title='Contact' />
          </View>
          <View style={styles.MarginTop}>
            <SingleDatepicker />
          </View>
          <View >
            <InputField title='Appointment Location (optional)' />
          </View>
          <View style={styles.MarginTop}>
            <Text style={styles.labelText}>
            Attendees
            </Text>
            <Multiselection />
          </View>
          <View style={styles.MarginTop}>
            <Text style={styles.labelText}>
              Appointment Type
            </Text>
            <Selectset />
          </View>
          <View style={styles.MarginTop}>
            <Text style={styles.labelText}>
             Repeat every
            </Text>
            <Selectset />
          </View>
           <View >
            <InputField title='Total Cycles ' />
          </View>
          <View >
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
