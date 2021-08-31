import *as React from 'react'
import { StyleSheet, Text, Image, ImageBackground, TextInput, View, TouchableOpacity, TouchableHighlight, Alert, ScrollView, Button, EventSubscriptionVendor, Modal,Dimensions } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
var x ;
export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
player1:'',
player2:'',
booool:true,
            user1: true,
            ff: true,
            dis: true,
            winn: '',
            txt: '',
            mod: true,
             bol : true,
            Items:
                [


                    {

                        flag: '',

                    },
                    {

                        flag: '',


                    },

                    {
                        flag: '',
                    },
                    {
                        flag: '',
                    },

                    {
                        flag: '',
                    },

                    {

                        flag: '',

                    },
                    {
                        flag: '',
                    }
                    ,
                    {
                        flag: '',
                    }
                    ,
                    {
                        flag: '',
                    }

                ],


            x: [
                [0, 1, 2], [3, 4, 5], [6, 7, 8]
                [0, 3, 6], [1, 4, 7], [2, 5, 8]
                [0, 4, 8], [2, 4, 6]

            ]


        }


    }
    calculateWinner(index) {
        let items = this.state.Items
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {

            const [a, b, c] = lines[i];
            if (items[a].flag && items[a].flag === items[b].flag && items[a].flag === items[c].flag) {

               this.setState({bol:false})
                 x = items[a].flag && items[b].flag && items[c].flag
if (x=='X')
{
this.setState({txt:this.state.player1,winn: " is Winner"})
}
else
{
    this.setState({txt:this.state.player2,winn: " is Winner"}) 
}
   // this.setState({ txt: x, winn: " is Winner" })
}
                

            }
        }
    

    fun(index) {
        let items = this.state.Items
        if (this.state.user1) {
            items[index].flag = 'X'

            this.setState({ Items: items, user1: false })



        }


        else if (this.state.user1 == false) {
            items[index].flag = 'O'


            this.setState({ Items: items, user1: true })

        }

    }


    rest() {
      this.setState({user1:true,bol:true})
        let items = this.state.Items

        for(let i=0;i<9;i++){
               items[i].flag = ''
               
    }
        
        this.setState({ Items: items,winn:'',txt:''})

    }

    end()

    {
        this.setState({mod:true})
        let items = this.state.Items

        for(let i=0;i<9;i++){
               items[i].flag = ''
               
    }
    this.setState({ Items: items,winn:'',txt:''}) 
    }

    render() {
        return (
            <>
         

           
                < Modal 
                    visible={this.state.mod} >
<View style={{
    width:'65%',
    height:60,
borderWidth:3,
borderColor:'#4f96f2',
alignSelf:'center',
marginTop:'20%',

}}>
<TextInput
value={this.state.player1}
onChangeText={(value)=>{

this.setState({player1:value})

}}

style={{
fontSize:25

}}
placeholder='player1 name'
/>

</View>

<View style={{
    width:'65%',
    height:60,
borderWidth:3,
borderColor:'#4f96f2',
alignSelf:'center',
marginTop:'5%',

}}>
<TextInput
value={this.state.player2}
onChangeText={(value)=>{

this.setState({player2:value})

}}

style={{
fontSize:25

}}

placeholder='player2 name'
/>


</View>
          

<Image style={{
    width:250,
    height:250,
    alignSelf:'center',
marginTop:'20%'
}}
source={require('./images/xo.png')}
/>


                    < TouchableOpacity
                        onPress={() => {
                            this.setState({ mod: false })

                        }}
                        style={{
                            width: "60%",
                            height: 70,
                            borderRadius: 12,
                            backgroundColor: '#4f96f2',
                            alignSelf: 'center',
                            marginTop: '20%'

                        }}>
                        < Text style={{
                            fontSize: 25,
                            textAlign: 'center',
                            marginTop: '5%',
                            fontWeight: 'bold'
                        }}>
                            Start Game
                        </Text>
                    </TouchableOpacity>
                </Modal>
                <View style={{
                    
width:windowWidth,
height:windowHeight,

                    backgroundColor: '#609ea1'

                }}>
                    <TouchableOpacity onPress={(index) => {


this.end()


}}>

<View style={{
   marginLeft:'40%'
}}>

</View>

< Text style={{
    fontSize:30,
    color:'#eff0f0',
    textAlign:'center',
    marginTop:'5%'
}}>
End Game
</Text>

</TouchableOpacity>
           
<View style={{
//flexDirection:"row",
marginTop: '20%',


}}>



<TouchableOpacity onPress={(index) => {

this.rest()



}}>


< Text style={{
    fontSize:30,
    color:'#eff0f0',
    textAlign:'center'
   
}}>
Restart Game
</Text>


</TouchableOpacity>




</View>

                    < Text style={{
                        color: '#111',
                        fontSize: 45,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: '20%'
                    }}>


                        {this.state.user1 ? 'player 1' : 'player 2'}
                    </Text>




                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginTop: '5%',
                            marginLeft: '1%',
                            // borderLeftWidth: 3,
                          //  borderColor: '#f00',
justifyContent:'center',
alignSelf:'center',

                        }}>


                    {this.state.Items.map((Items,index)  => (

                                <>

<TouchableOpacity activeOpacity={0.8}
                               
                                   
                                    disabled={Items.flag == 'X' ? this.state.dis : Items.flag == 'O' ? this.state.dis : null+this.state.bol==false?this.state.dis:null}
                                       
                                     
                                       onPress={() => {
                                            this.fun(index)
                                            this.calculateWinner(index)

                                        }}

                                        style={{
                                            width: 120,
                                            height: 110,

                                            backgroundColor: '#609ea1',
                                        
                                            borderBottomWidth: 2,
                                            borderColor: '#d2b689',
                                            borderRightWidth: 2,
                                            borderTopWidth: 2,

                                           borderLeftWidth: 2,

                                        }}>
                                        <View style={{

                                        }}>

                                            < Text style={{
                                                color: Items.flag == 'X' ? '#036165' : '#eff0f0',
                                                fontSize: 75,
                                                fontWeight: 'bold',
                                                textAlign: 'center',

                                            }}>


                                                {Items.flag}
                                            </Text>

                                        </View>

                                    </TouchableOpacity>



                                </>
    
                            ))}

</View>

                    



                    < Text style={{
                        color: this.state.txt == 'X' ? '#036165' : '#fc9c16',
                        fontSize: 40,
                        fontWeight: 'bold',
                       textAlign: 'center',
                        marginTop: '4%'
                    }}>


                        {this.state.txt+this.state.winn}

                    </Text>


                   
                </View>

               
            </>

        )

                }
            }

