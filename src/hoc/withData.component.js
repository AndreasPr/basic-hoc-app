import React from 'react';

const WithData = WrappedComponent => {
    class withDataClass extends React.Component{
        constructor(props){
            super(props);

            this.state = {
                data: []
            };
        }

        componentDidMount(){
            fetch(this.props.sourceOfData)
            .then(response => response.json())
            .then(data => this.setState({data: data.slice(0,3)}));
        }

        render(){
            const {sourceOfData, ...otherProps} = this.props;
            return(
                <WrappedComponent data={this.state.data} {...otherProps} />
            );
        }
    }
    return withDataClass;
};
export default WithData;