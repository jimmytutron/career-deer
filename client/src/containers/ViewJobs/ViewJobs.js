import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Container, Col, Row } from '../../components/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ViewJobs.css';

import Zoom from 'react-reveal/Zoom';

import { connect } from 'react-redux';
import { editJob, resetViewJobs, getAllSavedJobs, updateViewJobs } from './actions';



class ViewJobs extends Component {

  componentWillMount() {
    this.props.getAllSavedJobs();
  }

  render() {
    if (this.props.viewJobs.edit) {
      return <Redirect to='/updateJob' />
    };
    return (
      <React.Fragment>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col size="12 md-12 lg-5">
            <h1 className="text-center mb-5 montserrat font-weight-bold"><i className="fas fa-book-open"></i> Your Tracked Jobs</h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
            {this.props.viewJobs.data.map((job, i) => (
        <Zoom>
        <Card key={`viewjob-${i}`} className="my-2 mx-2 job-card">
            <CardContent>
                <Typography className="pt-2" color="textSecondary">
                {job.company_name}
                </Typography>
                <Typography variant="headline" component="h2">
                {job.title}
                </Typography>
                <Typography color="textSecondary">
                {job.post_date}
                </Typography>
                <Typography component="p">
                {job.location}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => this.props.editJob(this.props.viewJobs.data[i])} data-id={job._id}>
                <i className="fas fa-pen-square"></i> &nbsp; Edit
                </Button>
            </CardActions>
        </Card>
        </Zoom>
            ))}
        </Row>
      </Container>
      </React.Fragment>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    viewJobs: state.viewJobs,
    updateJob: state.updateJob
  }
};

const mapActionsToProps = (dispatch, props) => ({
  resetViewJobs,
  updateViewJobs,
  getAllSavedJobs,
  editJob
})

export default connect(mapStateToProps, mapActionsToProps())(ViewJobs);

