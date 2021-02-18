import React, { Component } from 'react'
import { Terracottocat } from './components/Terracottocat'
import { Octogatos } from './components/Octogatos'


export class App extends Component {
  render() {
    return (
    <body className="bg-gray-light">
      <header className="header mb-6">
        <div className="container px-4">
          <nav className="d-flex flex-items-center text-grey"></nav>
        </div>
      </header> 
      <main>
        <Terracottocat />
        <Octogatos />
      </main>
    </body>
    )
  }
}
