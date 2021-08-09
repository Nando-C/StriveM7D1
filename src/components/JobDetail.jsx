import { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class JobDetail extends Component {
    state = {  
        job: null,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.jobSelected !== this.props.jobSelected) {
            this.setState({
                job: this.props.jobSelected,
            })
        }
    }
    jobDescription = () => {
        return {__html: this.state.job.description}
    }

    render() { 
        return (  
            <div className='mt-3' >
                {this.state.job 
                    ? <>
                        <Row>
                            <Col sm={12}>
                                <h1>{this.state.job.title} </h1>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm={4}>
                                <div className="mt-3">
                                    <img className="book-cover" src={this.state.job.company_logo_url} alt="job selected" />
                                </div>
                            </Col>
                            <Col sm={8}>
                                <p>
                                    <span className="font-weight-bold">Company: </span>
                                    {this.state.job.company_name}
                                </p>
                                <p>
                                    <span className="font-weight-bold">Category: </span>
                                    {this.state.job.category}
                                </p>
                                <p>
                                    <span className="font-weight-bold">Salary: </span>
                                    {this.state.job.salary}
                                </p>
                                <p>
                                    <span className="font-weight-bold">Job Type: </span>
                                    {this.state.job.job_type}
                                </p>
                                <p>
                                    <span className="font-weight-bold">Required Location: </span>
                                    {this.state.job.candidate_required_location}
                                </p>
                                <p>
                                    <span className="font-weight-bold">Publication Date: </span>
                                    {this.state.job.publication_date}
                                </p>
                            </Col>
                        </Row>
                        <Row className='my-4'>
                            <Col sm={12} >
                                <p>
                                    <span className="font-weight-bold">Description:</span><br/>
                                    <div className='mt-2' dangerouslySetInnerHTML={this.jobDescription()} />
                                </p>
                            </Col>

                        </Row>
                    </>
                    : <Row>
                        <Col sm={12} >
                            <h3>Please select a job to see all details</h3>
                        </Col>
                    </Row>
            }

            </div>
        );
    }
}
 
export default JobDetail;