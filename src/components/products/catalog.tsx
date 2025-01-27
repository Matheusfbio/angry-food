import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export function Catalog() {
  const mock = [
    {
      id: 1,
      name: "X-tudo",
      valor: "12,00",
      ingrediente: "pão, carne, 2 queijos, molhos",
      image: require("../../../assets/xtudo.png"),
    },
    {
      id: 2,
      name: "Pizza-tudo",
      valor: "12,00",
      ingrediente: "pão, carne, 2 queijos, molhos",
      image: require("../../../assets/xtudo.png"),
    },
    {
      id: 3,
      name: "Dogão-tudo",
      valor: "12,00",
      ingrediente: "pão, carne, 2 queijos, molhos",
      image: require("../../../assets/xtudo.png"),
    },
    {
      id: 4,
      name: "Açai-tudo",
      valor: "12,00",
      ingrediente: "pão, carne, 2 queijos, molhos",
      image: require("../../../assets/xtudo.png"),
    },
    {
      id: 5,
      name: "tapioca-tudo",
      valor: "12,00",
      ingrediente: "pão, carne, 2 queijos, molhos",
      image: require("../../../assets/xtudo.png"),
    },
    {
      id: 6,
      name: "tudao",
      valor: "12,00",
      ingrediente: "pão, carne, 2 queijos, molhos",
      image: require("../../../assets/xtudo.png"),
    },
    {
      id: 7,
      name: "tapioca-tudo",
      valor: "12,00",
      ingrediente: "pão, carne, 2 queijos, molhos",
      image: require("../../../assets/xtudo.png"),
    },
    {
      id: 8,
      name: "tudao",
      valor: "12,00",
      ingrediente: "pão, carne, 2 queijos, molhos",
      image: require("../../../assets/xtudo.png"),
    },
    {
      id: 9,
      name: "tapioca-tudo",
      valor: "12,00",
      ingrediente: "pão, carne, 2 queijos, molhos",
      image: require("../../../assets/xtudo.png"),
    },
    {
      id: 10,
      name: "tudao",
      valor: "12,00",
      ingrediente: "pão, carne, 2 queijos, molhos",
      image: require("../../../assets/xtudo.png"),
    },
    {
      id: 11,
      name: "tapioca-tudo",
      valor: "12,00",
      ingrediente: "pão, carne, 2 queijos, molhos",
      image: require("../../../assets/xtudo.png"),
    },
    {
      id: 12,
      name: "tudao",
      valor: "12",
      ingrediente: "pão, carne, 2 queijos, molhos",
      image: require("../../../assets/xtudo.png"),
    },
  ];

  return (
    <SafeAreaView>
      <FlatList
        data={mock}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item }) => (
          <SafeAreaView style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <SafeAreaView>
              <Text>{item.name}</Text>
              <Text>R${item.valor}</Text>
              <Text>{item.ingrediente}</Text>
            </SafeAreaView>
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    marginRight: 50,
    paddingHorizontal: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});
