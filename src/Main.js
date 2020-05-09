import React, { Component } from 'react'
import md5 from 'md5';
import arrow from './arrow.png';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
             output: "Hash"
        }

        this.hash = this.hash.bind(this);
    }

    hash(event){
        if(event.target.value != ''){
            let hash = md5(event.target.value);
            this.setState({
                output: hash
            })
        }else{
            this.setState({
                output: "Hash"
            })
        }
    }
    
    render() {
        return (
            <div className='main'>
                <div className="main__inner">
                    <div className="main__item">
                        <p className="main__title">Encrypt <span className='highlighter'>everything</span></p>
                    </div>
                    <div className="main__item">
                        <input type="text" placeholder='Symbols' onChange={this.hash} className="main__input"/>
                        <img src={arrow} alt="" className="main__img"/>
                        <div className="main__hash_container">
                            <p className="main__hash">{this.state.output}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
