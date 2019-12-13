import React from 'react'
import * as data from './my_fake_db.json'

class Parteners extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            megaImage: data.parteners.megaImage,
            carturesti: data.parteners.carturesti,
            farmaciaVital: data.parteners.farmaciaVital,
            eNatural: data.parteners.eNatural,
            camaraCuMerinde: data.parteners.camaraCuMerinde,
            stamDeVorba: data.parteners.stamDeVorba,
            allBoutique: data.parteners.allBoutique,
            tastingRomania: data.parteners.tastingRomania,
            iCosmetice: data.parteners.iCosmetice,
            elaPlant: data.parteners.elaPlant,
            byaPlantMed: data.parteners.byaPlantMed,
            floraFarm: data.parteners.floraFarm,
            redPixie: data.parteners.redPixie,
            getWell: data.parteners.getWell,
            natura4All: data.parteners.natura4All,
            avalon: data.parteners.avalon


        }
    }


    // retrieveParteners = () => {
    // }

    componentDidMount() {
        // this.retrieveParteners();
        console.log(this.state.megaImage)
    }

    render() {
        return (
            <div className="parteners-container" >
                <h1 className="parteners-title">Parteneri Online</h1>
                <div className="logo-container">
                <img className="one" src={this.state.megaImage} alt="Mega-Image"/>
                <img className="two" src={this.state.carturesti} alt="Carturesti"/>
                <img className="three" src={this.state.farmaciaVital} alt="farmacia-Vital"/>
                <img className="four" src={this.state.eNatural} alt="e-Natural"/>
                {/* <img className="five" src={this.state.camaraCuMerinde} alt="Camara-Cu-Merinde"/>
                <img className="six" src={this.state.stamDeVorba} alt="Stam-De-Vorba"/>
                <img className="seven" src={this.state.allBoutique} alt="allBoutique"/>
                <img className="eight" src={this.state.tastingRomania} alt="Tasting-Romania"/>
                <img className="nine" src={this.state.iCosmetice} alt="iCosmetice"/>
                <img className="ten" src={this.state.elaPlant} alt="ElaPlant"/>
                <img className="eleven" src={this.state.byaPlantMed} alt="ByaPlantMed"/>
                <img className="twelve" src={this.state.floraFarm} alt="FloraFarm"/>
                <img className="thirteen" src={this.state.redPixie} alt="RedPixie"/>
                <img className="fourteen" src={this.state.getWell} alt="GetWell"/>
                <img className="fifthteen" src={this.state.natura4All} alt="Natura4All"/>
                <img className="sixteen" src={this.state.avalon} alt="Avalon"/> */}
                </div>
            </div>
        )
    }
}

export default Parteners;