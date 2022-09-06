import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

export default function CarouselImage(){
    return(
        <>
        <Carousel >
            <div className="image">
                <img src="/image/disney castle in the pink cloud, moon,pink.png"/>
            </div>
            <div className="image">
                <img src="/image/erceg7_dark_souls_213431b5-52f5-4a28-bfdb-f93817f8fa90.png"/>
            </div>
            <div className="image">
                <img src="/image/melvin_v_qrts_Avengers_saving_the_city_from_a_huge_asteroid_in__e5399415-64c5-4c73-9c2c-bc0a51f2ee3c.png"/>
            </div>
            <div className="image">
                <img src="/image/bali garden terraces, ghibli.png"/>
            </div>
            <div className="image">
                <img src="/image/tortoiseshell,cat,skyscraper.png"/>
            </div>
        </Carousel>
        <style jsx>{`
            .image{
                position:relative;
                width:700px;
                height:600px;
                margin:auto
            }
            @media(max-width:850px){
                .image{
                    width:100%;
                    height:400px
                }
            }
            
            `}</style>
        </>
    )
}