import { LitElement, html } from 'lit-element';
import axios from 'axios';

class MyApp extends LitElement {
    render() {
        console.log("axios", axios);
        let mountains = [
            { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
            { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" }
        ];
        return html`<h1>Hello Table</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Price</th> 
            </tr>
            <tr>
                <td>Jill</td>
                <td>Belgium</td>
                <td>50 EUR</td>
            </tr>
            <tr>
                <td>Eve</td>
                <td>Germany</td>
                <td>94 EUR</td>
            </tr>
        </table>
        
        `;
    }
}

customElements.define('my-app', MyApp);