import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

class Card extends Component{
  render() {
    let { className, title, href } = this.props
    let cardClasses = classNames(
      'card',
      className
    )
    return (
      <a className={cardClasses} href={href} title={title}>
        <div className="content">
          <h6 className="title">
            <img src={`chrome://favicon/${href}`}/> {title || 'No title'}
          </h6>
        </div>
      </a>
    )
  }
}

Card.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default Card
