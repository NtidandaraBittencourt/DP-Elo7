import React from 'react'

export default function Coluna1() {
	return (
		<div className="coluna1">
      <img src="src/assets/img1.svg" alt="Main Image" className="image"/>
      <div className="texto">
        <p className="typography">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et viverra orci. Praesent consequat dolor tellus, eget viverra risus hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque libero eu eros sagittis.
        </p>
        <div className="divider"></div>
        <div className="link-box">
          <a href="#">
            vagas em aberto
            <i className="fa-solid fa-angle-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
	)
}
