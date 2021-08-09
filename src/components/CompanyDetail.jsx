import { Component } from 'react'
import { Row } from 'react-bootstrap'
import JobList from './JobList'

class CompanyDetail extends Component {
    state = {  
        compJobs: [],
        jobSelected: null,
        isLoading: true
    }

    fetchCompany = async () => {
       try {
        console.log(this.props.match.params.companyName);
        let response = await fetch(
            `https://remotive.io/api/remote-jobs?company_name=${this.props.match.params.companyName}`
        )
        if (response.ok) {
            let companyJobs = await response.json()
            console.log(companyJobs)
            this.setState({ 
                compJobs: companyJobs.jobs, 
                isLoading: false
            })
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
             <Row>
                {this.state.isLoading 
                ? <> Loading... </>
                : <JobList jobs={this.state.compJobs} jobSelected={this.state.jobSelected} />
                }
            </Row>
        );
    }
}
 
export default CompanyDetail;