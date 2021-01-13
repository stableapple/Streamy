import React, { Component } from 'react';

class GoogleAuth extends React.Component{
    state= {isSignedIn: null};
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'602206568945-h2r1ehr8strrto5ngaug85053hdnr365.apps.googleusercontent.com',
                scope:'email'
            }).then(()=> {
                this.auth=window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    }
    onAuthChange= () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }
    renderAuthButton() {
        if(this.state.isSignedIn === null){
            return <div>Yes</div>;
        }
        else if(this.state.isSignedIn){
            return(
                <button className="ui red google button">
                    Sign Out
                </button>
            )
        }
        else{
            return(
                <button className="ui red google button">Sign In</button>
            )
        }
    }
    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}
export default GoogleAuth;