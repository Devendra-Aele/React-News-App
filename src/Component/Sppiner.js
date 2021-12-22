import React, { Component } from 'react'
import loading from './loading.gif'

export default class Sppiner extends Component {
    render() {
        return (
            <div className='text-center my-5'>
                <img src={loading} alt="hello"></img>
            </div>
        )
    }
}
