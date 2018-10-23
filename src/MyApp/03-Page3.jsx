import React from 'react'
import MaskedInput from 'react-text-mask'

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            phone: 0, 
            time: '',
            date: '',
            datentime: ''
        }

        // this.exe1 = this.exe1.bind(this)
    }

    // exe1() {
    //     console.log("Phone: ", this.state.phone)
    //     this.setState({ phone: '' })
    // }

    render(){
        return(
            <div>
                <h1>React Input Mask</h1>
                <a href="https://www.npmjs.com/package/react-text-mask">NPM Location</a>
                <br/>
                <a href="https://github.com/text-mask/text-mask/tree/master/react/#readme">Docs</a>
                <hr/>
                <br/><br/>


                <div className="maskInputContainer">
                    <span className="labelStyle">Phone: </span>
                    <MaskedInput
                        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        placeholder="(888) 888-8888)"
                        guide={true}
                        onChange={ (e) => { this.setState({ phone: e.target.value }) } }
                        className="maskInputStyle"
                    />
                </div>
                <br/>

                <div className="maskInputContainer">
                    <span className="labelStyle">Time: </span>
                    <MaskedInput 
                        mask={[/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/]}
                        placeholder="00:00:00"
                        guide={true}
                        onChange={(e) => { this.setState({ date: e.target.value }) }}
                        className="maskInputStyle"
                    />
                </div>
                <br/>

                <div className="maskInputContainer">
                    <span className="labelStyle">Date: </span>
                    <MaskedInput 
                        // mask={[/[0-1]/, /[0-9]/, '/', /[03]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                        mask={ (input) => {
                            console.log("executed")
                            console.log("The input: ", input)
                            return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
                        } }
                        placeholder="MM/DD/YYY"
                        guide={true}
                        onChange={(e) => { this.setState({ time: e.target.value }) }}
                        className="maskInputStyle"
                    />
                </div>
                <br/>

                <div className="maskInputContainer">
                    <span className="labelStyle">Date & Time: </span>
                    <MaskedInput 
                        mask={[/[0-1]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/]}
                        placeholder="99/99/99 00:00:00"
                        guide={false}
                        onChange={(e) => { this.setState({ datentime: e.target.value }) }}
                        className="maskInputStyle"
                    />
                </div>
                <br/>



                <br/>
                {/* <button onClick={ this.exe1 } >Exe1</button> */}

            </div>
        )
    }
}