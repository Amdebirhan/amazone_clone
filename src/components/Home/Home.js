import './Home.css'
import React from 'react'
import Product from './Component/Product'

function Home() {
    return (
        <div className='home' >
            <div className="home__container">
                <img className='home__image' src="https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_SX1500_FMwebp_.jpeg" alt="" />
            </div>
            <div className="home__row">
                <Product
                    id={2345954}
                    title={'The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers'}
                    price={123}
                    image={'https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg'}
                    rating={5} />
                <Product
                    id={2305954}
                    title={'The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers'}
                    price={123}
                    image={'https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg'}
                    rating={5} />
            </div>
            <div className="home__row">
                <Product
                    id={2845954}
                    title={'The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers'}
                    price={123}
                    image={'https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg'}
                    rating={5} />
                <Product
                    id={2375954}
                    title={'The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers'}
                    price={123}
                    image={'https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg'}
                    rating={5} />
                <Product
                    id={2345554}
                    title={'The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers'}
                    price={123}
                    image={'https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg'}
                    rating={5} />
            </div>
            <div className="home__row">
                <Product
                    id={2345953}
                    title={'The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers. The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers'}
                    price={123}
                    image={'https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg'}
                    rating={5} />
            </div>
        </div>
    )
}

export default Home