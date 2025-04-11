import { View,Text,TextInput } from "react-native";
import "./QuestionTemplate.css"
export default function QuestionTemplate({question, callBackChange, num, valuable}){

    return(
        <View className="question">
        <Text>{question}</Text>
        <TextInput onChangeText={(text)=>{callBackChange(num,text)}} inputMode={"numeric"} ID={num} value={valuable}name="quantity" />
        </View>
    );
}