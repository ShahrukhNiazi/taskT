/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Images } from '././src/utilites/images';
import { InputField } from '././src/components/InputField/InputField';
import { Dateset } from './src/components/datepicker/DateTime';
import { Selectset } from '././src/components/selectlist/SelectList';
import { Multiselection } from '././src/components/multiselectbox/MultiSelectbox';
import { FileAttached } from '././src/components/filesUpload/FilesUpload.js';




const App = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <View style={styles.maincontainer}>
      <View style={styles.dflex}>
        <View>
          <Text style={styles.headingh1}>NEWTASK </Text>
        </View>
        <TouchableOpacity style={styles.box}>
          <Image source={Images.Pictures.cross} style={styles.icon1} />
        </TouchableOpacity>
       </View>
      <ScrollView style={styles.formMain}>
        <View sytle={styles.MarginTop}>
          <View>
            <Text style={styles.labelText}>Subject</Text>
            <InputField />
          </View>
        </View>
        <View style={styles.MarTop}>
          <View>
            <Text style={styles.labelText}>Hourly Rate</Text>
            <Selectset />
          </View>
        </View>
        <View style={[styles.MarTop]}>
          <View style={styles.dflex}>
            <Dateset />
          </View>
        </View>
        <View style={styles.MarTop}>
          <Text style={styles.labelText}>Priority</Text>
          <Selectset />
        </View>
        <View style={styles.MarTop}>
          <Text style={styles.labelText}>Repeat every</Text>
          <Selectset />
        </View>
        <View style={styles.MarTop}>
          <Text style={styles.labelText}>Related To</Text>
          <Selectset />
        </View>
        <View style={styles.MarTop}>
          <Text style={styles.labelText}>Assigned to</Text>
          <Multiselection />
        </View>
        <View style={styles.MarTop}>
          <View style={styles.checkedBox}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <View>
              <Text style={styles.labelText}> estimated to</Text>
            </View>
          </View>
          <View>
             <Selectset />
          </View>
          <View style={[styles.MarTop]}>
            <View>
              <Text style={styles.labelText}>Add attachment</Text>
            </View>
            <FileAttached />
          </View>
          <View style={styles.MarTop}>
            <View>
              <Text style={styles.labelText}>Task Description</Text>
            </View>
            <View>
              <TextInput
                style={styles.textarea}
                multiline={true}
                numberOfLines={4} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
   },
  dflex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  headingh1: {
    fontSize: 20,
    fontWeight: "500",
    color: '#333',
  },

  icon1: {
    width: 20,
    height: 20,
    objectfit: 'cover',
  },
  labelText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500'
  },
  MarginTop: {
    marginTop: 40,
  },
  formMain: {
    marginTop: 20,
  },
  MarTop: {
    marginTop: 30,
  },
  checkedBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  fileAttached: {
    height: 60,
    marginTop: 10,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 4,
    fontSize: 17,
    padding: 5,
    backgroundColor: '#fff',
  },
  textarea: {
    marginTop: 10,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 4,
  },
  box: {
    width: 30,
    height: 30,
    backgroundColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  icon1: {
    width: 15,
    height: 15,
    objectfit: 'cover',
  }

});


