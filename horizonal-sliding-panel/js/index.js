var {
  Route,
  DefaultRoute,
  RouteHandler,
  Link
} = ReactRouter;
var TransitionGroup = React.addons.CSSTransitionGroup;

class Layout extends React.Component {
  render() {
    var name = this.context.router.getCurrentPath();
    return (
      React.createElement("div", null,
        React.createElement("nav", null,
          React.createElement("ul", null,
            React.createElement("li", null, React.createElement(Link, {
              to: "Game"
            }, "Game")),
            React.createElement("li", null, React.createElement(Link, {
              to: "Score"
            }, "Score")))),


        React.createElement(TransitionGroup, {
            component: "div",
            transitionName: "page-transition",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 300
          },
          React.createElement(RouteHandler, {
            key: name
          }))));



  }
}

Layout.contextTypes = {
  router: React.PropTypes.func.isRequired
};


class Game extends React.Component {
  render() {
    return (
      React.createElement("div", {
        className: "panel Game"
      }, "Game"));




  }
}

class Score extends React.Component {
  render() {
    return (
      React.createElement("div", {
        className: "panel Score"
      }, "Score"));

  }
}


var Routes =
  React.createElement(Route, {
      name: "app",
      path: "/",
      handler: Layout
    },
    React.createElement(Route, {
      name: "Game",
      handler: Game
    }),
    React.createElement(Route, {
      name: "Score",
      handler: Score
    }),
    React.createElement(DefaultRoute, {
      handler: Game
    }));

ReactRouter.run(Routes, Handler => React.render(React.createElement(Handler, null), document.getElementById('app')));