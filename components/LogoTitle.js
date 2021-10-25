import coneIcon from '../assets/cone-logo.png';
import React, {useContext} from "react";

export default function LogoTitle() {
    return (
        <div  style={{
            textAlign: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            display: "flex",
            width: '100vw',
            height: '64px',
            backgroundColor: '#d2d2d2',
        }}>
            <img style={{
                width: '10%',
                position: 'absolute',
                // left: 'calc(50% - 17px)'
                right: '10px'
            }} src={coneIcon} alt=""/>
            <h1 style={{
                marginLeft: "10px",
                fontSize: '24px',
                fontWeight: 300
            }}>russian text app</h1>
        </div>
    );
}