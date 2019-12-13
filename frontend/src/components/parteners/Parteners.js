import React from 'react'
import * as data from './my_fake_db.json'

class Parteners extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parteners: {
                megaImage: '',
                carturesti: '',
                farmaciaVital: '',
                enatural: '',
                camaraCuMerine: '',
                stamDeVorba: '',
                allBoutique: '',
                tastingRomania: '',
                iCosmetice: '',
                EllaPlant: '',
                byaPlantMed: '',
                floraFarm: '',
                redPixie: '',
                getWell: '',
                natura4All: '',
                avalon: ''
            }
           
        }
    }


        retrieveParteners = () => {
            let megaImage = data.parteners.megaImage
            let carturesti = data.parteners.carturesti
            let farmaciaVital = data.parteners.farmaciaVital
            let enatural = data.parteners.eNatural
            let camaraCuMerine = data.parteners.camaraCuMerinde
            let stamDeVorba = data.parteners.stamDeVorba
            let allBoutique = data.parteners.allBoutique
            let tastingRomania = data.parteners.tastingRomania
            let iCosmetice = data.parteners.iCosmetice
            let EllaPlant = data.parteners.elaPlant
            let byaPlantMed = data.parteners.byaPlant
            let floraFarm = data.parteners.floraFarm
            let redPixie = data.parteners.redPixie
            let getWell = data.parteners.getWell
            let natura4All = data.parteners.natura4All
            let avalon = data.parteners.avalon

            this.setState({
                    megaImage: megaImage,
                    carturesti: carturesti,
                    farmaciaVital: farmaciaVital,
                    enatural: enatural,
                    camaraCuMerine: camaraCuMerine,
                    stamDeVorba: stamDeVorba,
                    allBoutique: allBoutique,
                    tastingRomania: tastingRomania,
                    iCosmetice: iCosmetice,
                    EllaPlant: EllaPlant,
                    byaPlantMed: byaPlantMed,
                    floraFarm: floraFarm,
                    redPixie: redPixie,
                    getWell: getWell,
                    natura4All: natura4All,
                    avalon: avalon

            })
            if(this.state.parteners.megaImage !== '') {
                console.log(this.state.megaImage)
            }
            
        }

componentDidMount() {
    this.retrieveParteners();
}
    
render() {
    return(
        <div></div>
    )
}
}

export default Parteners;