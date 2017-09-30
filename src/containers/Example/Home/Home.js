import React from "react"
import { connect } from "react-redux"
import counter from "modules/counter"

import styles from "./Home.module.scss"

const Home = props => (
  <div className={styles.container}>
    <h1 className={styles.home}>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>
        Increment
      </button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>
        Decrementing
      </button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page programatically
      </button>
    </p>
  </div>
)

const mapStateToProps = state => ({
  count: counter.selectors.getCount(state),
  isIncrementing: counter.selectors.getIsIncrementing(state),
  isDecrementing: counter.selectors.getIsDecrementing(state)
})

const mapDispatchToProps = {
  increment: counter.actions.increment,
  incrementAsync: counter.actions.incrementAsync,
  decrement: counter.actions.decrement,
  decrementAsync: counter.actions.decrementAsync,
  fetchUser: () => ({type: 'USER_FETCH_REQUESTED', payload: 'fede'})
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  changePage: () => ownProps.history.push("/about-us"),
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Home)
