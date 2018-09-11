import React from 'react'
import MaskedInput from 'react-text-mask'

export default class extends React.Component{
    constructor(props){
        super(props)

        this.state = { phone: 0 }

        this.exe1 = this.exe1.bind(this)
    }

    exe1() {
        console.log("Phone: ", this.state.phone)
        this.setState({ phone: '' })
    }

    render(){
        return(
            <div>
                <h1>React Input Mask</h1>

                <div>
                    <MaskedInput
                        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        placeholder="Enter a phone number"
                        guide={false}
                        onChange={ (e) => { this.setState({ phone: e.target.value }) } }
                    />
                </div>
                <br/>

                <button onClick={ this.exe1 } >Exe1</button>

            </div>
        )
    }
}