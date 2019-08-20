import React, {Component} from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import {Card} from 'native-base';


export default class MateriScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {
      nama: this.props.navigation.getParam('nama'),
      no_ujian: this.props.navigation.getParam('no_ujian'),
      data: this.props.navigation.getParam('data'),
      soal: []
    };
  }

  componentDidUpdate(){
    const {no_ujian, nama} = this.state;
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
          alert('Nilai dapat dilihat di tab history pada homescreen');
          this.props.navigation.navigate('Home');
        }else{
          this.setState({
            data: responseJson
          })
        }
      }).catch((err)=>{
        alert(err)
      })
  }

   getSoal (jenis_soal) {
     var js = jenis_soal
     const {no_ujian} = this.state;
     fetch (
       'https://kumpulan-soal-smp.000webhostapp.com/api_soal/getSoal.php',
       {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify ({
           jenis_soal: js
         }),
       }
     )
       .then (response => response.json ())
       .then (responseJson => {
         //console.log(responseJson);
         this.setState ({
           soal: responseJson,
         });
         this.props.navigation.navigate('Soals',{
           soal: responseJson,
           kd_matpel: js,
           no_ujian: no_ujian
         })
       });
   }

  render () {
    const {width, height} = Dimensions.get ('screen');
    return (
      <View style={{flex: 1, paddingTop: 30}}>
        <View
          style={{
            paddingTop: 30,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={{paddingBottom:60}}>
            <Text style={{fontSize:25}}>Hello, {this.state.nama}</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >

          {parseInt(this.state.data[0].mtk.nilai)==0?(<Card
              style={{
                height: 100,
                width: width / 2 - 50,
                marginRight: 15,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#2F954E',
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  this.getSoal('mtk')}
                style={{flex: 1, flexDirection: 'column'}}
              >
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <View style={{flex: 1}}>
                  <Text
                    style={{fontSize: 18, textAlign: 'center', color: 'white'}}
                  >
                    MTK
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>):null}
            
            {parseInt(this.state.data[1].ipa.nilai)==0?(<Card
              style={{
                height: 100,
                width: width / 2 - 50,
                marginRight: 15,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#2F954E',
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  this.getSoal('ipa')}
                style={{flex: 1, flexDirection: 'column'}}
              >
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <View style={{flex: 1}}>
                  <Text
                    style={{fontSize: 18, textAlign: 'center', color: 'white'}}
                  >
                    IPA
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>):null}

            {parseInt(this.state.data[2].indo.nilai)==0?(<Card
              style={{
                height: 100,
                width: width / 2 - 50,
                marginRight: 15,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#2F954E',
              }}
            >
              <TouchableOpacity
                onPress={() =>this.getSoal('indonesia')}
                style={{flex: 1, flexDirection: 'column'}}
              >
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <View style={{flex: 1}}>
                  <Text
                    style={{fontSize: 18, textAlign: 'center', color: 'white'}}
                  >
                    B.Indonesia
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>):null}

            {parseInt(this.state.data[3].inggris.nilai)==0?(<Card
              style={{
                height: 100,
                width: width / 2 - 50,
                marginRight: 15,
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#2F954E',
              }}
            >
              <TouchableOpacity
                onPress={() => this.getSoal('inggris')}
                style={{flex: 1, flexDirection: 'column'}}
              >
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                />
                <View style={{flex: 1}}>
                  <Text
                    style={{fontSize: 18, textAlign: 'center', color: 'white'}}
                  >
                    B.Inggris
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>):null}

          </View>
        </View>
      </View>
    );
  }
}
