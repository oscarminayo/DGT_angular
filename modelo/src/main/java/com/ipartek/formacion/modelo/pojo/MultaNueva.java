package com.ipartek.formacion.modelo.pojo;

public class MultaNueva {
	
	private int id;
	private String concepto;	
	private Double importe;
	private int id_coche;
	private int id_agente;
	
	
	
	public MultaNueva() {
		super();
		
		this.id = -1;
		this.concepto="";
		this.importe=0.0;		
		this.id_coche= -1;
		this.id_agente= -1;
	}
	
	
	public MultaNueva(int id, String concepto, Double importe, int id_coche, int id_agente) {
		this();
		setId(id);		
		setConcepto(concepto);
		setImporte(importe);
		setId_coche(id_coche);
		setId_agente(id_agente);
		
		
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getConcepto() {
		return concepto;
	}
	public void setConcepto(String concepto) {
		this.concepto = concepto;
	}
	public Double getImporte() {
		return importe;
	}
	public void setImporte(Double importe) {
		this.importe = importe;
	}
	public int getId_coche() {
		return id_coche;
	}
	public void setId_coche(int id_coche) {
		this.id_coche = id_coche;
	}
	public int getId_agente() {
		return id_agente;
	}
	public void setId_agente(int id_agente) {
		this.id_agente = id_agente;
	}


	@Override
	public String toString() {
		return "MultaNueva [id=" + id + ", concepto=" + concepto + ", importe=" + importe + ", id_coche=" + id_coche
				+ ", id_agente=" + id_agente + "]";
	}
	
	

}