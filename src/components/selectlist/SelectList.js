import React from 'react';
import { Text, StyleSheet, View, Image,SafeAreaView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'



export const Selectset = () =>{
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: '1', value: '0', },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers', disabled: true },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ]
    return (
        <>
        <SafeAreaView>
          <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              defaultOption={{ key: '1', value: '0' }}
              save="value"
              boxStyles={{
                height: 60,
                marginTop: 10,
                shadowRadius: 2,
                borderWidth: 1,
                borderColor: '#E2E2E2',
                borderRadius: 4,
                padding: 3,
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
              }}
              inputStyles={{ fontSize: 17, color: '#ccc' }}
            />
       </SafeAreaView>
       </>
      );

}

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
  }

});
