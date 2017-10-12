import { connect } from 'react-redux';
import { addRequest } from '../actions';
import requestList from '../components/requestList';

const mapStateToProps = (state, ownProps) => ({
    requests: state.requests
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAddRequest: (request) => {
        dispatch(addRequest(request))
    }
})

const RequestsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(requestList)

export default RequestsContainer
