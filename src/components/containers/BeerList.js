import React from 'react'
import BeerService from '../../util/BeerService'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

function BeerList() {

    const [beerList, setbeerList] = React.useState({})
    const [loaded, setloaded] = React.useState(false)
    const [next, setnext] = React.useState(1)
    const [error, seterror] = React.useState(false)

    const firstRender = React.useRef(true)

    const getBeers = async () => {

        let newBeerList = await BeerService.getList(next, 20)
        if (Object.keys(newBeerList).length > 0) {
            setbeerList({ ...beerList, ...newBeerList })
            setnext(next + 1)
        } else {
            console.log("No more beers")
            setnext(false)
        }
    }
    const scrollHandler = () => {
        if (window.innerHeight + document.documentElement.scrollTop
            >= document.documentElement.offsetHeight) {
            if (!next || error) return

            getBeers()
        }
    }

    React.useEffect(() => {

        if (firstRender.current) {
            firstRender.current = false
            getBeers()
        };
        scrollHandler()
    })

    window.onscroll = scrollHandler



    return (
        <div>
            <ul>
                {Object.keys(beerList).map(id => {
                    return (<li key={id}> <Link to={`/beer/${id}`}>{`${beerList[id].name} - ${beerList[id].tagline}`}</Link></li>)
                })}

            </ul>
            {
                next ? "" : <p>No more Beers to show </p>
            }
        </div>
    )
}

export default withRouter(BeerList)