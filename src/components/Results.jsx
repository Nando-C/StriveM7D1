import { Component } from "react"
import JobList from "./JobList"
import { Row } from 'react-bootstrap'

class Results extends Component {
    state = {
        jobs: [],
        jobSelected: null,
        isLoading: true
    }

    componentDidMount = async () => {
        try {
            let response = await fetch(
                `https://remotive.io/api/remote-jobs?limit=10`
            )
            if (response.ok) {
                let results = await response.json()
                let resultJobs = results.jobs
                console.log(resultJobs);
                this.setState({ 
                    jobs: resultJobs, 
                    isLoading: false
                })
            } else {
                console.log('Something went wrong');
            }
        } catch (error) {
            console.log(error)
        }
    }
    render() { 
        return (
            <Row>
                {this.state.isLoading 
                ? <> Loading... </>
                : <JobList jobs={this.state.jobs} jobSelected={this.state.jobSelected} />
                // : <> {this.state.jobs[0]}</>
                }
            </Row>
        );
    }
}
 
export default Results;