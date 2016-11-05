
var Corgi = React.createClass({
    setGreeting: function () {
        this.setState({
            name: this.state.new_name
        });
    },
    componentDidMount: function () {
        this.app = corgi()
        var _this = this;
        _this.app.getUser(function (user) {
            _this.setState({
                user: user
            })
        })
        _this.app.getScanList(function (scanList) {
            _this.setState({
                scanList: scanList
            })
        })
    },
    getInitialState: function () {
        return {
            name: 'enter your name',
            scanList: [],
            user: {}
        }
    },
    setName: function (event) {
        this.setState({
            new_name: event.target.value.toLowerCase(),
            name: this.state.name
        });
        /*this.setState({
         name: event.target.value.toLowerCase()
         });*/
    },
    render: function () {
        return (
            <div class="my-component">


        <h1>Hello, {this.state.name}</h1>
        <input type="text" placeholder="Name" onChange={this.setName}/>

        <button type="button" onClick={this.setGreeting}>submit</button>
        </div>
        )
    }
});

ReactDOM.render(
<Corgi />,
    document.getElementById('page-body')
);
