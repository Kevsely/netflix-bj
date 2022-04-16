import React from "react"

import CustomButton from "../custom-button/custom-button.component"

import "./synopsis.styles.scss" 

const Synopsis = () => {
    return (
        <div className="synopsis">
            <div className="title">The Avengers</div>

            <div className="subtitle">Triller · 2h43m · 2021</div>

            <div className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit unde aliquid amet dolore quae maiores iure nihil voluptates inventore. Nisi perferendis excepturi obcaecati, eveniet commodi iste consectetur corrupti mollitia atque beatae, animi, dignissimos reiciendis. A, odio? Nemo ullam perferendis incidunt mollitia. Minima, quo. Voluptatum dolor nam, quisquam perspiciatis ex tempore accusamus molestias facere obcaecati sequi repellat sapiente tenetur, cumque nihil?
            </div>

            <div className="buttons-container">
                <CustomButton main>Watch Now</CustomButton>
                <CustomButton>See more</CustomButton>
            </div>
        </div>
    )
}

export default Synopsis