import React, { useState, useCallback, useContext } from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, Image } from "react-native";
import { Images } from '../../utilites/images';



export const FileAttached = () => {
  return (
    <>
      <View style={styles.fileAttached}>
        <View style={styles.dflex}>
          <TouchableOpacity>
            <Image source={Images.Pictures.uploadfile} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filetag,styles.dflex]}>
            <View>
             <Image source={Images.Pictures.openfile} />
            </View>
           <View style={styles.marginLeft}>
              <Text style={styles.filetxt}>Digital Marketing</Text>
              <Text style={styles.filetxt}>14 mb</Text>
           </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};



const styles = StyleSheet.create({

  dflex: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  fileAttached: {
    marginTop: 10,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 4,
    fontSize: 17,
    padding:10,
    backgroundColor: '#fff',
  },
  filetag:{
    backgroundColor:'#FAFAFA',
    Width:150,
    height:50,
    flexDirection:'column',
    marginLeft:10,
    paddingRight:15,
    paddingLeft:15,
    borderRadius: 4,
  },
  filetxt:{
    fontSize:12,
    color:'#ccc',
  },
  marginLeft:{
    marginLeft:10,
  }

});