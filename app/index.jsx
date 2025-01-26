import { View , Text  , StyleSheet , Image ,  ImageBackground , Dimensions  , TouchableOpacity , Animated, TextInput   } from "react-native"


//////////////////////////////////////////////    usefonts used to load font  
import { useFonts } from 'expo-font'; 
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";



import { Ionicons } from '@expo/vector-icons';



export default function Index(){



 ///////////////////////////////////////////////////////////    loading of font /////////////////// 
  const [fontsLoaded] = useFonts({
    'Exo2bold': require('../assets/fonts/Exo2-ExtraBold.ttf'),
    'Exo2italic': require('../assets/fonts/Exo_italic.ttf'),
   
  });
/////////////////////////////  instead of Exo2 we can use any name , it is custom , but use same name inside style sheet 


 
const width = Dimensions.get("window").width;

const [translateX1] = useState(new Animated.Value( 0 ));
const [translateX3] = useState(new Animated.Value( 0 ));

const [translateX2] = useState(new Animated.Value( -width ));
const [translateX4] = useState(new Animated.Value( +width ));


const [ isregisterpage , setisregisterpage ] = useState(true) 


const slideIn = () => {


  Animated.timing(translateX1, {
    toValue: width , // Move to the center (on-screen)
    duration: 500,
    useNativeDriver: true,
  }).start();


  Animated.timing(translateX3, {
    toValue: -width , // Move to the center (on-screen)
    duration: 500,
    useNativeDriver: true,
  }).start();


  Animated.timing(translateX2, {
    toValue: 0 , // Move to the center (on-screen)
    duration: 500,
    useNativeDriver: true,
  }).start();

  Animated.timing(translateX4, {
    toValue: 0 , // Move to the center (on-screen)
    duration: 500,
    useNativeDriver: true,
  }).start();



};






const slideout = () => {


  Animated.timing(translateX1, {
    toValue: 0 , // Move to the center (on-screen)
    duration: 500,
    useNativeDriver: true,
  }).start();


  Animated.timing(translateX3, {
    toValue: 0 , // Move to the center (on-screen)
    duration: 500,
    useNativeDriver: true,
  }).start();


  Animated.timing(translateX2, {
    toValue: -width , // Move to the center (on-screen)
    duration: 500,
    useNativeDriver: true,
  }).start();

  Animated.timing(translateX4, {
    toValue: width , // Move to the center (on-screen)
    duration: 500,
    useNativeDriver: true,
  }).start();



};







  return(

   <View   style={{flex:1}}>

          <StatusBar backgroundColor="transparent"></StatusBar>
          < ImageBackground   style ={  {...css.parent}      }   source = { require('../assets/images/leaf.jpg')}  blurRadius={10}   >
            
            
               <Animated.View  style ={  {...css.child1 , transform: [{ translateX : translateX1  }]   }    } >
                          <Text   style={ {...css.text1} }>Plant_Lyfee</Text>
                          <Text   style={ {...css.text2} }> Every life matters...</Text>
                          <Text   style={ {...css.text3  } }>Nurture your plants with care, track their growth effortlessly, and ensure they thrive. </Text>
               </Animated.View>


                <Animated.View style={{ ...css.child2, transform: [{ translateX: translateX2 }] }}>
                              <Image
                                source={require('../assets/images/logo.png')}
                                style={{ width: '30%', height: '50%' }}
                                
                              />
              </Animated.View>




               <Animated.View style={{ ...css.child3 , transform: [{ translateX : translateX3  }]    }}>
                          <TouchableOpacity style={css.button} onPress={() => slideIn() }>
                            <Text style={css.buttontext}>Get Started</Text>
                          </TouchableOpacity>
              </Animated.View>



               <Animated.View style={{ ...css.child4, transform: [{ translateX: translateX4 }] }}     >
                        

                          <View  style = {{...css.child41view}}>
                                  <TouchableOpacity style={css.backbutton} onPress={() => slideout() }>
                                        <Ionicons name="arrow-back" size={20} color="white" />
                                  </TouchableOpacity>
                          </View>

                      
                      
                      {isregisterpage ? 
                          <View  style = {{...css.child42view}}>

                                    <View  style={{...css.registertextparent}}>
                                           <Text  style={{...css.registertext}}>._Register_.</Text>
                                    </View>

                                    <View  style={{...css.alreadyaccparent}}>
                                           <Text  style={{...css.alreadyacctext}}  onPress={()=>{ setisregisterpage(false ) }} >already have an account ? click here</Text>
                                    </View>
                                 
                                    <View style={css.formparent}>
                                            <TextInput style={css.input} placeholder="Username" placeholderTextColor="white" />
                                            <TextInput style={css.input} placeholder="Email" placeholderTextColor="white" keyboardType="email-address" />
                                            <TextInput style={css.input} placeholder="Password" placeholderTextColor="white" secureTextEntry />

                                            <TouchableOpacity style={css.button}>
                                                   <Text style={css.buttontext}>Register</Text>
                                            </TouchableOpacity>
                                    </View>

                          </View>

                          :

                          <View  style = {{...css.child42view}}>

                          <View  style={{...css.registertextparent}}>
                                <Text  style={{...css.registertext}}>._Login_.</Text>
                          </View>

                          <View  style={{...css.alreadyaccparent}}>
                                <Text  style={{...css.alreadyacctext}} onPress={()=>{ setisregisterpage(true) }}  >create new account ? click here</Text>
                          </View>

                          <View style={css.formparent}>
                                  <TextInput style={css.input} placeholder="Username/Email" placeholderTextColor="white" />
                                  <TextInput style={css.input} placeholder="Password" placeholderTextColor="white" secureTextEntry />

                                  <TouchableOpacity style={css.button}>
                                        <Text style={css.buttontext}>Login</Text>
                                  </TouchableOpacity>
                          </View>

                          </View>

                      }

                          
               </Animated.View>


                      

          </ImageBackground>

    </View>


  )
}


const css =  StyleSheet.create({

       parent : {
          flex:1 , 
          backgroundColor : 'rgb(7, 73, 5)' , 
          justifyContent : 'center' , 
          alignItems : "center"
           
       }  , 

       child1: {
        position: "absolute",
        top: "0%",
        width: "100%",
        height: "80%",
        // backgroundColor: "rgba(255, 0, 0, 0.5)", // Red with transparency
          justifyContent : 'center' , 
          // alignItems : "center"
        paddingLeft : 10 , 
        gap : 3
        
      },
      child2: {
        position: "absolute",
        top: "0%",
        width: "100%",
        height: "30%",
        // backgroundColor: "rgba(0, 255, 0, 0.5)", // Green with transparency
        justifyContent : 'center' , 
         alignItems : 'center'
      },
      child3: {
        position: "absolute",
        top: "60%",
        width: "100%",
        height: "50%",
        // backgroundColor: "rgba(0, 0, 255, 0.5)", // Blue with transparency
        alignItems : 'center'
      },
      child4: {
        position: "absolute",
        top: "30%",
        width: "100%",
        height: "70%",
        backgroundColor: "rgba(185, 179, 179, 0.47)", // Yellow with transparency
        borderTopLeftRadius : 80 , 
        justifyContent : 'flex-start' , 
        alignItems : 'center'
      },



       ///////////////////////////////////////////   we can set font weoight , so download bold font if needed 
       text1 : {
          color : 'white' , 
          fontFamily : "Exo2bold" , 
          // fontWeight : 800 ,
          fontSize : 55 , 
          // backgroundColor:'red' , 
          width : '90%'

       } , 

       text2 : {
        color : 'white' , 
        fontFamily : "Exo2bold" , 
        // fontWeight : 800 ,
        fontSize : 20 , 
        // backgroundColor:'red' , 
        width : '90%'

     } ,

     text3 : {
      color : 'white' , 
      fontFamily : "Exo2italic" , 
      // fontWeight : 800 ,
      fontSize : 12 , 
      // backgroundColor:'red' , 
      width : '70%' , 
      paddingLeft : 5
      
      

   }  ,

   

   button: {
    borderWidth: 2,          // White border
    borderColor: "white",   
    backgroundColor: "transparent",
    paddingVertical: 8,     // Vertical padding
    paddingHorizontal: 5 ,   // Horizontal padding
    borderRadius: 25,        // Rounded corners
    alignItems: "center",
    justifyContent: "center",
    width : '40%'
  },
  buttontext: {
    color: "white",         // White text
    fontSize: 15,
    fontFamily  : "Exo2bold"
  },




  child41view : {

      flex : 0.2 , 
      width : '100%' , 
      // backgroundColor : 'red' , 
      // borderTopLeftRadius : 80 , 
      justifyContent : 'center' , 
      alignItems : 'flex-start' , 
      // 
  }  ,


  backbutton: {
    borderWidth: 2,          // White border
    borderColor: "white",   
    backgroundColor: "transparent",
    padding : 10 ,    // Horizontal padding
    borderRadius: 25,        // Rounded corners
    alignItems: "center",
    justifyContent: "center",
    // width : '40%' 
    marginLeft : 40 

  },


  child42view : {

    flex : 0.8 , 
    width : '100%' , 
    // backgroundColor : 'red' , 
    justifyContent : 'flex-start' , 
    alignItems : 'center' , 
    // 
}  ,



registertextparent:{
  // backgroundColor : 'pink' , 

  flex : 0.1, 
  width: "100%" , 
  justifyContent : 'flex-end' , 
  alignItems : "center"



} ,

registertext : {
    color : 'white' , 
    fontFamily : 'Exo2bold' , 
    fontSize : 25
}
,


alreadyaccparent:{
  //  backgroundColor : "green" , 
  

}

,

alreadyacctext : {
   fontFamily : "Exo2italic" , 
   color : "rgb(89, 252, 14)" , 
   textDecorationLine: 'underline'
}


,


formparent :{
  // backgroundColor:"red" , 
  flex: 0.8 , 
  width: "100%" , 
  justifyContent  :"center" , 
  alignItems :"center" ,
  gap : 10
}  ,


input: {
  width: '80%',
  backgroundColor: 'transparent',
  borderWidth: 1,
  borderColor: 'white',
  borderRadius: 5,
  padding: 12,
  color: 'white',
  fontFamily : 'Exo2italic'
}


})


