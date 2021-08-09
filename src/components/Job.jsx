import { Card } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

const Job = ({ job, jobSelected }) => (
    <Card
        className={jobSelected?.id === job.id ? "border-thick mt-3" : "mt-3"}
        // onClick={() => changeBook(book)}
        style={{ cursor: "pointer" }}
    >
        <Card.Body className="d-flex">
            <Link to='/company-detail'>
                <img className="book-image" src={job.company_logo_url} alt="company logo" />
            </Link>
            <div>
                <Card.Text className="font-weight-bold">{job.title}</Card.Text>
                <Card.Text >
                    <Link to={"/company-detail/" + job.company_name}>{job.company_name}</Link>
                </Card.Text>
                <Card.Text >{job.category}</Card.Text>
                <Card.Text >{job.job_type}</Card.Text>
                <Card.Text >{job.salary}</Card.Text>
            </div>
        </Card.Body>
    </Card>
)

export default withRouter(Job)