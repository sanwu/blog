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
    var BlogMain = (function (_super) {
        __extends(BlogMain, _super);
        function BlogMain() {
            _super.apply(this, arguments);
        }
        BlogMain.init = function () {
            ReactDOM.render(React.createElement(Button, {kind: "primary"}, "Radium Button"), document.getElementById('app'));
        };
        return BlogMain;
    }(React.Component));
    exports.BlogMain = BlogMain;
});
define("src/view/main", ["require", "exports", "src/view/BlogMain"], function (require, exports, BlogMain_1) {
    BlogMain_1.BlogMain.init();
});
console.log('http://sanwu.org');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3L0Jsb2dNYWluLnRzeCIsInNyYy92aWV3L21haW4udHMiLCJ0eXBpbmdzL251bGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBTUE7UUFBNEIsMEJBQXdCO1FBSS9DLGdCQUFtQixLQUFLLEVBQUUsT0FBTztZQUNoQyxrQkFBTSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFESixVQUFLLEdBQUwsS0FBSyxDQUFBO1FBRTFCLENBQUM7UUFDRix1QkFBTSxHQUFOO1lBTUUsTUFBTSxDQUFDLENBQ0wscUJBQUMsTUFBTSxJQUNMLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsSUFBSTtnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDdkIsR0FDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVMsQ0FDZCxDQUNWLENBQUM7UUFDSixDQUFDO1FBckJNLGdCQUFTLEdBQUc7WUFDakIsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVTtTQUMvRCxDQUFDO1FBSko7WUFBQyxNQUFNOztrQkFBQTtRQXdCUCxhQUFDO0lBQUQsQ0F2QkEsQUF1QkMsQ0F2QjJCLEtBQUssQ0FBQyxTQUFTLEdBdUIxQztJQXZCWSxjQUFNLFNBdUJsQixDQUFBO0lBSUQsSUFBSSxNQUFNLEdBQUc7UUFDWCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsTUFBTTtZQUliLFFBQVEsRUFBRTtnQkFDUixVQUFVLEVBQUUsU0FBUzthQUN0QjtTQUNGO1FBRUQsT0FBTyxFQUFFO1lBQ1AsVUFBVSxFQUFFLFNBQVM7U0FDdEI7UUFFRCxPQUFPLEVBQUU7WUFDUCxVQUFVLEVBQUUsU0FBUztTQUN0QjtLQUNGLENBQUM7SUFFRjtRQUE4Qiw0QkFBd0I7UUFBdEQ7WUFBOEIsOEJBQXdCO1FBSXRELENBQUM7UUFIVyxhQUFJLEdBQVg7WUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDLG9CQUFDLE1BQU0sR0FBQyxJQUFJLEVBQUMsU0FBUyxtQkFBdUIsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEcsQ0FBQztRQUNKLGVBQUM7SUFBRCxDQUpBLEFBSUMsQ0FKNkIsS0FBSyxDQUFDLFNBQVMsR0FJNUM7SUFKWSxnQkFBUSxXQUlwQixDQUFBOzs7SUN2REQsbUJBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7QUNGaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4uLy4uL2J1aWxkL3ZpZXcuanMiLCJzb3VyY2VSb290IjoiLi4ifQ==
