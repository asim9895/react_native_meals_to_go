import { View, TextInput, FlatList, Image, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { restaurents } from "../data/restaurents";

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fffbfc" }}>
      <View
        style={{
          marginTop: 50,
          marginHorizontal: 20,
          backgroundColor: "#ff4c49",
          flexDirection: "row",
          alignItems: "center",
          padding: 7,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <AntDesign name="search1" style={{ color: "white", fontSize: 18 }} />
        <TextInput
          style={{ borderWidth: 0, marginLeft: 10, marginRight: 30 }}
          placeholder="Search"
          placeholderTextColor={"white"}
        />
      </View>

      <View style={{ marginTop: 10, marginBottom: 90 }}>
        <FlatList
          data={restaurents}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  padding: 7,
                  backgroundColor: "#fffbfc",
                  elevation: 5,
                  margin: 10,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: "100%", height: 200, borderRadius: 10 }}
                />
                <Text style={{ fontSize: 18, fontWeight: "bold", margin: 5 }}>
                  {item.title}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign
                      name="star"
                      style={{ color: "#ff4c49", marginRight: 3 }}
                    />
                    <AntDesign
                      name="star"
                      style={{ color: "#ff4c49", marginRight: 3 }}
                    />

                    <AntDesign
                      name="star"
                      style={{ color: "#ff4c49", marginRight: 3 }}
                    />

                    <AntDesign
                      name="star"
                      style={{ color: "#ff4c49", marginRight: 3 }}
                    />
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 11, fontWeight: "bold" }}>
                      {item.closed ? "Temporary Closed" : "Open"}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;
