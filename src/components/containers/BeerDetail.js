import React from 'react'
import { withRouter } from 'react-router'
import BeerService from '../../util/BeerService';

function BeerDetail(props) {

    const firstRender = React.useRef(true)
    const [beer, setbeer] = React.useState({})

    const getBeer = async (id) => {

        let newBeer = await BeerService.getBeer(props.id)
        console.log(newBeer)
        setbeer(newBeer)
    }

    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            getBeer(props.id)
        }
        return
    })


    return (
        <div>
            <h1>{beer.name}</h1>
            <img src={beer.imagem_url} alt={beer.name} />
            <h2>{beer.tagline}</h2>
            <h2>{beer.description}</h2>
        </div>
    )

}


export default withRouter(BeerDetail)