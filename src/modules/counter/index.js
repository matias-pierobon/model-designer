import saga from './sagas'
import reducer from './reducer'
import * as actions from './actions'
import * as selectors from './selectors'
import {NAME} from './constants'

export default {
    NAME,
    reducer,
    saga,
    actions,
    selectors
}