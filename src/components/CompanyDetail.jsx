import { Component } from 'react'
import { Row, Col, Navbar, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
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

    changeJob = (job) => {
        this.setState({
            jobSelected: job,
        })
    }

    render() { 
        return ( 
            <>
                <Navbar bg="light" variant="light">
                    <Link to='/'>
                        <Image className='brandLogo' src='https://remotive.io/remotive_website_static_pages/static/src/img/logo_remotive.png' />
                    </Link>
                    {/* <Form inline className='ml-auto'>
                <FormControl type="text" placeholder="Search Jobs" className="mr-sm-2" value={this.props.query} onChange={this.props.inputChange}/>
                <Button variant="outline-info" onClick={() => this.props.fecthJobs(this.props.query)} >Search</Button>
                </Form> */}
                </Navbar>
                <Row>
                    <Col md={4} >
                        {this.state.isLoading
                            ? <> Loading... </>
                            : <JobList jobs={this.state.compJobs} jobSelected={this.state.jobSelected} changeJob={this.changeJob} />
                        }
                    </Col>
                    <Col md={8} >
                        <JobDetail jobSelected={this.state.jobSelected} />
                    </Col>
                </Row>
            </>
        );
    }
}
 
export default CompanyDetail;