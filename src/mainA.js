import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity
} from 'react-native';

class ManHinhA extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            inputValue: 0,
            previousInPutValue: 0,
            Symbol: null,
        }
        this.state = this.initialState;
    }

    ClickEvent(num) {
        switch (typeof num) {
            case 'number':
                return this.handleNumber(num)
            case 'string':
                return this.handleString(num)
        }
    }

    handleNumber(num) {
        let inputValue = (this.state.inputValue * 10) + num
        this.setState({
            inputValue: inputValue,
        })
    }
    handleString(symbol) {
        switch (symbol) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    Symbol: symbol,
                    previousInPutValue: this.state.inputValue,
                    inputValue: 0,
                })
                break;
            case '=':
                let strSymbol = this.state.Symbol,
                    inputValue = this.state.inputValue,
                    previousInPutValue = this.state.previousInPutValue
                if (!symbol) {
                    return;
                }
                this.setState({
                    previousInPutValue: 0,
                    inputValue: eval(previousInPutValue + strSymbol + inputValue),
                    Symbol: null,
                })
                break;
            case 'ce':
                this.setState(this.initialState);
                break;

            case 'c':
                this.setState({ inputValue: 0 });
                break;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 2, justifyContent: 'flex-end' }}>
                    <Text style={styles.equal}>{this.state.inputValue}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={styles.number}
                        onPress={() => {
                            this.ClickEvent('ce')
                        }}>
                        <Text style={styles.text}>CE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.number}
                        onPress={() => {
                            this.ClickEvent('c')}}
                        >
                        <Text style={styles.text}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.number}>
                        <Text style={styles.text}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toolBg}>
                        <Text style={styles.tool}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.number}
                        onPress={() => {
                            this.ClickEvent(7)
                        }}>
                        <Text style={styles.text}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.number}
                        onPress={() => {
                            this.ClickEvent(8)
                        }}>
                        <Text style={styles.text}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.number}
                        onPress={() => {
                            this.ClickEvent(9)
                        }}>
                        <Text style={styles.text}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.toolBg}
                        onPress={() => {
                            this.ClickEvent('*')
                        }}>
                        <Text style={styles.tool}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.number}
                        onPress={() => {
                            this.ClickEvent(4)
                        }}>
                        <Text style={styles.text}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.number}
                        onPress={() => {
                            this.ClickEvent(5)
                        }}>
                        <Text style={styles.text}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.number}
                        onPress={() => {
                            this.ClickEvent(6)
                        }}>
                        <Text style={styles.text}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.toolBg}
                        onPress={() => {
                            this.ClickEvent('-')
                        }}
                    >
                        <Text style={styles.tool}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.number}
                        onPress={() => {
                            this.ClickEvent(1)
                        }}>
                        <Text style={styles.text}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.number}
                        onPress={() => {
                            this.ClickEvent(2)
                        }}>
                        <Text style={styles.text}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.number}
                        onPress={() => {
                            this.ClickEvent(3)
                        }}>
                        <Text style={styles.text}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.toolBg}
                        onPress={() => {
                            this.ClickEvent('+')
                        }}
                    >
                        <Text style={styles.tool}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.number0}
                        onPress={() => {
                            this.ClickEvent(0)
                        }}>
                        <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.number}>
                        <Text style={styles.text}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.toolBg}
                        onPress={() => {
                            this.ClickEvent('=')
                        }}
                    >
                        <Text style={styles.tool}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        flexDirection: 'column',
    },
    number: {
        backgroundColor: "#dadbdd",
        flex: 1,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#eeeeee',
    },
    number0: {
        backgroundColor: "#dadbdd",
        flex: 2,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#eeeeee',
    },
    toolBg: {
        backgroundColor: "#ff9500",
        flex: 1,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#eeeeee',
    },
    text: {
        textAlign: 'center',
        color: '#222222',
        fontSize: 30,
    },
    tool: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 30,
    },
    equal: {
        textAlign: 'right',
        color: '#222222',
        fontSize: 50,
        paddingRight: 10,
    }
});

export default ManHinhA
