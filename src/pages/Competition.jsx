import React, { Component } from 'react';

import Navbars from '../component/Navbars';
import BannerAcara from '../component/banner/BannerAcara';
import Cards from '../component/card/competition/Cards';

class Competition extends Component {

    render() {
        return (
            <div>
                <Navbars/>
                <BannerAcara
                title = "Competition"
                description = "Kompetisi invofest 2023"
                />
                <Cards/>
            </div>
        );
    }
}



export default Competition;