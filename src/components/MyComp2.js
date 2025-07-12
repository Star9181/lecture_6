import { Component } from 'react';

export class MyComp2 extends Component {
    //1. Properties/Variables
    name="Maulik"

    render() {
        return <h1>Hello, {this.name} Sinha</h1>
    }
}
