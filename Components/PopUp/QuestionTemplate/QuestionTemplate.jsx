import { View,Text,TextInput,StyleSheet } from "react-native";
import "./QuestionTemplate.css"
export default function QuestionTemplate({question, callBackChange, num, valuable}){
    const styles = StyleSheet.create({
        input : {
            borderColor: "black",
            width: 80,
            borderWidth: 1,
        }
    })
    return(
        <View style={{marginVertical: 5}}className="question">
        <Text>{question}</Text>
        <TextInput style={styles.input} onChangeText={(text)=>{callBackChange(num,text)}} inputMode={"numeric"} ID={num} value={valuable}name="quantity" />
        </View>
    );
}