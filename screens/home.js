import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Card from "../shared/card";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { globalStyle } from "../style/global";
import { AppLoading } from "expo";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cafe: [
        {
          name: "회기 경희대 카페 READSTREET COFFEE",
          tag: ["카페추천", "아메리카노", "조용한카페", "경희대카페"],
          uri:
            "http://blogfiles.naver.net/MjAyMDA0MDFfMjMz/MDAxNTg1NzUwMDM4NzEy.Ig_iyyl7IKAh9e295PQ_RG9vuMJJbtbketC_g9Mdg68g.0MolKSryTGWLMrCA4ZkokSxQpGpF7jjA0U1OO00TLZog.JPEG.dan9199/IMG_0616.JPG",
          menu: ["커피", "커피", "커피", "커피"],
        },
        {
          name: "튠업 카페 TUNE UP COFFEE ",
          tag: ["경희대감성", "공부하기좋은카페", "조용한카페", "다인석"],
          uri:
            "http://blogfiles.naver.net/MjAxODA5MTNfMjQ4/MDAxNTM2NzcxODAxNTkx.Cvo59zJg6y5NQiDP-AXUrbEg0fwlKsEtmgfA2q9-waAg.Mxkv_PlLztIgNcb5CUSJqWkCMVzbj4AdKXZpzRyuSysg.JPEG.fkvkdpffktmd/P20180910_185423497_5CB8ADC9-0028-4A0B-A165-7191D2CE6671.jpg",
          menu: ["커피", "커피", "커피", "커피"],
        },
        {
          name: "오크라 카페 cafe Okra",
          tag: ["경희대카페", "회기역", "예쁜카페", "조용한카페"],
          uri:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MzFfMzkg%2FMDAxNTk4ODAwMjYxNzYz._Lm-Fpx0rHeNSeXs0DsuSFe8PHHVbcVjOlW6rSBlPXYg.UM6_dcLpj92WH0_k46Z-1lr2m8UbFKPO08vmTYxjrqwg.JPEG.aosiwprb%2F22.jpg&type=sc960_832",
          menu: ["커피", "커피", "커피", "커피"],
        },
        {
          name: "엘가 커피 Lga Coffee",
          tag: ["엘가 커피", "경희대카페", "에스프레소", "경희대"],
          uri:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA4MjVfMzUg%2FMDAxNTM1MjA1NjY5NjQ3.jX1YgKaTXp7rJopZQrUk5oIbXgfZJhxPp_DYTTUZrb4g.3f5IN8j3JfACsBLJKE7omD8YRmXx5TiBYzV8ux7aJAAg.JPEG.j2h711%2Foutput_4267522433.jpg&type=sc960_832",
          menu: ["커피", "커피", "커피", "커피"],
        },
        {
          name: "메소드 커피 COFFEE METHODZ",
          tag: ["데이트", "조용한", "숨은맛집", "차모임"],
          uri:
            "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fldb.phinf.naver.net%2F20171009_229%2F1507529920324vlIMD_JPEG%2FeM_JVfQgzwiijB_wl-HcHBmo.jpg",
          menu: ["커피", "커피", "커피", "커피"],
        },
      ],
    };
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <View>
        <View style={styles.searchWrap}>
          <TextInput style={styles.search} placeholder="검색어를 입력하세요" />
        </View>
        <View style={globalStyle.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.cafe}
            renderItem={({ item }) => (
              <View style={styles.content}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("Detail", item);
                  }}
                >
                  <Card>
                    <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                    <View style={styles.imageSize}>
                      <Image
                        source={{
                          uri: item.uri,
                        }}
                        style={styles.imageStyle}
                      />
                    </View>
                    <View style={styles.tagWrap}>
                      <Text style={styles.tagText}>#{item.tag[0]}</Text>
                      <Text style={styles.tagText}>#{item.tag[1]}</Text>
                      <Text style={styles.tagText}>#{item.tag[2]}</Text>
                      <Text style={styles.tagText}>#{item.tag[3]}</Text>
                    </View>
                  </Card>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
  async _cacheResourcesAsync() {
    const images = [this.state.cafe.uri];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}

const styles = StyleSheet.create({
  searchWrap: {
    backgroundColor: "#fff",
    width: "100%",
    height: 70,
  },
  search: {
    alignSelf: "center",
    width: "90%",
    height: "65%",
    borderRadius: 20,
    backgroundColor: "#F2F3F1",
    padding: 6,
    marginVertical: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 5,
  },
  imageSize: {
    width: "100%",
    height: 200,
  },
  imageStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
  },
  tagWrap: {
    flexDirection: "row",
    alignSelf: "center",
  },
  tagText: {
    color: "#fff",
    fontSize: 10,
    padding: 3,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#94E2F7",
  },
});
