import React from "react"
import { connect } from "react-redux"
import { Card, Button } from "antd"

const Attr = ({ attr }) => <p>{attr.name}</p>

export default ({ entity }) => (
  <Card title={entity.name} extra={<a href="#">More</a>}>
    
    <Button.Group>
      <Button type="primary" icon="plus">Attribute</Button>
      <Button type="primary" icon="share">Relationship</Button>
    </Button.Group>

    <p/>

    { entity.attributes && entity.attributes.map((attr, index) => <Attr key={index} attr={attr} />)}
  </Card>
)
