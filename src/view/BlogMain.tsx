// <Button kind="primary">Radium Button</Button>
import * as Radium from 'radium'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

@Radium
export class Button extends React.Component<any, any> {
  static propTypes = {
    kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
  };
  constructor(public props, context) {
    super(props, context);
  }
  render() {
    // Radium extends the style attribute to accept an array. It will merge
    // the styles in order. We use this feature here to apply the primary
    // or warning styles depending on the value of the `kind` prop. Since its
    // all just JavaScript, you can use whatever logic you want to decide which
    // styles are applied (props, state, context, etc).
    return (
      <button
        style={[
          styles.base,
          styles[this.props.kind]
        ]}>
        {this.props.children}
      </button>
    );
  }
}

// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
  base: {
    color: '#fff',

    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: '#0074d9'
    }
  },

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  }
};

@Radium
export class NavPanel extends React.Component<any, any>{

  styles = {
    base: {
      left: 0,
      top: 0,
      height: '100%',
      background: '#2a2a2a',
      width: '170px',
      position: 'fixed'
    }
  }
  render() {
    return <div  style={[
      this.styles.base
    ]}>
      
    </div>
  }
}


@Radium
class BannerPanel extends React.Component<any, any>{
  styles = {
    base: {
      top: 0,
      left: '170px',
      bottom: 0,
      height: '100%',
      background: '#000000',
      width: '25%',
      position: 'fixed',
      display: 'block',
    },

    img: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: "url(http://upload.jianshu.io/daily_images/images/hdFXLS8EB5isQwxyzB9_.jpg)"
    }
  }
  render() {
    return <div  style={[
      this.styles.base
    ]}>
      <div style={[this.styles.img]}></div>
    </div>
  }
}

@Radium
class ContentPanel extends React.Component<any, any>{
  render() {
    return <div></div>
  }
}

class LoginBtns {

}


export class BlogMain extends React.Component<any, any>{
  static init() {
    ReactDOM.render(
      <div>
        <NavPanel></NavPanel>
        <div>
          <BannerPanel>

          </BannerPanel>
          <ContentPanel></ContentPanel>
        </div>
      </div>
      , document.getElementById('app'));
  }
}