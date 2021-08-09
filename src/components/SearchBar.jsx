import { Component } from 'react'
import { Form, FormControl, Button, Navbar, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    state = {  }

    render() { 
        return ( 
            <Navbar bg="light" variant="light">
            <Link to='/'>
                <Image className='brandLogo' src='https://remotive.io/remotive_website_static_pages/static/src/img/logo_remotive.png'/>
            </Link>
            <Form inline className='ml-auto'>
                <FormControl type="text" placeholder="Search Jobs" className="mr-sm-2" value={this.props.query} onChange={this.props.inputChange}/>
                <Button variant="outline-info" onClick={() => this.props.fecthJobs(this.props.query)} >Search</Button>
            </Form>
          </Navbar> 
            // <Form inline className='my-3'>
            //     <FormControl type="text" placeholder="Search Jobs" className="mr-sm-2" value={this.props.query} onChange={this.props.inputChange}/>
            //     <Button variant="outline-info" onClick={() => this.props.fecthJobs(this.props.query)} >Search</Button>
            // </Form>
        );
    }
}
 
export default SearchBar;