//janine pfaff ReiseZiel.js und ReiseZiel.css

import React from 'react';
import './ReiseZiel.css';

//in diesem component werden die daten von der ReiseZielSeite übergeben und die Reiseziele angezeigt
const ReiseZiel = ({ item, children }) => (
    <div className="ReiseZiel">
        <div className="ReiseZiel-left">
            <h5>{item.preis}€ pro Woche</h5>
            <div className="ReiseZiel-preis">{item.zielStadt}, {item.zielLand}</div>
            <div className="ReiseZiel-description">Vom: {item.abreiseDatumZeit}</div>
            <div className="ReiseZiel-description">Bis: {item.rueckkehrDatumZeit}</div>
        </div>

        <div className="ReiseZiel-right">
            <div className="ReiseZiel-image" >
                <img src={item.bildUrl}className="ReiseZiel-logo" alt="logo" />
            </div>
            {children}
        </div>
    </div>
)

ReiseZiel.propTypes = {
    item: React.PropTypes.object.isRequired,
    children: React.PropTypes.node
};

export default ReiseZiel;