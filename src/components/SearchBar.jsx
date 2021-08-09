import { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

class SearchBar extends Component {
    state = {  }

    render() { 
        return (  
            <Form inline className='my-3'>
                <FormControl type="text" placeholder="Search Jobs" className="mr-sm-2" value={this.props.query} onChange={this.props.inputChange}/>
                <Button variant="outline-info" onClick={() => this.props.fecthJobs(this.props.query)} >Search</Button>
            </Form>
        );
    }
}
 
export default SearchBar;