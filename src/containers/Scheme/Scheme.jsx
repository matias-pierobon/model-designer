import React from "react"
import { connect } from "react-redux"
import { Button, Icon, Row, Col, Input, Modal } from "antd"
import { Entity } from "components"
import * as schema from "modules/schema"

const { Group: ButtonGroup } = Button

const EntityList = ({ entities }) => (
  <Row gutter={24}>
    {entities &&
      entities.map((entity, index) => (
        <Col key={index} xs={24} sm={12} lg={8}>
          <Entity entity={entity} />
        </Col>
      ))}
  </Row>
)

@connect(state => ({ entities: schema.selectors.getEntities(state) }), {
  createEntity: schema.actions.createEntity
})
class Schema extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      name: ""
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleOk = e => {
    let { name } = this.state
    this.props.createEntity({ name })
    this.setState({
      visible: false,
      name: ""
    })
  }
  handleCancel = e => {
    this.setState({
      visible: false,
      name: ""
    })
  }
  render() {
    let { createEntity, entities } = this.props

    return (
      <div>
        <Button type="primary" onClick={ (e) => this.showModal() }>New Entity</Button>
        <Modal
          title="Create new Entity"
          okText="create"
          cancelText="cancel"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input
            size="large"
            placeholder="Entity name"
            value={this.state.name}
            onPressEnter={e => this.handleOk}
            onChange={ e => this.setState({ name: e.target.value })}
          />
        </Modal>
        <br />
        <EntityList entities={entities} />
      </div>
    )
  }
}

export default Schema
