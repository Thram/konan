import React, { Component, PropTypes } from 'react';
import StyleButton from './StyleButton';

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

class InlineStyleControls extends Component {
  static propTypes = {
    editorState: PropTypes.shape({}),
    onToggle: PropTypes.func,
  };
  static defaultProps = {
    editorState: undefined,
    onToggle: undefined,
  };
  render = () => {
    const { editorState, onToggle } = this.props;
    const currentStyle = editorState.getCurrentInlineStyle();
    return (
      <div className={'RichEditor-controls'}>
        {INLINE_STYLES.map(type =>
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={onToggle}
            style={type.style}
          />,
        )}
      </div>
    );
  }
}

export default InlineStyleControls;
