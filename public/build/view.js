var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define("src/view/BlogMain", ["require", "exports", 'radium', 'react', 'react-dom'], function (require, exports, Radium, React, ReactDOM) {
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(props, context) {
            _super.call(this, props, context);
            this.props = props;
        }
        Button.prototype.render = function () {
            return (React.createElement("button", {style: [
                styles.base,
                styles[this.props.kind]
            ]}, this.props.children));
        };
        Button.propTypes = {
            kind: React.PropTypes.oneOf(['primary', 'warning']).isRequired
        };
        Button = __decorate([
            Radium, 
            __metadata('design:paramtypes', [Object, Object])
        ], Button);
        return Button;
    }(React.Component));
    exports.Button = Button;
    var styles = {
        base: {
            color: '#fff',
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
    var NavPanel = (function (_super) {
        __extends(NavPanel, _super);
        function NavPanel() {
            _super.apply(this, arguments);
            this.styles = {
                base: {
                    left: 0,
                    top: 0,
                    height: '100%',
                    background: '#2a2a2a',
                    width: '170px',
                    position: 'fixed'
                }
            };
        }
        NavPanel.prototype.render = function () {
            return React.createElement("div", {style: [
                this.styles.base
            ]});
        };
        NavPanel = __decorate([
            Radium, 
            __metadata('design:paramtypes', [])
        ], NavPanel);
        return NavPanel;
    }(React.Component));
    exports.NavPanel = NavPanel;
    var BannerPanel = (function (_super) {
        __extends(BannerPanel, _super);
        function BannerPanel() {
            _super.apply(this, arguments);
            this.styles = {
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
            };
        }
        BannerPanel.prototype.render = function () {
            return React.createElement("div", {style: [
                this.styles.base
            ]}, React.createElement("div", {style: [this.styles.img]}));
        };
        BannerPanel = __decorate([
            Radium, 
            __metadata('design:paramtypes', [])
        ], BannerPanel);
        return BannerPanel;
    }(React.Component));
    var ContentPanel = (function (_super) {
        __extends(ContentPanel, _super);
        function ContentPanel() {
            _super.apply(this, arguments);
        }
        ContentPanel.prototype.render = function () {
            return React.createElement("div", null);
        };
        ContentPanel = __decorate([
            Radium, 
            __metadata('design:paramtypes', [])
        ], ContentPanel);
        return ContentPanel;
    }(React.Component));
    var LoginBtns = (function () {
        function LoginBtns() {
        }
        return LoginBtns;
    }());
    var BlogMain = (function (_super) {
        __extends(BlogMain, _super);
        function BlogMain() {
            _super.apply(this, arguments);
        }
        BlogMain.init = function () {
            ReactDOM.render(React.createElement("div", null, React.createElement(NavPanel, null), React.createElement("div", null, React.createElement(BannerPanel, null), React.createElement(ContentPanel, null))), document.getElementById('app'));
        };
        return BlogMain;
    }(React.Component));
    exports.BlogMain = BlogMain;
});
define("src/view/main", ["require", "exports", "src/view/BlogMain"], function (require, exports, BlogMain_1) {
    BlogMain_1.BlogMain.init();
});
console.log('http://sanwu.org');
define("src/view/Navbar", ["require", "exports", 'react'], function (require, exports, React) {
    var Navbar = (function (_super) {
        __extends(Navbar, _super);
        function Navbar() {
            _super.apply(this, arguments);
        }
        return Navbar;
    }(React.Component));
    exports.Navbar = Navbar;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3L0Jsb2dNYWluLnRzeCIsInNyYy92aWV3L21haW4udHMiLCJ0eXBpbmdzL251bGwudHMiLCJzcmMvdmlldy9OYXZiYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQU1BO1FBQTRCLDBCQUF5QjtRQUluRCxnQkFBbUIsS0FBSyxFQUFFLE9BQU87WUFDL0Isa0JBQU0sS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBREwsVUFBSyxHQUFMLEtBQUssQ0FBQTtRQUV4QixDQUFDO1FBQ0QsdUJBQU0sR0FBTjtZQU1FLE1BQU0sQ0FBQyxDQUNMLHFCQUFDLE1BQU0sSUFDTCxLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxDQUFDLElBQUk7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ3ZCLEdBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFTLENBQ2QsQ0FDVixDQUFDO1FBQ0osQ0FBQztRQXJCTSxnQkFBUyxHQUFHO1lBQ2pCLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVU7U0FDL0QsQ0FBQztRQUpKO1lBQUMsTUFBTTs7a0JBQUE7UUF3QlAsYUFBQztJQUFELENBdkJBLEFBdUJDLENBdkIyQixLQUFLLENBQUMsU0FBUyxHQXVCMUM7SUF2QlksY0FBTSxTQXVCbEIsQ0FBQTtJQUlELElBQUksTUFBTSxHQUFHO1FBQ1gsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLE1BQU07WUFJYixRQUFRLEVBQUU7Z0JBQ1IsVUFBVSxFQUFFLFNBQVM7YUFDdEI7U0FDRjtRQUVELE9BQU8sRUFBRTtZQUNQLFVBQVUsRUFBRSxTQUFTO1NBQ3RCO1FBRUQsT0FBTyxFQUFFO1lBQ1AsVUFBVSxFQUFFLFNBQVM7U0FDdEI7S0FDRixDQUFDO0lBR0Y7UUFBOEIsNEJBQXlCO1FBQXZEO1lBQThCLDhCQUF5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
