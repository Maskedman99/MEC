import React, { Component } from 'react';
import { View, Text, Picker, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';

export class Attendance1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ['Computer Science and Engineering', 'Electronics and Communication Engineering', 'Electrical Engineering', 'Biomedical Engineering'],
            checked: 0,
            sem: 1,
            div: 'A',
            rollno: 0,
        }
      }

  render() {
    return (
    <View style={{backgroundColor: '#000000', flex: 1, borderTopWidth: 1, borderColor:'white'}}>
        <Text style={{marginLeft:10, marginTop:10, color:'white', fontSize:16,marginBottom:10}}>Branch:</Text>
        {
         this.state.data.map((data,key)=>{
           return(
            <View>
            {   
                this.state.checked == key ? 
                    <TouchableOpacity style={styles.btn}>
                        <Image style={styles.img} source={require('../Assets/Checked.png')}/>
                        <Text style={{color:'#4caf50', fontSize:16, marginBottom:5}}>{data}</Text>
                    </TouchableOpacity>
                :
                    <TouchableOpacity onPress = {()=>{this.setState({checked:key})}} style={styles.btn}>
                        <Image style={styles.img} source={require('../Assets/Unchecked.png')}/>
                        <Text style={{color:'white', fontSize:15, marginBottom:5}}>{data}</Text>
                    </TouchableOpacity>
            }
            </View>   
            )})
        }


        <View style = {{flexDirection: 'row'}}>

        <View style = {{flexDirection: 'row', marginLeft: 10,marginTop: 10}}> 
            <Text style={{color:'white', fontSize: 16}}>Semester:               </Text>  
        <Picker
            selectedValue={this.state.sem}
            style={styles.pickr}
            onValueChange={(itemValue, itemIndex) => this.setState({sem: itemValue})}>
            <Picker.Item label="1" value = "1" />
            <Picker.Item label="2" value = "2" />
            <Picker.Item label="3" value = "3" />
            <Picker.Item label="4" value = "4" />
            <Picker.Item label="5" value = "5" />
            <Picker.Item label="6" value = "6" />
            <Picker.Item label="7" value = "7" />
            <Picker.Item label="8" value = "8" />
        </Picker>
        </View>

        {
        this.state.checked == 0 | this.state.checked == 1 ?
            <View style = {{flexDirection: 'row', marginLeft: -65, marginTop: 10}}>
            <Text style={{fontSize: 16, color: 'white',}}>Division:              </Text>
            <Picker
                selectedValue={this.state.div}
                style={styles.pickr}
                onValueChange={(itemValue, itemIndex) => this.setState({div: itemValue})}
                mode='dropdown'>
                <Picker.Item label="A" value = "A" />
                <Picker.Item label="B" value = "B" />
                </Picker>
            </View>    
        :
            
            <Text style={{fontSize:16}}></Text>
        }

        </View>

        <View style = {{marginTop: 20, marginLeft: 10, flexDirection: 'row'}} >
            <Text style = {{color:'white', fontSize: 16,marginTop: 5}}>Roll no:                      </Text>
            <TextInput 
                style={[styles.pickr, {height:40}]}
                placeholder = "Enter Roll no. here"
                placeholderTextColor = "#9e9e9e"
                keyboardType = 'numeric'
                returnKeyType = {"go"}
                selectionColor = 'white'
                enablesReturnKeyAutomatically = {true}
                keyboardAppearance = {"dark"}
                onChangeText={(rollno) => this.setState({rollno})}/>
        </View>
        {
        this.state.rollno == 0 ?   
        <View style = {{marginTop: 5, alignItems: 'center', justifyContent: 'center'}}>
            <Text style = {{color: 'red', textDecorationLine: 'underline'}}>Enter Roll no.</Text>
        </View>
        :
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AttendanceScreen',{ 
                                    branch: this.state.checked,
                                    sem: this.state.sem,
                                    div: this.state.div,
                                    rollno: this.state.rollno,
                                })}
            style={{alignItems: 'center', borderColor: 'green', borderWidth: 1, marginTop: -5}}>
            <Text style = {{color: '#8bc34a', fontWeight: 'bold', fontSize: 25,}}>
                                SUBMIT</Text>
        </TouchableOpacity>        
        }
    </View>
    );
  }
}

const styles= StyleSheet.create({
    img:{
        height:20,
        width:20,
        marginRight: 20
    },
    btn:{
        flexDirection: 'row',
        alignItems:'center', 
        marginLeft: 20,
        marginBottom: 10,
    },
    pickr:{
        height: 20,
        width: 125, 
        color: '#4caf50', 
        alignSelf: 'center',
        transform: [{scale: 1.5}],
    },

})

export default Attendance1;
