import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';


export default class Content extends Component {
    render() {
        return (
            <div class='content'>
                <Navbar>
                    <Container>
                        <Navbar.Text>
                            <h2 class="textcolor">Click on the button to get a cat</h2>
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th scope="col">Url</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Example</th>
                                    </tr>
                                </thead>
                                <tbody className='table-striped'>
                                    <tr>
                                        <th>/cat<br></br>/c</th>
                                        <td class="d-none d-lg-table-cell">Will return a random cat</td>
                                        <td>
                                            <a href="https://cataas.com/cat" class="btn btn-success" target="_blank">Random cat</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>/cat/:tag<br></br>/c/:tag</th>
                                        <td class="d-none d-lg-table-cell">Will return a random cat with a <code>:tag</code></td>
                                        <td>
                                            <a class="btn btn-success d-none d-sm-inline-block" href="https://cataas.com/cat/cute" target="_blank">Random cute cat</a>
                                            <a class="btn btn-success d-inline-block d-sm-none" href="https://cataas.com/cat/cute" target="_blank">Example</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>/cat/gif<br></br>/c/gif</th>
                                        <td class="d-none d-lg-table-cell">Will return a random gif cat \o/</td>
                                        <td>
                                            <a class="btn btn-success d-none d-sm-inline-block" href="https://cataas.com/cat/gif" target="_blank">Random gif cat</a>
                                            <a class="btn btn-success d-inline-block d-sm-none" href="https://cataas.com/cat/gif" target="_blank">Example</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>/cat/:tag/says/:text<br></br>/c/:tag/s/:text</th>
                                        <td class="d-none d-lg-table-cell">Will return a random cat saying  <code>:text</code></td>
                                        <td>
                                            <a class="btn btn-success d-none d-sm-inline-block" href="https://cataas.com/cat/cute/says/hello" target="_blank">Random cute cat saying hello</a>
                                            <a class="btn btn-success d-inline-block d-sm-none" href="https://cataas.com/cat/cute/says/hello" target="_blank">Example</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>/cat/:tag/says/:text<br></br>/c/:tag/s/:text</th>
                                        <td class="d-none d-lg-table-cell">Will return a random cat with a <code>:tag</code> and saying <code>:text</code></td>
                                        <td>
                                            <a class="btn btn-success d-none d-sm-inline-block" href="https://cataas.com/cat/cute/says/hello" target="_blank">Random cute cat saying hello</a>
                                            <a class="btn btn-success d-inline-block d-sm-none" href="https://cataas.com/cat/cute/says/hello" target="_blank">Example</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>/cat/says/:text?size=:size&color=:color<br></br>/c/s/:text?s=:size&c=:color</th>
                                        <td class="d-none d-lg-table-cell">Will return a random cat saying <code>:text</code> with text's  <code>:size</code> and <br></br>text's <code>:color</code></td>
                                        <td>
                                            <a class="btn btn-success d-none d-sm-inline-block" href="https://cataas.com/cat/says/hello?size=50&amp;color=red" target="_blank">Custom random cat saying hello</a>
                                            <a class="btn btn-success d-inline-block d-sm-none" href="https://cataas.com/cat/says/hello?size=50&amp;color=red" target="_blank">Example</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>/cat?type=:type<br></br>/c?t=:type</th>
                                        <td class="d-none d-lg-table-cell">Will return a random cat with image <code>:type</code> (small or sm, medium or md, <br></br>square or sq, original or or)</td>
                                        <td>
                                            <a class="btn btn-success d-none d-sm-inline-block" href="https://cataas.com/cat?type=sq" target="_blank">Random cat with type</a>
                                            <a class="btn btn-success d-inline-block d-sm-none" href="https://cataas.com/cat?type=sq" target="_blank">Example</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>/cat?filter=:filter<br></br>/c?fi=:filter</th>
                                        <td class="d-none d-lg-table-cell">Will return a random cat with image filtered by <code>:filter</code> (blur, <br></br>mono, sepia, negative, paint, pixel)</td>
                                        <td>
                                            <a class="btn btn-success d-none d-sm-inline-block" href="https://cataas.com/cat?filter=sepia" target="_blank">Random cat filtered</a>
                                            <a class="btn btn-success d-inline-block d-sm-none" href="https://cataas.com/cat?filter=sepia" target="_blank">Example</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>/cat?width=:width or <br></br>/cat?height=:height<br></br>/c?wi=:width or /c?he=:height</th>
                                        <td class="d-none d-lg-table-cell"> <br></br>Will return a random cat with <code>:width</code>or <code>:height</code> </td>
                                        <td>
                                            <a class="btn btn-success d-none d-sm-inline-block" href="https://cataas.com/cat?width=100" target="_blank">Random cat with custom size</a>
                                            <a class="btn btn-success d-inline-block d-sm-none" href="https://cataas.com/cat?width=100" target="_blank">Example</a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </Navbar.Text>
                    </Container>
                </Navbar>
            </div>
        )
    }
}