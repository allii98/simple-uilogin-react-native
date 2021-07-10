import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor:'#3a454b'
      }}>
      <StatusBar barStyle='light-content' backgroundColor='#3a454b' />
        <Text style={{
          color:'#ffffff',
          textAlign:'center',
          fontSize:22,
          fontWeight:'bold',
          marginTop: 20
        }}>Ali Project</Text>

        <Text style={{
          color:'#ffffff',
          textAlign:'center',
          fontSize:16,
        }}>Belajar react native</Text>

        <View style={{
          flex: 1,
          justifyContent:'center',
        }}>

          <TextInput value={this.state.username} placeholder='Masukkan username' placeholderTextColor='#ffffff' 
          style={{
            borderBottomWidth: 1,
            borderBottomColor:'#ffffff',
            color:'#ffffff',
            marginTop: 20,
            marginHorizontal: 20
          }}
          onChangeText={text => this.setState({username: text})}
          />
          <TextInput value={this.state.password} placeholder='Masukkan password' placeholderTextColor='#ffffff' 
          style={{
              borderBottomWidth: 1,
              borderBottomColor:'#ffffff',
              color:'#ffffff',
              marginTop: 20,
              marginHorizontal: 20
            }}
            secureTextEntry
          onChangeText={text => this.setState({password: text})}
          />

          <TouchableOpacity style={{
            backgroundColor:'#ffffff',
            marginHorizontal: 20,
            borderRadius: 50,
            paddingVertical:10,
            justifyContent:'center',
            alignItems:'center',
            elevation: 3,
            marginTop: 40,
            
          }}>
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            borderWidth:1,
            borderColor:'#ffffff',
            marginHorizontal: 20,
            borderRadius: 50,
            paddingVertical:10,
            justifyContent:'center',
            alignItems:'center',
            elevation: 3,
            marginTop: 20,

          }}>
            <Text style={{color:'#ffffff'}}>Create Account</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{
          justifyContent:'center',
          alignItems:'center',
          marginBottom: 20
        }}>
          <Icon name="fingerprint" size={30} color="#ffffff" />
        </TouchableOpacity>

      </View>
    );
  }
}
