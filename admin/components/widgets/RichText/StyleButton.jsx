import React, { Component, PropTypes } from 'react';

class StyleButton extends Component {
  static propTypes = {
    active: PropTypes.bool,
    onToggle: PropTypes.func,
    style: PropTypes.string,
    label: PropTypes.string,
  };
  static defaultProps = {
    active: false,
    onToggle: undefined,
    style: undefined,
    label: undefined,
  };

  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    const { active, label } = this.props;
    let className = 'RichEditor-styleButton';
    if (active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {label}
      </span>
    );
  }
}


export default StyleButton;
