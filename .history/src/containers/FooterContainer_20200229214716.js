import {connect} from 'redux'
import Footer from '../components/Footer'
import { setFilter } from '../actions'

const mapStateToProps=state=>({
    filter:state.filter
})

const mapDispatchToProps=dispatch=>{
    setFilter:filter=>dispatch(setFilter(filter))
}