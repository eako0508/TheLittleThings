//login-reducer
import {TOGGLE_LOGIN_MODAL} from '../actions/toggleLoginModal';

const initState = {
	//processing: false
}

export default (state=initState, action) => {
	if(action.type = TOGGLE_LOGIN_MODAL){
		return state;
	}
}