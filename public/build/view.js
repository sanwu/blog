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
define("src/view/RecentPosts", ["require", "exports", 'radium', 'react'], function (require, exports, Radium, React) {
    var RecentPosts = (function (_super) {
        __extends(RecentPosts, _super);
        function RecentPosts() {
            var _this = this;
            _super.call(this);
            this.styles = {
                base: {
                    width: '100%',
                    marginLeft: '30px'
                },
                item: {
                    position: 'relative',
                    width: '100%',
                    paddingRight: '2px',
                    paddingBottom: '17px',
                    margin: '0 0 17px',
                    borderBottom: '1px dashed #d9d9d9',
                    boxSizing: 'border-box',
                    wordWrap: 'break-word'
                },
                title: {
                    textDecoration: 'none',
                    color: '#222',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    lineHeight: 1.5
                },
                time: {},
                authorName: {
                    color: '#4094c7',
                    fontSize: '12px',
                    textDecoration: 'none',
                    fontFamily: ' "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif',
                },
                listFooter: {
                    fontFamily: ' "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif',
                    fontSize: '12px',
                    fontWeight: 'normal',
                    textDecoration: 'none',
                    lineHeight: '20px'
                },
                clearDefautStyle: {
                    textDecoration: 'none',
                    color: '#222'
                }
            };
            this.state = {
                topics: null,
                users: null
            };
            $.get('/api/posts', function (res) {
                var topics = res.topic_list.topics;
                var users = res.users;
                _this.state.topics = topics;
                _this.state.users = users;
                _this.forceUpdate();
            });
        }
        RecentPosts.prototype.getUserInfoById = function (userId) {
            for (var i in this.state.users) {
                var user = this.state.users[i];
                if (user.id == userId) {
                    return user;
                }
            }
        };
        RecentPosts.prototype.getTopicPostUserName = function (topic) {
            var poster = topic.posters[0];
            console.log(poster);
            var userInfo = this.getUserInfoById(poster.user_id);
            if (userInfo) {
                return userInfo.username;
            }
            else {
                return '三巫社区';
            }
        };
        RecentPosts.prototype.render = function () {
            var _this = this;
            var posts = [];
            if (this.state.topics) {
                this.state.topics.forEach(function (topic) {
                    posts.push(React.createElement("div", {key: Math.random(), style: [_this.styles.item]}, React.createElement("div", null, React.createElement("p", null, React.createElement("a", {style: [_this.styles.authorName], target: "_blank", href: "http://answer.sanwu.org/users/" + _this.getTopicPostUserName(topic) + " "}, _this.getTopicPostUserName(topic))), React.createElement("h4", null, React.createElement("a", {target: "_blank", href: "http://answer.sanwu.org/t/topic/" + topic.id, style: [_this.styles.title]}, topic.title)), React.createElement("div", {style: [_this.styles.listFooter]}, React.createElement("a", {target: "_blank", href: "http://answer.sanwu.org/t/topic/" + topic.id, style: [_this.styles.clearDefautStyle]}, "阅读 ", topic.views), "        ", React.createElement("a", {target: "_blank", href: "http://answer.sanwu.org/t/topic/" + topic.id, style: [_this.styles.clearDefautStyle]}, "· 评论 ", topic.reply_count), "        ", React.createElement("span", null, " · 喜欢 ", topic.like_count), React.createElement("span", null, " · 打赏 0")))));
                });
            }
            return React.createElement("div", {style: [
                this.styles.base
            ]}, posts);
        };
        RecentPosts = __decorate([
            Radium, 
            __metadata('design:paramtypes', [])
        ], RecentPosts);
        return RecentPosts;
    }(React.Component));
    exports.RecentPosts = RecentPosts;
});
define("src/view/BlogMain", ["require", "exports", 'radium', 'react', 'react-dom', "src/view/RecentPosts"], function (require, exports, Radium, React, ReactDOM, RecentPosts_1) {
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
    var NavBtn = (function (_super) {
        __extends(NavBtn, _super);
        function NavBtn() {
            _super.apply(this, arguments);
            this.styles = {
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
            };
            this.state = {
                hover: false
            };
        }
        NavBtn.prototype.onMouseLeave = function () {
            var _this = this;
            return function () {
                _this.state.hover = false;
                _this.forceUpdate();
            };
        };
        NavBtn.prototype.onMouseEnter = function () {
            var _this = this;
            return function () {
                _this.state.hover = true;
                _this.forceUpdate();
            };
        };
        NavBtn.prototype.render = function () {
            var styles = [this.styles.item];
            console.log(this.props);
            if (this.props.active) {
                styles.push(this.styles.active);
            }
            else {
                if (this.state.hover) {
                    styles.push(this.styles.hover);
                }
            }
            return React.createElement("div", {style: styles, onMouseEnter: this.onMouseEnter(), onMouseLeave: this.onMouseLeave()}, this.props.children);
        };
        NavBtn = __decorate([
            Radium, 
            __metadata('design:paramtypes', [])
        ], NavBtn);
        return NavBtn;
    }(React.Component));
    exports.NavBtn = NavBtn;
    var NavPanel = (function (_super) {
        __extends(NavPanel, _super);
        function NavPanel() {
            _super.apply(this, arguments);
            this.styles = {
                base: {
                    left: 0,
                    top: 0,
                    height: '100%',
                    background: '#392519',
                    width: '170px',
                    position: 'fixed'
                }
            };
        }
        NavPanel.prototype.render = function () {
            return React.createElement("div", {style: [
                this.styles.base
            ]}, React.createElement(NavBtn, {active: true}, "首页"), React.createElement(NavBtn, null, "专题"), React.createElement(NavBtn, null, "问答"));
        };
        NavPanel = __decorate([
            Radium, 
            __metadata('design:paramtypes', [])
        ], NavPanel);
        return NavPanel;
    }(React.Component));
    exports.NavPanel = NavPanel;
    var BannerInfo = (function (_super) {
        __extends(BannerInfo, _super);
        function BannerInfo() {
            _super.apply(this, arguments);
            this.styles = {
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
            };
        }
        BannerInfo.prototype.render = function () {
            return React.createElement("div", {style: [this.styles.all]}, React.createElement("h1", {style: [this.styles.h1]}, "Sanwu.org"), React.createElement("div", {style: [this.styles.h3]}, "探索生新知，分享即价值"), React.createElement("div", null, "一个专注技术探索的社区"), React.createElement("div", {style: [this.styles.btn]}, "提笔分享经验"));
        };
        BannerInfo = __decorate([
            Radium, 
            __metadata('design:paramtypes', [])
        ], BannerInfo);
        return BannerInfo;
    }(React.Component));
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
                    backgroundImage: "url(/images/taoteng.jpg)"
                },
                bottom: {
                    position: 'absolute',
                    bottom: 0,
                    padding: '30px'
                }
            };
        }
        BannerPanel.prototype.render = function () {
            return React.createElement("div", {style: [
                this.styles.base
            ]}, React.createElement("div", {style: [this.styles.img]}, React.createElement("div", {style: [this.styles.bottom]}, React.createElement(BannerInfo, null))));
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
            this.style = {
                base: {
                    marginLeft: '25.0%',
                    left: '170px',
                    position: 'absolute'
                }
            };
        }
        ContentPanel.prototype.render = function () {
            return React.createElement("div", {style: [this.style.base]}, React.createElement(RecentPosts_1.RecentPosts, null));
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
            var styles = {
                content: {
                    width: '100%'
                }
            };
            ReactDOM.render(React.createElement("div", null, React.createElement(NavPanel, null), React.createElement("div", {style: [styles.content]}, React.createElement(BannerPanel, null), React.createElement(ContentPanel, null))), document.getElementById('app'));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3L1JlY2VudFBvc3RzLnRzeCIsInNyYy92aWV3L0Jsb2dNYWluLnRzeCIsInNyYy92aWV3L21haW4udHMiLCJ0eXBpbmdzL251bGwudHMiLCJzcmMvdmlldy9OYXZiYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQW1EQTtRQUFpQywrQkFBeUI7UUF1RHREO1lBdkRKLGlCQXdIQztZQWhFTyxpQkFBTyxDQUFDO1lBdERMLFdBQU0sR0FBRztnQkFDWixJQUFJLEVBQUU7b0JBQ0YsS0FBSyxFQUFFLE1BQU07b0JBQ2IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCO2dCQUVELElBQUksRUFBRTtvQkFDRixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsS0FBSyxFQUFFLE1BQU07b0JBQ2IsWUFBWSxFQUFFLEtBQUs7b0JBQ25CLGFBQWEsRUFBRSxNQUFNO29CQUNyQixNQUFNLEVBQUUsVUFBVTtvQkFDbEIsWUFBWSxFQUFFLG9CQUFvQjtvQkFDbEMsU0FBUyxFQUFFLFlBQVk7b0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO2lCQUN6QjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsY0FBYyxFQUFFLE1BQU07b0JBQ3RCLEtBQUssRUFBRSxNQUFNO29CQUNiLFFBQVEsRUFBRSxNQUFNO29CQUNoQixVQUFVLEVBQUUsTUFBTTtvQkFDbEIsVUFBVSxFQUFFLEdBQUc7aUJBQ2xCO2dCQUNELElBQUksRUFBRSxFQUVMO2dCQUNELFVBQVUsRUFBRTtvQkFDUixLQUFLLEVBQUUsU0FBUztvQkFDaEIsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLGNBQWMsRUFBRSxNQUFNO29CQUN0QixVQUFVLEVBQUUsc0lBQXNJO2lCQUNySjtnQkFDRCxVQUFVLEVBQUU7b0JBQ1IsVUFBVSxFQUFFLHNJQUFzSTtvQkFDbEosUUFBUSxFQUFFLE1BQU07b0JBQ2hCLFVBQVUsRUFBRSxRQUFRO29CQUNwQixjQUFjLEVBQUUsTUFBTTtvQkFDdEIsVUFBVSxFQUFFLE1BQU07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
