
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack/StackRoutes";
import { FontsLoad } from "../utils/FontsLoad";


export default function Routes() {

    return(
        <NavigationContainer>
            <FontsLoad/>
            <StackRoutes/>
        </NavigationContainer>
    )

}