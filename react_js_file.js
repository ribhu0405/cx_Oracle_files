<link rel="stylesheet" type="text/css" href="../../css/main.css">

==============================================Prperties==============================================
    <div id="container"></div>

    <script type="text/babel">
        ReactDOM.render(
            <h2>Welcome to React!</h2>,
            document.getElementById('container')
        );
    </script>
            var Bacon = React.createClass({

            render : function() {

            return (<div>
                        <h1> {this.props.title} </h1>
                        <h2> {this.props.genre} </h2>

                   </div>)

        }

        });

        ReactDOM.render(<div>
                            <Bacon title = "Avatar" genre = "Action" />
                            <Bacon title = "Golmaal" genre = "Comedy" />
                            <Bacon title = "Sherlock Holmes" genre = "Detective Thriller"  />
                        </div>, document.getElementById('example'));

==============================================Event==============================================                        
                        
       var Comment = React.createClass({

            edit : function() {
                alert('Editing Comment');
            },

            remove : function() {
                alert('Removing Comment');
            },

            render : function() {

                return (
                    <div className = "commentContainer">

                        <div className = "commentText"> {this.props.children} </div>
                        <button onClick = {this.edit} className = "button-primary"> Edit </button>
                        <button onClick = {this.remove} className = "button-danger"> Remove </button>

                    </div>
                );
            }
        });

        ReactDOM.render(<div className = "board">
                            <Comment>Hey My Name is Bucky</Comment>
                            <Comment>Beans</Comment>
                            <Comment>Tuna</Comment>
                        </div>,
                        document.getElementById('container'));
                        
==============================================State (changing values to components) ==============================================

        var CheckBox = React.createClass({

            getInitialState : function() {

                return { checked : true }

            },

            handleChecked : function() {

                this.setState({checked : !this.state.checked })

            },

            render : function() {

                var msg;
                if (this.state.checked) {

                    msg = 'Checked'

                }
                else {

                    msg = 'Unchecked'

                }

                return (

                    <div>
                        <input type = "checkbox" defaultChecked = {this.state.checked} onChange = {this.handleChecked} />
                        <h1> Checkbox is {msg}</h1>
                    </div>

                );

            }
        });

        ReactDOM.render(<div>
                           <CheckBox />
                        </div>,
                        document.getElementById('container'));

============================================== Operate Componenets ==============================================


       var Comment = React.createClass({

            getInitialState : function(){

                return { editing : false }
            },
            edit : function() {

                this.setState({ editing : true });
            },

            save : function() {

                var val = this.refs.newText.value;
                console.log( 'New Comment : ' + val )
                this.props.updateCommentText(val, this.props.index);
                this.setState({ editing : false });
            },

            remove : function() {
                console.log('Removing Comment');
                this.props.deleteFromBoard(this.props.index);
            },

            renderNormal : function() {

                return (
                    <div className = "commentContainer">

                        <div className = "commentText"> {this.props.children} </div>
                        <button onClick = {this.edit} className = "button-primary"> Edit </button>
                        <button onClick = {this.remove} className = "button-danger"> Remove </button>

                    </div>
                );
            },

            renderForm : function() {

                return (
                    <div className = "commentContainer">
                        <textarea ref = "newText" defaultValue = {this.props.children} ></textarea>
                        <button onClick = {this.save} className = "button-success"> Save </button>

                    </div>
                );
            },

            render : function() {

                if (this.state.editing)

                    return (this.renderForm());

                else {

                    return (this.renderNormal());
                }
            }
       });

       var Board =  React.createClass({

                        getInitialState : function() {

                            return {

                                comments : ['I Like Bacon',
                                            'Want To Get Ice Cream',
                                            'Ok, we have enough comments now'
                                ]
                            }
                        },

                        removeComment : function (i) {

                            console.log('Removing Comments :' + i);
                            var arr = this.state.comments;
                            arr.splice(i, 1);

                            this.setState({comments : arr});

                        },

                        updateComment : function (newText,i) {

                            console.log('Updating Comments :');
                            var arr = this.state.comments;
                            arr[i] = newText
                            this.setState({comments : arr});

                        },

                        eachComment: function(text,i){

                            return (

                                        <Comment key = {i} index = {i} updateCommentText = {this.updateComment} deleteFromBoard = {this.removeComment}>

                                            {text}

                                        </Comment>

                                    );

                        },

                        render : function() {

                            return (

                                <div className = "board">
                                    {

                                        this.state.comments.map(this.eachComment)

                                    }
                                </div>

                            );

                        }

                    });

       ReactDOM.render(<div className = "board">
                            <Board />
                        </div>,
                        document.getElementById('container'));
                        
                        

============================================== Adding New Componenets ==============================================


       var Comment = React.createClass({

            getInitialState : function(){

                return { editing : false }
            },
            edit : function() {

                this.setState({ editing : true });
            },

            save : function() {

                var val = this.refs.newText.value;
                console.log( 'New Comment : ' + val )
                this.props.updateCommentText(val, this.props.index);
                this.setState({ editing : false });
            },

            remove : function() {
                console.log('Removing Comment');
                this.props.deleteFromBoard(this.props.index);
            },

            renderNormal : function() {

                return (
                    <div className = "commentContainer">

                        <div className = "commentText"> {this.props.children} </div>
                        <button onClick = {this.edit} className = "button-primary"> Edit </button>
                        <button onClick = {this.remove} className = "button-danger"> Remove </button>

                    </div>
                );
            },

            renderForm : function() {

                return (
                    <div className = "commentContainer">
                        <textarea ref = "newText" defaultValue = {this.props.children} ></textarea>
                        <button onClick = {this.save} className = "button-success"> Save </button>

                    </div>
                );
            },

            render : function() {

                if (this.state.editing)

                    return (this.renderForm());

                else {

                    return (this.renderNormal());
                }
            }
       });

       var Board =  React.createClass({

                        getInitialState : function() {

                            return {

                                comments : []
                            }
                        },

                        add : function (text) {

                            var arr = this.state.comments;
                            arr.push(text);

                            this.setState({comments : arr});

                        },


                        removeComment : function (i) {

                            console.log('Removing Comments :' + i);
                            var arr = this.state.comments;
                            arr.splice(i, 1);

                            this.setState({comments : arr});

                        },

                        updateComment : function (newText,i) {

                            console.log('Updating Comments :');
                            var arr = this.state.comments;
                            arr[i] = newText
                            this.setState({comments : arr});

                        },

                        eachComment: function(text,i){

                            return (

                                        <Comment key = {i} index = {i} updateCommentText = {this.updateComment} deleteFromBoard = {this.removeComment}>

                                            {text}

                                        </Comment>

                                    );

                        },

                        render : function() {

                            return (

                                <div>

                                    <button onClick = {this.add.bind(null,'Hello World')} className = "button-info"> Add New </button>

                                    <div className = "board">
                                        {

                                            this.state.comments.map(this.eachComment)

                                        }
                                    </div>

                                </div>

                            );

                        }

                    });

       ReactDOM.render(<div className = "board">
                            <Board />
                        </div>,
                        document.getElementById('container'));
    </script>