import { connect } from 'react-redux';
import Profile from '../components/profile';

const initialState = {
    profiles: [
        { name: "name1", request: [] }, 
        { name: "name2", request: ["person2 request1", "person2 r2"] }, 
        { name: "name3", request: ["p2r1", "ptr2"] }, 
    ]
}

// state stuff is broken right now
const mapStateToProps = (state=initialState, ownProps) => ({
    profile: state.profiles[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({})

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)

export default ProfileContainer
