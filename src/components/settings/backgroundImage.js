import React, { Component, PropTypes } from 'react'

class BackgroundImage extends Component{

  constructor(props) {
    super(props)
    let image = props.settings.get('backgroundImage')
    this.state = { image, imageLink: image  }
  }

  render() {
    let { image, imageLink } = this.state
    return (
      <div className="background-image">
        <input
          type="text"
          value={imageLink}
          onChange={this.handleLinkChange.bind(this)}
        />
        { this.renderButtons() }
        <div className="preview">
          { image && <img className="preview" src={image} />}
        </div>
      </div>
    )
  }

  addImage() {
    this.setState({image: this.state.imageLink})
  }

  setImageAndInput(image) {
    this.setState({image: image, imageLink: image || ''})
  }

  saveImage() {
    this.props.updateSettings({backgroundImage: this.state.image})
  }

  deleteImage() {
    this.props.updateSettings({backgroundImage: ''})
    this.resetImage()
  }

  resetImage() {
    this.setImageAndInput(null)
  }

  handleLinkChange(event) {
    this.setState({image: null, imageLink: event.target.value})
  }

  renderButtons() {
    return this.state.image ? this.renderSaveButtons() : this.renderAddButton()
  }

  renderAddButton() {
    return (
      <button onClick={this.addImage.bind(this)}>Add background image</button>
    )
  }

  renderSaveButtons() {
    return (
      <div>
        <button onClick={this.saveImage.bind(this)}>Save</button>
        <button onClick={this.resetImage.bind(this)}>Reset</button>
        <button onClick={this.deleteImage.bind(this)}>Delete</button>
      </div>
    )
  }
}

BackgroundImage.propTypes = {
  settings: PropTypes.object.isRequired,
  updateSettings: PropTypes.func.isRequired
}

export default BackgroundImage
