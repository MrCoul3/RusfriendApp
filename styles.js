import {StyleSheet} from "react-native";

export const simpleStyles = {
    header: {
        height: '15%',
        backgroundColor: '#343434',
        color: '#fff'
    },
    footer: {
        height: '10%',
        backgroundColor: '#343434',
        color: '#fff',
        textAlign: 'center',
        paddingTop: '20px'
    },
    playButtonWrapper: {
        width: 40,
        // display: 'block'
    }
};
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


    button: {},
    menuItem: {
        flex: 1,
        // width: 100,
        // height: 100,
        backgroundColor: '#949494'
    },
    menuItemView: {
        height: 100,
        textAlign: 'center',
        backgroundColor: '#949494'

    },
    playButtonWrapper: {
        width: 40,
        // display: 'block'
    }
});
