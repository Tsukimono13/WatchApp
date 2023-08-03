import {useNavigation} from "@react-navigation/native";
import {TypeRootStackParamList} from "@/navigation/navigation.types";

export const useTypedRouts = () => useNavigation<TypeRootStackParamList>()