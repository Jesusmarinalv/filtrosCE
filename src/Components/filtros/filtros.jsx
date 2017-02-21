import React from 'react';

export default class Filtros extends React.Component {

  constructor(props) {
    super(props);
    this.manejadorCambioArea=this.manejadorCambioArea.bind(this);
    this.manejadorCambioBimestre=this.manejadorCambioBimestre.bind(this);
  }

  manejadorCambioArea(e){
  	var valor= {area:e.target.value};

  	this.props.changeHandler(valor);
  }

  manejadorCambioBimestre(e){
  	var valor= {bimestre: e.target.value};

  	this.props.changeHandler(valor);
  }
  
  render() {
    return (
    	<div id="pulldowns">
      <div id="pulldown-area">
      <span>Por Area</span>
      <select onChange={this.manejadorCambioArea}>
      <option value={'all'}>7 Areas</option>
      {this.props.areas.map((area)=>{
      	return <option value={area.ID}>{area.titulo}</option>;
      })}
      <option value={'NA'}>Sin Area</option>
      </select>

      </div>
      {(this.props.modo=='cursos')?(
        <div id="pulldown-bimestre">
            <span>Por Bimestre</span>
          <select onChange={this.manejadorCambioBimestre}>
            <option value={'all'}>5 Bimestres</option>
            <option value={1}>Primero</option>
            <option value={2}>Segundo</option>
            <option value={3}>Tercero</option>
            <option value={4}>Cuarto</option>
            <option value={5}>Quinto</option>
            </select>
            </div>):''}
      </div>
    );
  }
}
