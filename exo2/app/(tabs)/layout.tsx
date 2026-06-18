import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 60, backgroundColor: "#08444f", justifyContent: 'center' }}>
                <Text style={{ color: "#d1e7eb", fontSize: 18, textAlign: "center" }}>Header</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "#d1e7eb" }}>
                <Text style={{ color: "#08444f", fontSize: 18 }}>Bloc principal</Text>
            </View>
            <View style={{ height: 60, backgroundColor: "#b5d3da", justifyContent: 'center' }}>
                <Text style={{ color: "#08444f", fontSize: 18, textAlign: "center" }}>Footer</Text>
            </View>
        </SafeAreaView>
    );
}
