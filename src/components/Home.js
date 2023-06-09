import React from 'react'
import Section  from './Section';
import styled from "styled-components";
function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        
        />
        <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-X.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory" 
        />
        <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-Y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Lowest cost solar panels in America"
            description="Money-Back Guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order-Now"
            rightBtnText="Learn More"
        />
        <Section
            title="Solar for New Roofs"
            description="Solar Roof cost less than a new Roof"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn Now"
        />
        <Section
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
            rightBtnText=""
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh
`