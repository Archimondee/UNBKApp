import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardItem, Button, Right, Left, Body} from 'native-base';
import Reinput from 'reinput';

export default class Info extends Component {
  constructor (props) {
    super (props);
    this.state = {
      //jenis_soal: this.props.navigation.getParam ('kd_matpel'),
      //soal: [],
      no_ujian : '52415894',
      nama: 'Gilang Aditya',
      kelas: '',
      sekolah: ''
    };
  }

  // getSoal () {
  //   fetch (
  //     'https://kumpulan-soal-smp.000webhostapp.com/api_soal/getSoal.php',
  //     {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify ({
  //         jenis_soal: this.state.jenis_soal,
  //       }),
  //     }
  //   )
  //     .then (response => response.json ())
  //     .then (responseJson => {
  //       //console.log(responseJson);
  //       this.setState ({
  //         soal: responseJson,
  //       });
  //       console.log (this.state.soal[0]);
  //     });
  // }
  submitData(){
    const {nama, sekolah, kelas, no_ujian} = this.state;
    var jumlah = 0;
    if(nama!=''){jumlah+=1}
    if(no_ujian!=''){jumlah+=1}

    if(jumlah!=2){
      alert('Form data harus di isi!!!')
    }else{
      fetch('https://kumpulan-soal-smp.000webhostapp.com/api_soal/postData.php',{
       method: 'POST',
       headers: {
         'Accept':'application/json',
         'Content-Type':'application/json'
       },
       body: JSON.stringify({
          no_ujian: no_ujian,
          nama: nama,
       })
     }).then(response=>response.json())
      .then(responseJson=>{
        if(responseJson=='Data tidak ada'){
          alert('No ujian tidak terdaftar');
        }else{
          this.props.navigation.navigate('Soal',{
            nama: nama,
            no_ujian: no_ujian,
            data:responseJson
          })
        }
      }).catch((err)=>{
        alert(err)
      })
    }
  }
  componentDidMount () {
    //this.getSoal ();
  }

  render () {
    return (
      <View style={{paddingTop: 30, flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Card style={{height: 400, width: '100%'}}>
            <CardItem
              header
              style={{justifyContent: 'center', alignItems: 'center'}}
            >
              <Text style={{fontSize: 20}}>
                Data peserta ujian
              </Text>
            </CardItem>
            <CardItem
              style={{flexDirection: 'column', marginLeft: 10, marginRight: 10}}
            >
              <Reinput label="No Ujian" onChangeText={(no_ujian)=>this.setState({no_ujian})} />
              <Reinput label="Nama" onChangeText={(nama)=>this.setState({nama})}/>
              <Button
                onPress={()=>this.submitData()}
                style={{
                  width: 150,
                  justifyContent: 'center',
                  backgroundColor: '#2F954E',
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  Submit
                </Text>
              </Button>
            </CardItem>
          </Card>
        </View>
      </View>
    );
  }
}
