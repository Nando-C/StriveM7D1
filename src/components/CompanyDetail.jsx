import { Component } from 'react'
class CompanyDetail extends Component {
    state = {  }

    componentDidMount = async () => {
        console.log(this.props.match.params.companyName);
    }
    render() { 
        return (  
            <>
            Company Jobs Listing
            </>
        );
    }
}
 
export default CompanyDetail;