import React from 'react'

export class Terracottocat extends React.Component {
  render() {
    return (
      <div className="container px-4">
          <div className="d-sm-flex flex-wrap gutter-condensed gutter-md">
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-6 post" id="terracottocat">
            <a class="d-block p-2 mb-3 bg-white border rounded-3" href="/terracottocat/">
          <img class="d-block width-fit height-auto rounded-1" src="https://octodex.github.com//images/Terracottocat_Single.png" alt="Terracottocat" width="400" height="400">
            </img>
            </a>
            <div className="d-flex flex-items-start">
              <span className="pr-1 text-gray">#149:</span>
              <a className="link-gray-dark text-bold" href="https://octodex.github.com//terracottocat/">
                Terracottocat
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}