// <Button kind="primary">Radium Button</Button>
import * as Radium from 'radium'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {RecentPosts} from 'RecentPosts'

@Radium
export class Button extends React.Component<any, any> {
  static propTypes = {
    kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
  };
  constructor(public props, context) {
    super(props, context);
  }
  render() {
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
export class NavBtn extends React.Component<any, any>{
  public styles = {
    item: {
      color: '#fff',
      fontSize: '18px',
      textAlign: 'center',
      lineHeight: '36px'
    },
    active: {
      background: 'brown',
    },
    hover: {
      background: '#e45735'
    }
  }

  public state = {
    hover: false
  }

  onMouseLeave() {
    return () => {
      this.state.hover = false;
      this.forceUpdate();
    }

  }

  onMouseEnter() {
    return () => {
      this.state.hover = true;
      this.forceUpdate();
    }

  }



  public render() {
    var styles: any = [this.styles.item];
    console.log(this.props)
    if (this.props.active) {
      styles.push(this.styles.active);
    } else {
      if (this.state.hover) {
        styles.push(this.styles.hover)
      }
    }
    return <div style={styles}
      onMouseEnter={this.onMouseEnter() }
      onMouseLeave={this.onMouseLeave() }>
      {this.props.children}</div>
  }
}

@Radium
export class NavPanel extends React.Component<any, any>{

  styles = {
    base: {
      left: 0,
      top: 0,
      height: '100%',
      background: '#392519',
      width: '170px',
      position: 'fixed'
    }

  }
  render() {
    return <div  style={[
      this.styles.base
    ]}>
      <NavBtn active={true}>首页</NavBtn>
      <NavBtn>专题</NavBtn>
      <NavBtn>问答</NavBtn>
    </div>
  }
}

@Radium
class BannerInfo extends React.Component<any, any>{

  public styles = {
    all: {
      lineHeight: '40px'
    },
    h1: {
      fontSize: '38.5px',
      textRendering: 'optimizelegibility',
      margin: '10px 0',
      fontWeight: 'bold',
      textShadow: '-1px 0 0 rgba(0,0,0,0.75)'
    },
    h3: {
      fontSize: '18.5px',
      fontWeight: 'bold'
    },
    btn: {
      width: '154px',
      height: '44px',
      lineHeight: '44px',
      color: 'yellow',
      background: '#49be38',
      textAlign: 'center',
      verticalAlign: 'middle',
      cursor: 'pointer',
      fontSize: '20px',
      borderRadius: '4px'
    }
  }

  public render() {
    return <div style={[this.styles.all]}>
      <h1 style={[this.styles.h1]}>Sanwu.org</h1>
      <div style={[this.styles.h3]}>探索生新知，分享即价值</div>
      <div>一个专注技术探索的社区</div>
      <div style={[this.styles.btn]}>提笔分享经验</div>
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
      backgroundImage: "url(/images/taoteng.jpg)"
    },
    bottom: {
      position: 'absolute',
      bottom: 0,
      padding: '30px'
    }
  }
  render() {
    return <div  style={[
      this.styles.base
    ]}>
      <div style={[this.styles.img]}>
        <div style={[this.styles.bottom]}>
          <BannerInfo/>

        </div>
      </div>

    </div>
  }
}

@Radium
class ContentPanel extends React.Component<any, any>{
  style = {
    base: {
      marginLeft: '25.0%',
      left:'170px',
      position:'absolute'
    }
  }


  render() {
    return <div style={[this.style.base]}>
      <RecentPosts/>
    </div>
  }
}

class LoginBtns {

}


export class BlogMain extends React.Component<any, any>{

  static init() {

    var styles = {
      content: {
        width: '100%'
      }
    };

    ReactDOM.render(
      <div>
        <NavPanel></NavPanel>
        <div style={[styles.content]}>
          <BannerPanel/>
          <ContentPanel/>
        </div>
      </div>
      , document.getElementById('app'));
  }
}