import React from 'react'

export class Octocat extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="condense">
            <div className="cats-container">
              <a className="cat-border" href={this.props.linkToCat}>
          <img className="image" src={this.props.imagesrc} width="400" height="400">
            </img>
            </a>
            <div className="numberNameIndex">
              <span className="numberText">{this.props.number}:</span>
              <a className="catName" href={this.props.linkToCat}>
                {this.props.name}
              </a>
              <div className="author">
              <a href={this.props.linkToAuthor}>
                <img className="authorImage" src={this.props.author} width="24" height="24">
                </img>
              </a>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}