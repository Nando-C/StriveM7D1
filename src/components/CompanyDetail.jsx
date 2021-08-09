import { Component } from 'react'
class CompanyDetail extends Component {
    state = {  }

    fetchCompany = async () => {
       try {
        console.log(this.props.match.params.companyName);
        let response = await fetch(
            `https://remotive.io/api/remote-jobs?company_name=${this.props.match.params.companyName}`
        )
        if (response.ok) {
            let companyJobs = await response.json()
            console.log(companyJobs)
        } else {
            console.log('Something went wrong fetching company jobs')
        }
       } catch (error) {
           console.log(error);
       }
    }
    componentDidMount = () => {
        this.fetchCompany()
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