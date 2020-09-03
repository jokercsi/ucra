import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Card from "../shared/card";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { globalStyle } from "../style/global";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cafe: [
        {
          name: "회기 경희대 카페 READSTREET COFFEE",
          tag: ["카페추천", "아메리카노", "조용한카페", "경희대카페"],
          uri:
            "https://postfiles.pstatic.net/MjAyMDA0MDFfMjMz/MDAxNTg1NzUwMDM4NzEy.Ig_iyyl7IKAh9e295PQ_RG9vuMJJbtbketC_g9Mdg68g.0MolKSryTGWLMrCA4ZkokSxQpGpF7jjA0U1OO00TLZog.JPEG.dan9199/SE-d44d63a5-e587-4af9-b2ab-c65d531f8f49.jpg?type=w773",
        },
        {
          name: "튠업 카페 TUNE UP COFFEE ",
          tag: ["경희대감성", "공부하기좋은카페", "조용한카페", "다인석"],
          uri:
            "https://lh3.googleusercontent.com/proxy/xRZs9rYkkL5HgTOWX7CkqNTDwLt0SSYB2HbvkvqzS-PjIo0K_-QXfxHhq3GJaaIfClr21ec9mHLrRgUFj2DMoAy214czyyz0o1pcEZEWDKcWZDlcgxNsfJvIpzrjk1VJ9tE-r7Ppt6t5-Et1KFFO3ile6gwVayCXD9nc7fHVlsasK3MuSexccqWUAIo9q3qI75a8MwCJKOMVd6rOuc8FiDRKqkVb9S8wb0PsUZ8HfIGS3GgE-laAcgi4faI7ZSX3lKyyCcvayTagYI0R1i6Sv2WTqTY6DY1OKbpGpokNckw",
        },
        {
          name: "오크라 카페 cafe Okra",
          tag: ["경희대카페", "회기역", "예쁜카페", "조용한카페"],
          uri:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MzFfMzkg%2FMDAxNTk4ODAwMjYxNzYz._Lm-Fpx0rHeNSeXs0DsuSFe8PHHVbcVjOlW6rSBlPXYg.UM6_dcLpj92WH0_k46Z-1lr2m8UbFKPO08vmTYxjrqwg.JPEG.aosiwprb%2F22.jpg&type=sc960_832",
        },
        {
          name: "엘가 커피 Lga Coffee",
          tag: ["엘가 커피", "경희대카페", "에스프레소", "경희대"],
          uri:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA4MjVfMzUg%2FMDAxNTM1MjA1NjY5NjQ3.jX1YgKaTXp7rJopZQrUk5oIbXgfZJhxPp_DYTTUZrb4g.3f5IN8j3JfACsBLJKE7omD8YRmXx5TiBYzV8ux7aJAAg.JPEG.j2h711%2Foutput_4267522433.jpg&type=sc960_832",
        },
        {
          name: "메소드 커피 COFFEE METHODZ",
          tag: ["데이트", "조용한", "숨은맛집", "차모임"],
          uri:
            "https://lh3.googleusercontent.com/proxy/UX7RRJZGs0VZJ4P-0ofyobEOURuCuF2lona3ToqVHmRxAMuntgMTYEo-K5l654Rc0OORnkcF46LqZveauL2K6hTavFLs7zE-OXPkIhJ0rbiywgto5yrRCzkfWnz1aVdMceMgL_P8HlmWrhWw26JyAhe6YuP5l4hXctK6jRd9odBeiapa8TD_SVBldjHefq-_03GsCoxIFe6LouCjj7jU3qeTara544Jed-HGNX18JyGfbNOgo_BzpNzmiQnhqkI87iHvfUnE0sqQjuVT_oXbLglukQALhyiCtzAIpLY0ZZrT_Pk",
        },
      ],
    };
  }

  render() {
    return (
      <View>
        <View style={styles.searchWrap}>
          <TextInput style={styles.search} placeholder="검색어를 입력하세요" />
        </View>
        <View style={globalStyle.container}>
          <FlatList
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
