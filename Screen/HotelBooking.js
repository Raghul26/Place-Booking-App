import { StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native';
import { MoviesCards } from "../Context"

const HotelBooking = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { seats, setSeats, occupaid } = useContext(MoviesCards);
    const onseatselect = (item) => {
        const seatselected = seats.find((seat) => seat === item)
        if (seatselected) {
            setSeats(seats.filter((seat) => seat !== item))
        } else {
            setSeats([...seats, item])
        }
    }
    const fee = 400;
    const noofdatys = seats;
    const total = seats > 0 ? fee + noofdatys * 158 : 0;

    const subscribe = () => {
        occupaid.push(...seats)
        navigation.navigate('Ticket', {
            name: route.params.name,
            timmeselected: route.params.timeselected,
            seats: displayseats,
            image: route.params.image
        })
        setSeats([])
    }
    const displayseats = [...seats];
    console.log(displayseats, "seats");



    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/icons8-left-100.png')} style={{
                        width: 38,
                        height: 45,
                    }} />
                </Pressable>
                <View style={{
                    paddingLeft: 12,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 19,
                        fontWeight: '400'
                    }}>{route.params.name}</Text>
                </View>
            </View>
            <View>
                <Text style={{
                    color: '#fff',
                    fontSize: 29,
                    fontWeight: '900',
                    textAlign: "center",
                }}>{route.params.timeselected}</Text>
            </View>



            <View style={styles.container4}>
                <View style={{
                    marginTop: 19
                }}>
                    <Text style={{
                        color: "#fff",
                        textAlign: "center",
                        fontSize: 19,
                        fontWeight: "400",
                    }}>{route.params.desname}</Text>
                </View>
                <View style={{
                    marginTop: 19,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>





                    <View style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <FlatList numColumns={4} data={route.params.seatno} renderItem={({ item }) => (
                            <Pressable style={{
                                backgroundColor: "#000",
                                margin: 9,
                                alignItems: "center",
                                justifyContent: 'center',
                                // width: 54,
                                // height: 45,
                                borderRadius: 9,
                            }} onPress={() => onseatselect(item)}>



                                {seats.includes(item) ?
                                    (
                                        <Text style={{
                                            color: "#fff",
                                            fontSize: 19,
                                            fontWeight: 'bold',
                                            backgroundColor: '#3A4C26',
                                            padding: 8,
                                            width: 50,
                                            height: 45,
                                            textAlign: 'center',
                                            borderRadius: 9,
                                        }}>{item}</Text>
                                    ) : occupaid.includes(item) ? (
                                        <Text style={{
                                            color: "#fff",
                                            fontSize: 19,
                                            fontWeight: 'bold',
                                            backgroundColor: '#3A4C26',
                                            padding: 8,
                                            width: 50,
                                            height: 45,
                                            textAlign: 'center',
                                            borderRadius: 9,
                                        }}>{item}</Text>
                                    ) : (
                                        <Text style={{
                                            color: "#fff",
                                            fontSize: 19,
                                            fontWeight: 'bold',
                                            backgroundColor: '#000',
                                            padding: 8,
                                            width: 50,
                                            height: 45,
                                            textAlign: 'center',
                                            borderRadius: 9,
                                        }}>{item}</Text>
                                    )}
                            </Pressable>
                        )} />
                    </View>




                    <View style={{
                        padding: 9,
                        marginTop: 29,
                        width: "100%",
                        backgroundColor: "#6C7462",
                        alignItems: 'center',
                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: 'space-around',
                            alignContent: 'center',
                            width: "90%",
                        }}>
                            <View style={{
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    backgroundColor: '#3A4C26',
                                    width: 50,
                                    height: 50,
                                    borderRadius: 9
                                }} />
                                <Text style={{
                                    color: "#fff",
                                    fontSize: 19,
                                }}>Selected</Text>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                paddingLeft: 9,
                            }}>
                                <Text style={{
                                    backgroundColor: '#000',
                                    width: 50,
                                    height: 50,
                                    borderRadius: 9
                                }} />
                                <Text style={{
                                    color: "#fff",
                                    fontSize: 19,
                                }}>Not Selected</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{
                    marginTop: 30,
                    height: 90,
                    width: "100%",
                    alignItems: 'center',
                    justifyContent: "center",
                    backgroundColor: "#000",
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        width: "80%",
                    }}>
                        <View>
                            <Text style={{
                                color: "#fff",
                                fontSize: 19
                            }}>{seats.length > 0 ? (
                                <Text>{seats.map((item, index) => (
                                    <Text>{item}</Text>
                                ))} days selected</Text>
                            ) : (
                                <Text>No days selected</Text>
                            )}</Text>
                        </View>
                        <Pressable onPress={subscribe}>
                            <Text style={{
                                color: "#fff",
                                fontSize: 19
                            }}>PAY {total}</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default HotelBooking

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#283618',
        width: '100%',
    },
    container4: {
        backgroundColor: '#283618',
        width: '100%',
        height: "85%"
    },
    Header: {
        margin: 9,
        marginTop: 29,
        flexDirection: 'row',
        alignItems: 'center',
    },
})