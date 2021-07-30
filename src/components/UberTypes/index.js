/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, Pressable} from 'react-native';
// eslint-disable-next-line no-unused-vars
import styles from './styles.js';
import UberTypeRow from '../UberTypeRow/index.js';

import typesData from '../../assets/data/types';

const UberTypes = (props) => {
    const confirm = () => {
        console.warn({data: 'confirm'});
    };

    return (
        <View>
            {typesData.map((type :{...}) => (
                <UberTypeRow type={type} />
            ))}

            <Pressable onPress={confirm} style={{
                backgroundColor: 'black',
                padding: 10,
                margin: 10,
                alignItems: 'center',
            }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                    Confirm Hero
                </Text>
            </Pressable>
        </View>
    );
};

export default UberTypes;
